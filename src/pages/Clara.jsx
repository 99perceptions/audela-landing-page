import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { ContactForm } from '../sections/ContactForm';
import '../sections/ProductPage.css';
import './Clara.css';

const ease = [0.22, 1, 0.36, 1];

const HeroGeo = () => (
  <svg className="pp-hero-geo" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="clara-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <polygon points="20,0 60,0 80,20 80,60 60,80 20,80 0,60 0,20" fill="none" stroke="currentColor" strokeWidth="0.6"/>
        <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <line x1="40" y1="32" x2="40" y2="20" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="40" y1="48" x2="40" y2="60" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="32" y1="40" x2="20" y2="40" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="48" y1="40" x2="60" y2="40" stroke="currentColor" strokeWidth="0.4"/>
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#clara-geo)"/>
  </svg>
);

const kpis = [
  { num: '80%',  label: 'Faster Close Cycles',          desc: 'Continuous close workflows reduce month-end compression and remove repetitive manual coordination.' },
  { num: '90%+', label: 'Auto-Matched Reconciliation',  desc: 'Transactions, invoices, receipts, and ledger entries matched automatically in real time across systems.' },
  { num: '24/7', label: 'Anomaly Monitoring',           desc: 'Always-on detection surfaces exceptions, policy breaches, and unusual financial patterns before they escalate.' },
];

const steps = [
  { num: '01', title: 'Workflow Learning',                   desc: 'Clara connects to your ERP, banking feeds, and accounting stack to learn how your finance team currently works — including approvals, exceptions, vendor patterns, and close dependencies.' },
  { num: '02', title: 'AP & AR Orchestration',              desc: 'Invoices, receipts, payables, collections, and payment workflows are routed intelligently based on your rules, priorities, and cash timing — reducing human follow-up across both sides of the ledger.' },
  { num: '03', title: 'Real-Time Reconciliation',           desc: 'Clara continuously matches bank activity, invoices, payments, journal entries, and sub-ledgers as they happen — maintaining near-live financial accuracy instead of waiting for month-end fire drills.' },
  { num: '04', title: 'Continuous Close & Exception Control', desc: 'Close tasks, anomalies, policy breaches, and missing dependencies are monitored continuously. Clara flags exceptions early, drives resolution workflows, and keeps finance moving toward a continuous-close model.' },
];

const capabilities = [
  { title: 'Adaptive Workflow Intelligence',             desc: 'Clara learns your real operational sequences, approval logic, exception paths, and system dependencies — then automates within the reality of how your business actually runs.' },
  { title: 'Intelligent AP Orchestration',               desc: 'Automates invoice intake, coding suggestions, approvals, payment scheduling, duplicate detection, and vendor exception handling — ensuring AP moves faster without compromising control.' },
  { title: 'Autonomous AR Coordination',                 desc: 'Tracks receivables risk, prioritises collections actions, triggers reminders at the right intervals, and identifies customers likely to slip beyond terms — improving cash conversion without adding manual effort.' },
  { title: 'Real-Time Multi-System Reconciliation',      desc: 'Matches activity across banks, ledgers, invoices, payment gateways, and billing platforms in real time — surfacing true exceptions instead of making teams hunt for them.' },
  { title: 'Continuous Close Management',                desc: 'Turns month-end from a compressed event into a managed, ongoing process — coordinating accrual readiness, dependency tracking, and checklist completion before close pressure peaks.' },
  { title: 'Anomaly & Control Monitoring',               desc: 'Detects unusual payment behaviour, reconciliation mismatches, approval anomalies, and out-of-pattern transactions — strengthening governance while reducing reliance on periodic manual review.' },
];

