import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/ui/SEO';
import './Legal.css';

const easeOut = [0.22, 1, 0.36, 1];

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: [
      'By accessing or using the Audela website at audela.me (the "Site"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.',
      'These Terms of Use apply to all visitors, users, and others who access or use the Site. We reserve the right to update these terms at any time, and your continued use of the Site following any changes constitutes acceptance of those changes.',
    ],
  },
  {
    title: '2. Use of the Site',
    body: [
      'You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site in any way that violates applicable laws or regulations, to transmit any unsolicited or unauthorised advertising or promotional material, or to engage in any conduct that restricts or inhibits anyone\'s use or enjoyment of the Site.',
      'We reserve the right to withdraw or amend the Site, and any service or material we provide on the Site, in our sole discretion without notice.',
    ],
  },
  {
    title: '3. Intellectual Property',
    body: [
      'The Site and its entire contents, features, and functionality — including but not limited to all text, graphics, logos, product names, and software — are owned by Audela AI and are protected by applicable intellectual property laws.',
      'You are granted a limited, non-exclusive, non-transferable licence to access and use the Site for your personal, non-commercial purposes. You must not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any part of the Site without our prior written consent.',
    ],
  },
  {
    title: '4. Product Information',
    body: [
      'The products and solutions described on this Site — including Clara™, Reven™, Lens™, Shift™, and others — are proprietary AI solutions developed by Audela AI. Descriptions are for informational purposes only and do not constitute a binding offer or guarantee of availability.',
      'Product capabilities, availability, and pricing are subject to change. Contact us directly for current information relevant to your specific needs.',
    ],
  },
  {
    title: '5. Disclaimer of Warranties',
    body: [
      'The Site is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.',
      'To the fullest extent permitted by law, Audela AI disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
    ],
  },
  {
    title: '6. Limitation of Liability',
    body: [
      'To the fullest extent permitted by applicable law, Audela AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site or any content thereon.',
      'In no event shall our total liability to you for all claims arising from your use of the Site exceed the amount you paid us, if any, in the twelve months preceding the claim.',
    ],
  },
  {
    title: '7. Third-Party Links',
    body: [
      'The Site may contain links to third-party websites or services that are not owned or controlled by Audela AI. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.',
      'We strongly advise you to read the terms and privacy policy of any third-party site you visit.',
    ],
  },
  {
    title: '8. Governing Law',
    body: [
      'These Terms of Use shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the competent courts.',
    ],
  },
  {
    title: '9. Contact Us',
    body: [
      'If you have any questions about these Terms of Use, please contact us at:',
      'Audela AI · legal@audela.me',
    ],
  },
];

export const Terms = () => {
  return (
    <div className="legal-page">
      <SEO
        title="Terms of Use"
        description="Read the terms and conditions governing your use of the Audela website and services."
        path="/terms"
      />
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
            Terms of Use
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
              These Terms of Use govern your access to and use of the Audela AI website and any
              related content or services. By using the Site, you confirm that you have read,
              understood, and agree to be bound by these terms.
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
            <Link to="/privacy" className="legal-nav-link">Privacy Policy →</Link>
            <Link to="/contact" className="legal-nav-link">Contact Us →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
