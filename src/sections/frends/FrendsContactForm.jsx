import React, { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { PHONE_COUNTRIES } from '../phoneCountries';
import { CountrySelect } from '../CountrySelect';
import { AnimatedSection } from '../../components/ui/AnimatedSection';
import { CONTACT_EMAIL, contact } from './frendsContent';
import '../ContactForm.css';

/**
 * Contact form for the Frends partner page.
 *
 * Same Formspree wiring as `sections/ContactForm.jsx` (see the setup notes
 * there). Submissions are tagged with `source: "frends"` and an "Interest"
 * field so they can be routed separately from general Audelà enquiries.
 */
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  interest: '',
  message: '',
};

export const FrendsContactForm = () => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((d) => ({ ...d, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handlePhoneChange = (value) => {
    setFormData((d) => ({ ...d, phone: value || '' }));
    if (errors.phone) setErrors((er) => ({ ...er, phone: undefined }));
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
        return value.trim() ? '' : 'First name is required.';
      case 'email':
        if (!value.trim()) return 'Email is required.';
        if (!EMAIL_RE.test(value.trim())) return 'Please enter a valid email address.';
        return '';
      case 'company':
        return value.trim() ? '' : 'Company is required.';
      case 'interest':
        return value ? '' : 'Please choose what you are interested in.';
      case 'phone':
        if (!value) return '';
        if (!isValidPhoneNumber(value)) return 'Please enter a valid phone number including the country code.';
        return '';
      case 'message':
        if (!value.trim()) return 'Please tell us a bit about what you need.';
        if (value.trim().length < 10) return 'Your message is a little short — a sentence or two helps.';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const msg = validateField(name, value);
    setErrors((er) => ({ ...er, [name]: msg || undefined }));
  };

  const handlePhoneBlur = () => {
    const msg = validateField('phone', formData.phone);
    setErrors((er) => ({ ...er, phone: msg || undefined }));
  };

  const validate = () => {
    const next = {};
    ['firstName', 'email', 'company', 'interest', 'phone', 'message'].forEach((field) => {
      const msg = validateField(field, formData[field]);
      if (msg) next[field] = msg;
    });
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (e.target.elements._gotcha && e.target.elements._gotcha.value) {
      setStatus('success');
      return;
    }

    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      setStatus('error');
      setSubmitError(`The form endpoint has not been configured. Please email ${CONTACT_EMAIL} directly.`);
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'frends',
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone,
          company: formData.company.trim(),
          interest: formData.interest,
          message: formData.message.trim(),
          _subject: `Frends enquiry — ${formData.company.trim()} (${formData.interest})`,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Submission failed (${res.status}).`);
      }
      setStatus('success');
      setFormData(initialData);
    } catch (err) {
      setStatus('error');
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="section-padding contact-section frends-contact">
      <div className="container">
        <div className="contact-grid">
          <AnimatedSection yOffset={40} className="contact-text-col">
            <div className="tag">{contact.tag}</div>
            <h2>{contact.headline}</h2>
            <p className="contact-subtitle">{contact.subtitle}</p>
            <div className="contact-direct">
              <p>Or send us an email directly at:</p>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} yOffset={40} className="contact-form-col">
            {status === 'success' ? (
              <div className="glass-panel contact-form contact-success" role="status">
                <h3 className="contact-success-title">Thanks — your message is on its way.</h3>
                <p className="contact-success-body">
                  We'll come back to you shortly. In the meantime you can reach us directly
                  at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
                <button type="button" className="btn btn-secondary" onClick={() => setStatus('idle')}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="glass-panel contact-form" onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex="-1"
                  autoComplete="off"
                  className="contact-honeypot"
                  aria-hidden="true"
                />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="f-firstName">First Name*</label>
                    <input
                      required
                      type="text"
                      id="f-firstName"
                      name="firstName"
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.firstName}
                    />
                    {errors.firstName && <p className="form-error">{errors.firstName}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-lastName">Last Name</label>
                    <input
                      type="text"
                      id="f-lastName"
                      name="lastName"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="f-email">Work Email*</label>
                    <input
                      required
                      type="email"
                      id="f-email"
                      name="email"
                      autoComplete="email"
                      inputMode="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="form-error">{errors.email}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-phone">Phone</label>
                    <PhoneInput
                      id="f-phone"
                      name="phone"
                      international
                      countries={PHONE_COUNTRIES}
                      defaultCountry="AE"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      onBlur={handlePhoneBlur}
                      countrySelectComponent={CountrySelect}
                      aria-invalid={!!errors.phone}
                      className="phone-input"
                    />
                    {errors.phone && <p className="form-error">{errors.phone}</p>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="f-company">Company*</label>
                    <input
                      required
                      type="text"
                      id="f-company"
                      name="company"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.company}
                    />
                    {errors.company && <p className="form-error">{errors.company}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-interest">I'm interested in*</label>
                    <div className="frends-select-wrap">
                      <select
                        required
                        id="f-interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={!!errors.interest}
                        className="frends-select"
                      >
                        <option value="" disabled>Select one…</option>
                        {contact.interests.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <svg className="frends-select-chevron" viewBox="0 0 10 7" fill="none" aria-hidden="true">
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {errors.interest && <p className="form-error">{errors.interest}</p>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="f-message">What are you trying to connect or automate?*</label>
                  <textarea
                    required
                    id="f-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>

                {status === 'error' && submitError && (
                  <p className="form-submit-error" role="alert">{submitError}</p>
                )}

                <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Request a conversation'}
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
