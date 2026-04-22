import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Legal.css';

const easeOut = [0.22, 1, 0.36, 1];

const sections = [
  {
    title: '1. Information We Collect',
    body: [
      'We collect information you provide directly to us, such as when you fill out a contact form, request a demo, or correspond with us. This may include your name, company name, email address, and the nature of your inquiry.',
      'We may also collect technical information automatically when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed. This information is collected through cookies and similar technologies.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: [
      'We use the information we collect to respond to your inquiries and provide the services you request, to communicate with you about our products, services, and company updates, to improve and optimise our website and user experience, and to comply with legal obligations.',
      'We do not sell, rent, or trade your personal information to third parties for their marketing purposes.',
    ],
  },
  {
    title: '3. Cookies and Tracking Technologies',
    body: [
      'Our website uses cookies to distinguish you from other users, to remember your preferences, and to understand how our website is used. You can manage your cookie preferences at any time using the cookie consent panel available on our site.',
      'Essential cookies are required for the site to function and cannot be disabled. Analytics cookies help us understand visitor behaviour so we can improve the site. Marketing cookies are used to deliver relevant content and measure the effectiveness of our communications.',
    ],
  },
  {
    title: '4. Data Sharing and Disclosure',
    body: [
      'We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality obligations. These providers are not permitted to use your information for their own purposes.',
      'We may disclose your information if required by law, court order, or governmental authority, or where we believe disclosure is necessary to protect our rights, your safety, or the safety of others.',
    ],
  },
  {
    title: '5. Data Retention',
    body: [
      'We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, including to satisfy any legal, regulatory, accounting, or reporting requirements.',
      'When your information is no longer required, we will securely delete or anonymise it.',
    ],
  },
  {
    title: '6. Data Security',
    body: [
      'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.',
    ],
  },
  {
    title: '7. Your Rights',
    body: [
      'Depending on your jurisdiction, you may have the right to access, correct, or delete the personal information we hold about you. You may also have the right to object to or restrict certain processing, and the right to data portability.',
      'To exercise any of these rights, please contact us using the details provided below. We will respond to your request within the timeframe required by applicable law.',
    ],
  },
  {
    title: '8. International Transfers',
    body: [
      'Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have data protection laws that differ from those of your country. Where required, we implement appropriate safeguards for such transfers.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website with a revised effective date. Your continued use of our website after such changes constitutes your acceptance of the updated policy.',
    ],
  },
  {
    title: '10. Contact Us',
    body: [
      'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:',
      'Audela AI · privacy@audela.me',
    ],
  },
];

export const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <motion.p
            className="legal-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            Legal
          </motion.p>
          <motion.h1
            className="legal-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className="legal-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Effective date: 1 January 2026
          </motion.p>
        </div>
      </section>

      <section className="legal-body">
        <div className="container legal-container">
          <div className="legal-intro">
            <p>
              Audela AI ("Audela", "we", "us", or "our") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website at <strong>audela.me</strong> or interact with
              our services. Please read this policy carefully.
            </p>
          </div>

          {sections.map((s, i) => (
            <div key={i} className="legal-section">
              <h2 className="legal-section-title">{s.title}</h2>
              {s.body.map((para, j) => (
                <p key={j} className="legal-section-body">{para}</p>
              ))}
            </div>
          ))}

          <div className="legal-footer-nav">
            <Link to="/terms" className="legal-nav-link">Terms of Use →</Link>
            <Link to="/contact" className="legal-nav-link">Contact Us →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