const outcomes = [
  { num: '80%',  label: 'Faster Close Preparation',    desc: 'Continuous task resolution and exception handling reduce month-end bottlenecks dramatically.' },
  { num: '90%+', label: 'Automated Match Rate',        desc: 'Most routine reconciliation work is handled automatically, leaving teams to focus only on true exceptions.' },
  { num: '50%',  label: 'Less Manual Follow-Up',       desc: 'AP chases, AR reminders, and cross-team status checks are automated into structured workflows.' },
  { num: '3×',   label: 'Faster Exception Resolution', desc: 'Problems are surfaced earlier with context, ownership, and next-step recommendations already attached.' },
  { num: '24/7', label: 'Operational Visibility',      desc: 'Finance leaders gain a live view of cash, exceptions, close readiness, and control health across the function.' },
  { num: '100%', label: 'Audit Trail Coverage',        desc: 'Every action, approval, escalation, and reconciliation decision is logged for control, compliance, and review.' },
];

const useCases = [
  { title: 'Multi-Entity Finance',          desc: 'Coordinates reconciliations, intercompany visibility, approval logic, and close workflows across multiple legal entities without forcing teams into disconnected manual workarounds.' },
  { title: 'SaaS & Subscription Businesses', desc: 'Connects billing platforms, payment gateways, ERP systems, and bank feeds to manage recurring revenue, collections timing, and reconciliation complexity at scale.' },
  { title: 'Healthcare Providers',           desc: 'Supports finance operations where payments, claims, remittances, write-offs, and operational systems create high-volume reconciliation and exception-management pressure.' },
  { title: 'Retail & Multi-Site Operations', desc: 'Automates financial coordination across branches, outlets, and locations where fragmented cash activity, payables, and daily reconciliation create persistent operational drag.' },
  { title: 'Logistics & Asset-Heavy Businesses', desc: 'Brings structure to high-volume vendor payments, fuel and maintenance spend, route-linked revenue, and operational exceptions across distributed environments.' },
  { title: 'Mid-Market Finance Teams',       desc: 'Gives lean finance teams enterprise-grade operational leverage — automating repetitive execution while freeing senior staff to focus on decisions and planning.' },
];

const related = [
  { name: 'Reven™', path: '/reven', logoFile: 'Reven-logo.svg', active: true,  desc: 'Clara orchestrates the finance operating layer. Reven strengthens claims, billing, and reimbursement workflows — together creating a more complete financial control environment.' },
  { name: 'Shift™', path: '/shift', logoFile: 'Shift-logo.svg', active: true,  desc: 'Shift manages workforce operations. Clara handles the downstream financial workflows tied to payroll timing, vendor payments, and operational reconciliations.' },
  { name: 'Lens™',  path: '/lens',  logoFile: 'Lens-logo.svg',  active: true,  desc: 'Lens captures field performance data. Clara ensures the financial operations behind field deployments — costs, billing, and reconciliation — run without friction.' },
];

export const Clara = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="pp-breadcrumb" aria-label="Breadcrumb">
        <div className="container pp-breadcrumb-inner">
          <Link to="/">Audela</Link>
          <span className="pp-breadcrumb-sep">/</span>
          <Link to="/#products">Solutions</Link>
          <span className="pp-breadcrumb-sep">/</span>
          <span className="pp-breadcrumb-current">Clara™</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pp-hero clara-hero">
        <HeroGeo />
        <div className="container pp-hero-inner">
          <div className="pp-hero-left">
            <motion.span className="pp-category" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
              Finance · Operations
            </motion.span>

            <motion.div className="pp-logo" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              <img src="/Brand-Assets/Product-Logos/Clara-logo.svg" alt="Clara" />
            </motion.div>

            <motion.p className="pp-hero-desc" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }}>
              Clara learns your finance workflows, systems, and controls to execute the full spectrum of day-to-day financial operations — from intelligent accounts payable and receivable orchestration to real-time reconciliation, continuous close management, and anomaly detection. It gives finance teams their time back by turning manual, fragmented work into an always-on operating system.
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
              <p className="pp-section-sub">How Clara transforms your finance operations — step by step.</p>
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
              <h2 className="pp-section-title">Everything Clara<br /><em>Is Built to Do.</em></h2>
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
              <h2 className="pp-section-title">Clara Across<br /><em>Industries.</em></h2>
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
            <h2 className="pp-cta-title">See Clara™<br /><em>in Action.</em></h2>
            <p className="pp-cta-desc">
              Get a personalised demo configured for your finance operating model, systems environment,
              and workflow complexity — with a live expert from the Audela team.
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
