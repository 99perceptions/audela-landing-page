import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SEO } from '../components/ui/SEO';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { ContactForm } from '../sections/ContactForm';
import '../sections/ProductPage.css';
import './Lens.css';

const ease = [0.22, 1, 0.36, 1];

const HeroGeo = () => (
  <svg className="pp-hero-geo" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="lens-geo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <circle cx="30" cy="30" r="22" fill="none" stroke="currentColor" strokeWidth="0.6"/>
        <circle cx="30" cy="30" r="12" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="30" cy="30" r="4"  fill="none" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="30" y1="8"  x2="30" y2="0"  stroke="currentColor" strokeWidth="0.3"/>
        <line x1="30" y1="52" x2="30" y2="60" stroke="currentColor" strokeWidth="0.3"/>
        <line x1="8"  y1="30" x2="0"  y2="30" stroke="currentColor" strokeWidth="0.3"/>
        <line x1="52" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="0.3"/>
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#lens-geo)"/>
  </svg>
);

const kpis = [
  { num: 'Day 1', label: 'Quality Measurement',        desc: 'New staff are scored against standards from their very first day — no more quality blind spot during onboarding.' },
  { num: '35%',  label: 'Quality Score Improvement',  desc: 'Average improvement in field service quality scores within 90 days of Lens deployment.' },
  { num: '60%',  label: 'Training Cost Reduction',    desc: 'Evidence-based, personalised coaching replaces expensive blanket training programmes.' },
];

const steps = [
  { num: '01', title: 'Smart Glasses Recording',  desc: 'Field staff wear lightweight smart glasses that record first-person footage of every job — from installation to customer interaction — without interrupting the workflow.' },
  { num: '02', title: 'AI Activity Recognition',  desc: 'Computer vision models analyse the recorded footage in real time — identifying specific tasks, checking sequence compliance, and detecting deviations from procedure.' },
  { num: '03', title: 'Standards Scoring',        desc: 'Every job is scored against your defined standards of service — generating an objective, consistent quality rating that does not vary with the supervisor assessing it.' },
  { num: '04', title: 'Coaching & Development',   desc: 'Scores, flagged moments, and recommended coaching actions are delivered to managers and staff — enabling targeted, evidence-based development conversations backed by footage.' },
];

const capabilities = [
  { title: 'First-Person Activity Capture',   desc: 'Smart glasses provide a true first-person view of every job — capturing exactly what the technician or care worker does, in the sequence they do it, without observer effect distortion.' },
  { title: 'Configurable Standards Engine',   desc: 'Your standards of service are encoded into the AI scoring model — whether a technical installation checklist, a care delivery protocol, or a customer service framework — and scored consistently every time.' },
  { title: 'Real-Time Compliance Alerts',     desc: 'Where critical steps are missed or procedures deviated from during a live job, Lens generates an immediate alert — enabling intervention before the job is completed incorrectly.' },
  { title: 'New Hire Quality Baseline',       desc: 'From day one, new staff are scored against the same standards as experienced colleagues — providing objective onboarding data and identifying training needs before poor habits form.' },
  { title: 'Workforce Quality Analytics',     desc: 'Aggregate quality scores, trend analysis, and benchmark comparisons across teams, regions, and time periods — giving management the data to drive consistent quality improvement at scale.' },
  { title: 'Training Content Generation',     desc: 'High-scoring job recordings become training material. Low-scoring recordings become coaching case studies. Lens continuously builds a library of real-world best practice examples.' },
];

const outcomes = [
  { num: '35%',  label: 'Quality Score Uplift',              desc: 'Average improvement in field service quality scores within 90 days of deployment across all sectors.' },
  { num: '60%',  label: 'Training Cost Reduction',           desc: 'Evidence-based coaching replaces blanket training — reducing cost while improving effectiveness.' },
  { num: 'Day 1', label: 'Measurable Quality',              desc: 'Quality scoring begins on the first day — eliminating the traditional onboarding quality blind spot.' },
  { num: '100%', label: 'Job Coverage',                     desc: 'Every job is scored — not a sample. Consistent, objective measurement with no supervisor variability.' },
  { num: '40%',  label: 'Complaint Reduction',              desc: 'Consistent standards enforcement reduces customer complaints and service re-dos across field teams.' },
  { num: '3×',   label: 'Faster Performance Improvement',   desc: 'Immediate, specific, evidence-based feedback accelerates development versus periodic reviews alone.' },
];

