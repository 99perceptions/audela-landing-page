import React, { useState } from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import './ContactForm.css';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', company: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally handle logic here
    alert("Form submitted! (Demo)");
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
              <a href="mailto:hello@audella.ai">hello@audella.ai</a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} yOffset={40} className="contact-form-col">
            <form className="glass-panel contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name*</label>
                  <input required type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <textarea required id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Start Now
              </button>
            </form>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};
