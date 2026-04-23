import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/ui/SEO';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { ContactForm } from '../sections/ContactForm';
import './Team.css';

const ease = [0.22, 1, 0.36, 1];

const HeroGeo = () => (
  <svg className="team-hero-geo" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="team-geo" x="0" y="0" width="90" height="90" patternUnits="userSpaceOnUse">
        <polygon points="45,5 85,25 85,65 45,85 5,65 5,25" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <polygon points="45,20 70,33 70,57 45,70 20,57 20,33" fill="none" stroke="currentColor" strokeWidth="0.35"/>
        <line x1="45" y1="5"  x2="45" y2="85" stroke="currentColor" strokeWidth="0.2"/>
        <line x1="5"  y1="45" x2="85" y2="45" stroke="currentColor" strokeWidth="0.2"/>
      </pattern>
    </defs>
    <rect width="500" height="300" fill="url(#team-geo)"/>
  </svg>
);

const leadership = [
  {
    name: 'Dr. Akin Kazasckci',
    role: 'AI Strategy Lead',
    credentials: ['MINES ParisTech', 'Caltech', 'Paris-Saclay'],
    bio: 'Leads Audela\'s AI strategy and research direction. Bridges academic rigour with applied systems thinking across complex industrial and operational domains.',
    dark: true,
  },
  {
    name: 'Dr. Tony Velte',
    role: 'Senior AI Consultant',
    credentials: ['Harvard', 'London Business School', 'Oxford', 'Kellogg'],
    bio: 'Brings a rare combination of executive leadership and deep AI expertise. Has advised organisations across multiple continents on intelligent systems deployment at scale.',
    dark: true,
  },
  {
    name: 'Dr. Aamir Ali',
    role: 'Health & Analytics Lead',
    credentials: ['MoH UAE', 'KSA NHO', 'NHS UK', '9 Industry Awards'],
    bio: 'Deep expertise at the intersection of healthcare operations, data analytics, and AI-driven quality improvement. Has shaped national-level health system transformation.',
    dark: true,
  },
];

const advisors = [
  {
    name: 'Athar Osama',
    role: 'EdTech & Policy Advisor',
    credentials: ['RAND Corporation', 'Pakistan Planning Commission'],
    bio: 'Policy strategist and innovation leader with experience shaping national AI and education agendas at the highest levels of government and global research institutions.',
    dark: false,
  },
  {
    name: 'Mohammad Azam',
    role: 'Board Advisor',
    credentials: ['UPS — SVP', 'KPMG', 'Ford', 'Mellon Bank'],
    bio: 'Decades of senior executive experience across logistics, finance, and professional services. Brings operational gravity and institutional credibility to Audela\'s growth.',
    dark: false,
  },
  {
    name: 'Amna Naeem ACA',
    role: 'Finance Lead',
    credentials: ['EY', 'BP', 'ArcelorMittal', 'Maersk'],
    bio: 'Qualified accountant with a career built across global blue-chip organisations. Leads Audela\'s financial strategy and brings practitioner-level insight to every finance product we build.',
    dark: false,
  },
];

const MemberCard = ({ member, index }) => (
  <AnimatedSection yOffset={28} delay={index * 0.07}>
    <div className={`team-card ${member.dark ? 'team-card-dark' : 'team-card-light'}`}>
      <div className="team-card-top">
        <span className="team-card-role">{member.role}</span>
        <h3 className="team-card-name">{member.name}</h3>
      </div>
      <div className="team-card-credentials">
        {member.credentials.map(c => (
          <span key={c} className="team-credential">{c}</span>
        ))}
      </div>
      <p className="team-card-bio">{member.bio}</p>
    </div>
  </AnimatedSection>
);

export const Team = () => {
  return (
    <>
      <SEO
        title="Our Team — The Minds Behind Audela"
        description="Meet the strategists, scientists and operators building Audela's specialized AI solutions — a team with experience spanning Harvard, Oxford, RAND, NHS, UPS and more."
        path="/team"
      />
      {/* Hero */}
      <section className="team-hero">
        <HeroGeo />
        <div className="container team-hero-inner">
          <motion.span
            className="team-hero-tag"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            The People Behind It
          </motion.span>

          <motion.h1
            className="team-hero-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease }}
          >
            Built by People<br />
            <em>Who've Done It.</em>
          </motion.h1>

          <motion.p
            className="team-hero-desc"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
          >
            Audela is built by researchers, operators, and advisors who have led AI initiatives,
            run national health systems, and worked at the highest levels of global enterprise.
            This is not a team assembled for a pitch deck.
          </motion.p>
        </div>
      </section>

      {/* Leadership */}
      <section className="team-section">
        <div className="container">
          <AnimatedSection yOffset={20}>
            <div className="team-section-label">
              <span className="team-group-tag">Leadership</span>
            </div>
          </AnimatedSection>
          <div className="team-grid">
            {leadership.map((m, i) => (
              <MemberCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="team-section team-section-alt">
        <div className="container">
          <AnimatedSection yOffset={20}>
            <div className="team-section-label">
              <span className="team-group-tag">Advisory & Operations</span>
            </div>
          </AnimatedSection>
          <div className="team-grid">
            {advisors.map((m, i) => (
              <MemberCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="team-cta">
        <div className="container">
          <AnimatedSection yOffset={24}>
            <div className="team-cta-inner">
              <div className="team-cta-text">
                <h2 className="team-cta-title">Work with<br /><em>This Team.</em></h2>
                <p className="team-cta-desc">
                  Get a live demo from the people who built these systems — configured for your
                  industry, your challenges, and your operating context.
                </p>
              </div>
              <div className="team-cta-actions">
                <Link to="/contact" className="team-btn-primary">Request a Demo</Link>
                <Link to="/contact" className="team-btn-ghost">Talk to Sales</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactForm />
    </>
  );
};
