import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { ContactForm } from '../sections/ContactForm';
import '../sections/ProductPage.css';
import './Reven.css';

const ease = [0.22, 1, 0.36, 1];

const HeroGeo = () => (
  <svg className="pp-hero-geo" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="reven-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <polygon points="40,4 76,22 76,58 40,76 4,58 4,22" fill="none" stroke="currentColor" strokeWidth="0.6"/>
        <polygon points="40,16 64,28 64,52 40,64 16,52 16,28" fill="none" stroke="currentColor" strokeWidth="0.4"/>
        <circle cx="40" cy="40" r="5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#reven-geo)"/>
  </svg>
);

const kpis = [
  { num: '45%', label: 'Denial Rate Reduction',    desc: 'AI pre-validates claims before submission, eliminating the most common denial triggers.' },
  { num: '87%', label: 'Fraud Detection Accuracy', desc: 'ML models identify anomalous billing patterns that manual audits consistently miss.' },
  { num: '3×',  label: 'Faster Cash Collection',   desc: 'Automated follow-up workflows accelerate the revenue cycle from submission to payment.' },
];

const steps = [
  { num: '01', title: 'Claim Pre-Validation',       desc: 'Every claim is automatically screened against payer rules, coding standards, and patient eligibility before submission — eliminating preventable denials upstream.' },
  { num: '02', title: 'Fraud & Abuse Detection',    desc: 'ML models analyse billing patterns, procedure combinations, and provider behaviour in real time — flagging suspicious claims for review before payment is processed.' },
  { num: '03', title: 'Denial Management',          desc: 'Denied claims are automatically categorised, root-cause analysed, and routed for correction and resubmission — with AI prioritising the highest-value recoveries first.' },
  { num: '04', title: 'Reconciliation & Reporting', desc: 'Automated payment posting, adjustment reconciliation, and real-time financial dashboards give finance and clinical leadership full visibility over revenue performance.' },
];

const capabilities = [
  { title: 'AI Claim Scrubbing',                desc: 'Pre-submission validation engine checks every claim against payer-specific rules, NCCI edits, and coding guidelines — reducing technical denials by up to 60% before any claim leaves the system.' },
  { title: 'Fraud, Waste & Abuse Engine',       desc: 'Trained on millions of claims, the FWA model identifies upcoding, unbundling, duplicate billing, and unusual provider patterns with far higher sensitivity than rule-based systems alone.' },
  { title: 'Denial Prediction & Prevention',   desc: 'Predictive models score each claim for denial risk before submission, flagging high-risk claims for human review and auto-correcting lower-complexity issues without manual intervention.' },
  { title: 'Intelligent Follow-Up Automation', desc: 'Automated follow-up workflows track outstanding claims, trigger payer contact at optimal intervals, and escalate unresolved cases — eliminating manual AR work queues entirely.' },
  { title: 'Patient Eligibility Intelligence', desc: 'Real-time eligibility verification integrated with payer systems ensures coverage is confirmed before services are rendered — eliminating eligibility-related write-offs downstream.' },
  { title: 'Executive Revenue Dashboard',      desc: 'Real-time visibility into denial rates by payer and code, days in AR, collection rates, and write-off trends — giving leadership the intelligence to act before revenue is lost.' },
];

const outcomes = [
  { num: '45%',  label: 'Denial Rate Reduction',     desc: 'Pre-submission validation eliminates preventable denials before they reach the payer.' },
  { num: '30%',  label: 'Faster Days in AR',         desc: 'Automated follow-up and prioritisation accelerates cash collection across all payer types.' },
  { num: '2×',   label: 'FWA Detection vs Manual',   desc: 'ML models surface fraud and abuse patterns that rule-based approaches miss entirely.' },
  { num: '95%',  label: 'Clean Claim Rate',          desc: 'Target benchmark achieved by clients within the first 6 months of full deployment.' },
  { num: '60%',  label: 'Reduction in Rework Cost',  desc: 'Fewer denied and rejected claims means dramatically less staff time spent on correction and resubmission.' },
  { num: '100%', label: 'Audit Trail Coverage',      desc: 'Every claim, decision, and adjustment is logged — supporting compliance, appeals, and payer audits.' },
];

const useCases = [
  { title: 'Multi-Facility RCM Automation',     desc: 'Manages the full revenue cycle across multiple hospital sites — standardising processes, consolidating denial management, and providing system-level financial visibility.' },
  { title: 'Practice Revenue Optimisation',    desc: 'Reduces administrative burden on clinical staff by automating coding validation, prior authorisation tracking, and patient balance follow-up.' },
  { title: 'Episode-Based Billing Management', desc: 'Manages complex episode billing, OASIS timing compliance, and RAP submission — ensuring full reimbursement for every episode of care delivered.' },
  { title: 'National Claims Analytics',         desc: 'Deployed in national health data warehouse environments to monitor claims quality, detect system-wide FWA patterns, and drive policy-level revenue integrity.' },
  { title: 'Payment Integrity Intelligence',    desc: 'Helps payers identify overpayment patterns, flag high-risk providers, and improve pre-payment review accuracy — reducing fraud exposure across large claim volumes.' },
  { title: 'Specialty-Specific Coding Support', desc: 'AI coding assistance and validation tailored to high-complexity specialities — oncology, cardiology, orthopaedics — where coding errors most frequently drive denials.' },
];

const related = [
  { name: 'Clara™', path: '/clara', logoFile: 'Clara-logo.svg', active: true, desc: 'Reven handles claims and reimbursement. Clara orchestrates the broader finance operating layer — together creating end-to-end financial control.' },
  { name: 'Shift™', path: '/shift', logoFile: 'Shift-logo.svg', active: true, desc: 'Optimise the staffing that drives your revenue. Shift ensures clinical and administrative teams are correctly resourced to maximise throughput and billings.' },
  { name: 'Lens™',  path: '/lens',  logoFile: 'Lens-logo.svg',  active: true, desc: 'Improve documentation quality at the point of care — ensuring the clinical activity that drives reimbursement is captured accurately every time.' },
];

export const Reven = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="pp-breadcrumb" aria-label="Breadcrumb">
        <div className="container pp-breadcrumb-inner">
          <Link to="/">Audela</Link>
          <span className="pp-breadcrumb-sep">/</span>
          <Link to="/#products">Solutions</Link>
          <span className="pp-breadcrumb-sep">/</span>
          <span className="pp-breadcrumb-current">Reven™</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pp-hero reven-hero">
        <HeroGeo />
        <div className="container pp-hero-inner">
          <div className="pp-hero-left">
            <motion.span className="pp-category" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
              Healthcare · Finance
            </motion.span>

            <motion.div className="pp-logo" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              <img src="/Brand-Assets/Product-Logos/Reven-logo.svg" alt="Reven" />
            </motion.div>

            <motion.p className="pp-hero-desc" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }}>
              End-to-end AI automation of the revenue cycle — from claim submission through denial management, fraud detection, and reconciliation — eliminating revenue leakage at every step of the process.
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
              <p className="pp-section-sub">How Reven transforms your revenue cycle — step by step.</p>
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
      <section className="pp-section pp-section-alt">
        <div className="container">
          <AnimatedSection yOffset={24}>
            <div className="pp-section-header">
              <span className="pp-tag">Core Capabilities</span>
              <h2 className="pp-section-title">Everything Reven<br /><em>Is Built to Do.</em></h2>
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
              <h2 className="pp-section-title">Reven Across<br /><em>Industries.</em></h2>
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
            <h2 className="pp-cta-title">See Reven™<br /><em>in Action.</em></h2>
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
