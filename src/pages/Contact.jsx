import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/ui/SEO';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import './Contact.css';

const ease = [0.22, 1, 0.36, 1];

const HeroGeo = () => (
  <svg className="contact-hero-geo" viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="contact-geo" x="0" y="0" width="72" height="72" patternUnits="userSpaceOnUse">
        <circle cx="36" cy="36" r="28" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="36" cy="36" r="16" fill="none" stroke="currentColor" strokeWidth="0.35"/>
        <line x1="36" y1="8"  x2="36" y2="64" stroke="currentColor" strokeWidth="0.2"/>
        <line x1="8"  y1="36" x2="64" y2="36" stroke="currentColor" strokeWidth="0.2"/>
        <line x1="16" y1="16" x2="56" y2="56" stroke="currentColor" strokeWidth="0.15"/>
        <line x1="56" y1="16" x2="16" y2="56" stroke="currentColor" strokeWidth="0.15"/>
      </pattern>
    </defs>
    <rect width="500" height="280" fill="url(#contact-geo)"/>
  </svg>
);

const ContactForm = () => {
  const [values, setValues] = useState({ name: '', company: '', email: '', product: '', timing: '', message: '' });

  const handleChange = e => setValues(v => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    alert('Message received. We\'ll be in touch shortly.');
    setValues({ name: '', company: '', email: '', product: '', timing: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="cf-row">
        <div className="cf-field">
          <label className="cf-label" htmlFor="cf-name">Full Name</label>
          <input id="cf-name" className="cf-input" type="text" name="name" placeholder="Your name" value={values.name} onChange={handleChange} required />
        </div>
        <div className="cf-field">
          <label className="cf-label" htmlFor="cf-company">Company</label>
          <input id="cf-company" className="cf-input" type="text" name="company" placeholder="Organisation name" value={values.company} onChange={handleChange} />
        </div>
      </div>
      <div className="cf-field">
        <label className="cf-label" htmlFor="cf-email">Email Address</label>
        <input id="cf-email" className="cf-input" type="email" name="email" placeholder="you@company.com" value={values.email} onChange={handleChange} required />
      </div>
      <div className="cf-row">
        <div className="cf-field">
          <label className="cf-label" htmlFor="cf-product">Solution of Interest</label>
          <select id="cf-product" className="cf-input cf-select" name="product" value={values.product} onChange={handleChange}>
            <option value="">Select a solution</option>
            <option value="clara">Clara™ — Finance Operations</option>
            <option value="reven">Reven™ — Revenue Cycle</option>
            <option value="lens">Lens™ — Field Quality AI</option>
            <option value="shift">Shift™ — Workforce Intelligence</option>
            <option value="multiple">Multiple solutions</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
        <div className="cf-field">
          <label className="cf-label" htmlFor="cf-timing">Preferred Timing</label>
          <select id="cf-timing" className="cf-input cf-select" name="timing" value={values.timing} onChange={handleChange}>
            <option value="">When works for you?</option>
            <option value="asap">As soon as possible</option>
            <option value="this-week">This week</option>
            <option value="next-week">Next week</option>
            <option value="this-month">This month</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>
      <div className="cf-field">
        <label className="cf-label" htmlFor="cf-message">Message</label>
        <textarea id="cf-message" className="cf-input cf-textarea" name="message" placeholder="Tell us what you're working on or the challenges you're facing…" rows={5} value={values.message} onChange={handleChange} required />
      </div>
      <button type="submit" className="cf-submit">Send Message</button>
    </form>
  );
};

export const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Audela — Request a Demo or Get in Touch"
        description="Have a question or want to see Audela's AI solutions in action? Reach out to our team and we'll get back to you within one business day."
        path="/contact"
      />
      {/* Hero */}
      <section className="contact-hero">
        <HeroGeo />
        <div className="container contact-hero-inner">
          <motion.span className="contact-hero-tag" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            Get in Touch
          </motion.span>
          <motion.h1 className="contact-hero-headline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1, ease }}>
            Let's Build<br /><em>Something.</em>
          </motion.h1>
          <motion.p className="contact-hero-desc" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22, ease }}>
            Whether you have a question, want a live demo, or are ready to explore
            what Audela can do for your operation — this is the right place to start.
          </motion.p>
        </div>
      </section>

      {/* Single form */}
      <section className="contact-forms-section">
        <div className="container contact-single">
          <AnimatedSection yOffset={28}>
            <div className="contact-panel contact-panel-light">
              <div className="contact-panel-header">
                <span className="contact-panel-tag">Get in Touch</span>
                <h2 className="contact-panel-title">Contact Us</h2>
                <p className="contact-panel-desc">
                  Questions, demo requests, or partnership enquiries — fill in the form
                  and our team will respond within one business day.
                </p>
              </div>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};