const useCases = [
  { title: 'Home Care Quality Assurance',          desc: 'Ensures home care workers follow clinical protocols precisely — medication administration, wound care, mobility assistance — with AI scoring that supervisors cannot physically observe.' },
  { title: 'Technical Installation Verification',  desc: 'Validates that field engineers follow installation procedures, safety protocols, and quality standards exactly — providing an objective record for warranty and compliance purposes.' },
  { title: 'Cleaning & Maintenance Standards',     desc: 'Scores cleaning and facilities teams against defined service standards across multiple properties — ensuring consistent quality without deploying supervisors to every site.' },
  { title: 'Customer Interaction Quality',         desc: 'Captures and scores retail staff customer interactions against service standards — identifying training needs and recognising high performers with objective, not subjective, data.' },
  { title: 'Security Guard Compliance',            desc: 'Monitors patrol routes, access protocols, and incident response procedures — providing evidence of compliance for SLA reporting and regulatory audit.' },
  { title: 'Site Safety Compliance',               desc: 'Detects PPE violations, unsafe working practices, and procedure deviations in real time — improving site safety and providing documented evidence for compliance and insurance.' },
];

const related = [
  { name: 'Shift™', path: '/shift', logoFile: 'Shift-logo.svg', active: true, desc: 'Shift deploys the right person to the right job. Lens verifies they perform it to standard. Together they close the loop on workforce quality from scheduling to execution.' },
  { name: 'Clara™', path: '/clara', logoFile: 'Clara-logo.svg', active: true, desc: 'Lens captures field performance data. Clara ensures the financial operations behind field deployments — costs, billing, and reconciliation — run without friction.' },
  { name: 'Reven™', path: '/reven', logoFile: 'Reven-logo.svg', active: true, desc: 'Lens improves documentation quality at the point of care. Reven ensures that clinical activity translates into accurate, timely claims and full reimbursement.' },
];

