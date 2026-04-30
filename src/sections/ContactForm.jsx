import React, { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { CountrySelect } from './CountrySelect';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import './ContactForm.css';

/**
 * Contact form
 * --------------------------------------------------------------------------
 * Submission goes to Formspree — no backend code, no email sent from the
 * audela.me domain, so audela.me's deliverability/reputation is unaffected.
 *
 * SETUP (one-time):
 *   1. Sign up at https://formspree.io with the recipient inbox
 *      (currently 99perceptions@gmail.com for testing).
 *   2. Create a new form. Formspree gives you an endpoint like
 *      https://formspree.io/f/xyzabc12
 *   3. Set `VITE_FORMSPREE_ENDPOINT` in your environment:
 *        - Locally:   add to `.env.local` at the project root
 *        - Vercel:    Project → Settings → Environment Variables
 *      Example value: https://formspree.io/f/xyzabc12
 *   4. Confirm the recipient in the Formspree dashboard once and submissions
 *      will start delivering. Formspree handles spam (Akismet), honeypot
 *      detection, and rate limiting.
 *
 * NOTE: Until the env var is set, submissions short-circuit with a friendly
 *       error message instead of POSTing to an undefined URL.
 */

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

// RFC-5322-lite — practical email validator, rejects obvious garbage.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

export const ContactForm = () => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
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
      case 'phone':
        if (!value) return '';
        if (!isValidPhoneNumber(value)) {
          return 'Please enter a valid phone number including the country code.';
        }
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
    ['firstName', 'email', 'phone', 'message'].forEach((field) => {
      const msg = validateField(field, formData[field]);
      if (msg) next[field] = msg;
    });
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    // Honeypot — real users never fill this hidden field; bots usually do.
    if (e.target.elements._gotcha && e.target.elements._gotcha.value) {
      // Pretend success to not tip off the bot.
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
      setSubmitError(
        'The form endpoint has not been configured. Please email info@audela.me directly.'
      );
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone,
          company: formData.company.trim(),
          message: formData.message.trim(),
          _subject: `New contact from ${formData.firstName.trim()}${
            formData.company.trim() ? ' — ' + formData.company.trim() : ''
          }`,
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
    <section id="cta" className="section-padding contact-section">
      <div className="container">
        <div className="contact-grid">

          <AnimatedSection yOffset={40} className="contact-text-col">
            <div className="tag">Let's Collaborate</div>
            <h2>Let's Build the Future Together</h2>
            <p className="contact-subtitle">
              We help leaders solve strategic, financial, and regulatory challenges in deploying AI at scale. Tell us your objective; we'll design a path to measurable outcomes.
            </p>
            <div className="contact-direct">
              <p>Or send us an email directly at:</p>
              <a href="mailto:info@audela.me">info@audela.me</a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} yOffset={40} className="contact-form-col">
            {status === 'success' ? (
              <div className="glass-panel contact-form contact-success" role="status">
                <h3 className="contact-success-title">Thanks — your message is on its way.</h3>
                <p className="contact-success-body">
                  We'll be in touch shortly. In the meantime, feel free to reach us
                  directly at <a href="mailto:info@audela.me">info@audela.me</a>.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setStatus('idle')}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form className="glass-panel contact-form" onSubmit={handleSubmit} noValidate>

                {/* Honeypot — hidden from users, attractive to bots. */}
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
                    <label htmlFor="firstName">First Name*</label>
                    <input
                      required
                      type="text"
                      id="firstName"
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
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                      required
                      type="email"
                      id="email"
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
                    <label htmlFor="phone">Phone</label>
                    <PhoneInput
                      id="phone"
                      name="phone"
                      international
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

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message*</label>
                  <textarea
                    required
                    id="message"
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

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Start Now'}
                </button>
              </form>
            )}
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};