export const Lens = () => {
  const capsRef = useRef(null);
  const { scrollYProgress: capsScroll } = useScroll({
    target: capsRef,
    offset: ['start end', 'end start'],
  });
  const capsBgY = useTransform(capsScroll, [0, 1], ['0%', '25%']);

  return (
    <>
      <SEO
        title="Lens™ — Field Workforce Quality AI"
        description="Lens uses smart glasses to capture field workforce activity in real time. AI scores performance against service standards, delivering instant quality intelligence."
        path="/lens"
      />
      {/* Breadcrumb */}
      <nav className="pp-breadcrumb" aria-label="Breadcrumb">
        <div className="container pp-breadcrumb-inner">
          <Link to="/">Audela</Link>
          <span className="pp-breadcrumb-sep">/</span>
          <Link to="/#products">Solutions</Link>
          <span className="pp-breadcrumb-sep">/</span>
          <span className="pp-breadcrumb-current">Lens™</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pp-hero lens-hero">
        <HeroGeo />
        <div className="container pp-hero-inner">
          <div className="pp-hero-left">
            <motion.span className="pp-category" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
              Workforce · Quality
            </motion.span>

            <motion.div className="pp-logo" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              <img src="/Brand-Assets/Product-Logos/Lens-logo.svg" alt="Lens" />
            </motion.div>

            <motion.p className="pp-hero-desc" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }}>
              Smart glasses capture every field workforce activity. AI scores performance against your service standards in real time — delivering consistent quality improvement, objective training, and evidence-based deployment from day one.
            </motion.p>

            <motion.div className="pp-hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease }}>
              <Link to="/contact" className="pp-btn-primary">Request a Demo</Link>
              <a href="#how-it-works" className="pp-btn-ghost">See How It Works ↓</a>
            </motion.div>
          </div>

          <motion.div className="pp-kpi-col" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.18, ease }}>
            {kpis.map(k => (
              <div key={k.label} className="pp-kpi">
                <div className="pp-kpi-num">{k.num}</div>
                <div className="pp-kpi-label">{k.label}</div>
                <div className="pp-kpi-desc">{k.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="pp-section pp-section-white">
        <div className="container">
          <AnimatedSection yOffset={24}>
            <div className="pp-section-header">
              <span className="pp-tag">How It Works</span>
              <h2 className="pp-section-title">From Challenge<br /><em>to Outcome.</em></h2>
              <p className="pp-section-sub">How Lens transforms your field quality operations — step by step.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection yOffset={32} delay={0.1}>
            <div className="pp-steps">
              {steps.map(s => (
                <div key={s.num} className="pp-step">
                  <span className="pp-step-num">{s.num}</span>
                  <h3 className="pp-step-title">{s.title}</h3>
                  <p className="pp-step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="pp-section lens-caps-section" ref={capsRef}>
        <motion.div className="lens-caps-parallax-bg" style={{ y: capsBgY }} aria-hidden="true" />
        <div className="lens-caps-overlay" aria-hidden="true" />
        <div className="container lens-caps-content">
          <AnimatedSection yOffset={24}>
            <div className="pp-section-header">
              <span className="pp-tag">Core Capabilities</span>
              <h2 className="pp-section-title">Everything Lens<br /><em>Is Built to Do.</em></h2>
            </div>
          </AnimatedSection>
          <AnimatedSection yOffset={32} delay={0.08}>
            <div className="pp-caps-grid">
              {capabilities.map(c => (
                <div key={c.title} className="pp-cap-card">
                  <h3 className="pp-cap-title">{c.title}</h3>
                  <p className="pp-cap-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Outcomes */}
      <section className="pp-section pp-section-white">
        <div className="container">
          <AnimatedSection yOffset={24}>
            <div className="pp-section-header">
              <span className="pp-tag">Measured Outcomes</span>
              <h2 className="pp-section-title">Results<br /><em>That Matter.</em></h2>
            </div>
          </AnimatedSection>
          <AnimatedSection yOffset={28} delay={0.08}>
            <div className="pp-outcomes-grid">
              {outcomes.map(o => (
                <div key={o.label} className="pp-outcome">
                  <div className="pp-outcome-num">{o.num}</div>
                  <div className="pp-outcome-label">{o.label}</div>
                  <p className="pp-outcome-desc">{o.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Use Cases */}
      <section className="pp-section pp-section-alt">
        <div className="container">
          <AnimatedSection yOffset={24}>
            <div className="pp-section-header">
              <span className="pp-tag">Use Cases</span>
              <h2 className="pp-section-title">Lens Across<br /><em>Industries.</em></h2>
            </div>
          </AnimatedSection>
          <AnimatedSection yOffset={28} delay={0.08}>
            <div className="pp-uc-grid">
              {useCases.map(u => (
                <div key={u.title} className="pp-uc-card">
                  <h3 className="pp-uc-title">{u.title}</h3>
                  <p className="pp-uc-desc">{u.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="pp-section pp-section-dark">
        <div className="container">
          <AnimatedSection yOffset={24}>
            <div className="pp-section-header">
              <span className="pp-tag">Related Solutions</span>
              <h2 className="pp-section-title">Often Used<br /><em>Together.</em></h2>
            </div>
          </AnimatedSection>
          <AnimatedSection yOffset={28} delay={0.08}>
            <div className="pp-related-grid">
              {related.map(r => (
                <Link key={r.name} to={r.path} className={`pp-related-card ${r.active ? 'active' : ''}`}>
                  <div className="pp-related-logo">
                    <img src={`/Brand-Assets/Product-Logos/${r.logoFile}`} alt={r.name} />
                  </div>
                  <p className="pp-related-desc">{r.desc}</p>
                  <span className="pp-related-link">Learn more →</span>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="pp-cta">
        <div className="container">
          <AnimatedSection yOffset={24}>
            <h2 className="pp-cta-title">See Lens™<br /><em>in Action.</em></h2>
            <p className="pp-cta-desc">
              Get a personalised demo configured for your industry and operational context —
              with a live expert from the Audela team.
            </p>
            <div className="pp-cta-actions">
              <Link to="/contact" className="pp-btn-primary">Request Demo</Link>
              <Link to="/contact" className="pp-btn-ghost">Talk to Sales</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactForm />
    </>
  );
};
