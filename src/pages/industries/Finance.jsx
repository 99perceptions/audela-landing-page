import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../../components/ui/SEO';
import { AnimatedSection } from '../../components/ui/AnimatedSection';
import { CountUp } from '../../components/ui/CountUp';
import { ContactForm } from '../../sections/ContactForm';
import '../../sections/ProductPage.css';
import './IndustryPage.css';
import './Finance.css';

const ease = [0.22, 1, 0.36, 1];

const HeroGeo = () => (
  <svg className="pp-hero-geo" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="finance-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <polyline points="20,20 60,20 80,40 80,60 60,80 20,80 0,60 0,40" fill="none" stroke="currentColor" strokeWidth="0.6"/>
        <circle cx="40" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <line x1="40" y1="40" x2="40" y2="25" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="40" y1="65" x2="40" y2="75" stroke="currentColor" strokeWidth="0.4"/>
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#finance-geo)"/>
  </svg>
);

const kpis = [
  { num: '80%', label: 'Faster Close Cycles', desc: 'Continuous close workflows reduce month-end compression and eliminate manual coordination.' },
  { num: '90%+', label: 'Auto-Matched Reconciliation', desc: 'Transactions matched automatically in real time across systems and ledgers.' },
  { num: '24/7', label: 'Anomaly Monitoring', desc: 'Always-on detection surfaces exceptions and policy breaches before they escalate.' },
];

const challenges = [
  { num: '01', title: 'The Manual Close Burden', desc: 'Finance teams spend weeks on month-end close — coordinating data pulls, reconciliations, accruals, and approvals across systems that do not talk to each other.' },
  { num: '02', title: 'Reconciliation at Scale', desc: 'Multi-system, multi-entity reconciliation remains manual — error-prone, time-consuming, and impossible to audit in real time.' },
  { num: '03', title: 'AP & AR Fragmentation', desc: 'Payables and receivables are siloed across systems, creating cash flow blind spots and forcing finance to chase status across teams.' },
  { num: '04', title: 'Governance Without Real-Time Visibility', desc: 'Compliance audits demand transaction-level evidence — but you cannot quickly surface patterns or exceptions until close time arrives.' },
];

const capabilities = [
  { title: 'Intelligent AP Orchestration', desc: 'Automates invoice processing, three-way matching, approval routing, and payment scheduling — freeing finance teams from repetitive execution.' },
  { title: 'Autonomous AR Coordination', desc: 'Tracks receivables risk, prioritises collections, applies cash intelligently, and identifies customers likely to slip beyond terms — improving cash conversion.' },
  { title: 'Real-Time Multi-System Reconciliation', desc: 'Matches GL accounts, bank balances, subledgers, and intercompany transactions automatically — surfacing true exceptions instead of noise.' },
  { title: 'Continuous Close Management', desc: 'Turns month-end from a compressed event into an ongoing process — coordinating accrual readiness and checklist completion.' },
  { title: 'Anomaly & Control Monitoring', desc: 'Detects unusual payment behaviour, reconciliation mismatches, and out-of-pattern transactions — strengthening governance continuously.' },
  { title: 'Multi-Entity Financial Coordination', desc: 'Consolidates and coordinates finance operations across subsidiaries, divisions, and legal entities — eliminating intercompany reconciliation friction.' },
];

const outcomes = [
  { num: '80%', label: 'Faster Close Preparation', desc: 'Continuous task resolution and exception handling reduce month-end bottlenecks.' },
  { num: '90%+', label: 'Automated Match Rate', desc: 'Most reconciliation work is handled automatically, leaving teams to focus on exceptions.' },
  { num: '50%', label: 'Less Manual Follow-Up', desc: 'AP chases, AR reminders, and cross-team status checks are automated into workflows.' },
  { num: '3×', label: 'Faster Exception Resolution', desc: 'Problems are surfaced earlier with context and next-step recommendations attached.' },
  { num: '24/7', label: 'Operational Visibility', desc: 'Finance leaders gain a live view of cash, exceptions, and close readiness.' },
  { num: '100%', label: 'Audit Trail Coverage', desc: 'Every action, approval, and reconciliation decision is logged for compliance and review.' },
];

const useCases = [
  { title: 'Mid-Market Finance Teams', desc: 'Automate close workflows and eliminate rework across growing finance operations.' },
  { title: 'Multi-Entity Corporate Groups', desc: 'Coordinate finance operations across subsidiary structures and legal entities.' },
  { title: 'SaaS & Subscription Businesses', desc: 'Connect billing platforms, payment gateways, and ERP systems to manage recurring revenue and reconciliation.' },
  { title: 'Private Equity Portfolio Finance', desc: 'Harmonize consolidation and reporting across portfolio company finance operations.' },
  { title: 'Banking Back-Office Automation', desc: 'Reduce manual processes in settlement, custody, and nostro operations.' },
  { title: 'Fintech & Payments Operations', desc: 'Automate reconciliation and compliance across payment channels and corridors.' },
];

const related = [
  { name: 'Clara™', path: '/clara', logoFile: 'Clara-logo.svg', active: true, desc: 'Clara orchestrates the entire finance operating layer — from AP and AR through reconciliation and close.' },
  { name: 'Reven™', path: '/reven', logoFile: 'Reven-logo.svg', active: true, desc: 'Reven specializes in revenue cycle management for healthcare — integrating with Clara for unified financial control.' },
  { name: 'Shift™', path: '/shift', logoFile: 'Shift-logo.svg', active: true, desc: 'Shift manages payroll and workforce operations — coordinating with Clara on payment timing and reconciliation.' },
];

export const Finance = () => {
  const ucRef = useRef(null);
  const { scrollYProgress: ucScroll } = useScroll({
    target: ucRef,
    offset: ['start end', 'end start'],
  });
  const ucBgY = useTransform(ucScroll, [0, 1], ['0%', '25%']);

  return (
    <>
      <SEO
        title="AI for Finance & Banking — AP Automation, Reconciliation & Financial Close"
        description="Clara closes the books 80% faster, matches 90%+ of transactions automatically, and eliminates 50% of manual finance follow-up. Built for mid-market and enterprise finance teams."
        path="/industries/finance"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AI for Finance & Banking — Audela",
            "description": "Clara closes the books 80% faster, matches 90%+ of transactions automatically, and eliminates 50% of manual finance follow-up.",
            "about": { "@type": "Thing", "name": "Finance & Banking AI" },
            "audience": { "@type": "Audience", "audienceType": "Finance CFOs, Controllers, Finance Operations Directors" },
            "provider": { "@type": "Organization", "name": "Audela", "url": "https://audela.me" },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://audela.me" },
              { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://audela.me/#industries" },
              { "@type": "ListItem", "position": 3, "name": "Finance & Banking", "item": "https://audela.me/industries/finance" },
            ],
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <nav className="pp-breadcrumb" aria-label="breadcrumb">
        <div className="container pp-breadcrumb-inner">
          <Link to="/">Audela</Link>
          <span className="pp-breadcrumb-sep">/</span>
          <Link to="/#industries">Industries</Link>
          <span className="pp-breadcrumb-sep">/</span>
          <span className="pp-breadcrumb-current">Finance & Banking</span>
        </div>
      </nav>

      <h1 className="sr-only">AI for Finance & Banking — AP Automation, Reconciliation & Financial Close</h1>

      {/* Hero */}
      <section className="pp-hero ip-hero finance-hero">
        <HeroGeo />
        <div className="container pp-hero-inner">
          <div className="pp-hero-left">
            <motion.span className="pp-category" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
              Finance & Banking · Operations AI
            </motion.span>

            <motion.h2 className="ip-hero-name" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1, ease }}>
              Autonomous Finance Operations for Institutions That Cannot Afford Errors
            </motion.h2>

            <motion.p className="pp-hero-desc" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }}>
              Finance institutions face mounting pressure: close deadlines squeeze teams, reconciliation across systems remains manual, and audit trails demand real-time visibility. Audela deploys specialised AI across AP, AR, reconciliation, and close management — built to eliminate error and accelerate the financial calendar.
            </motion.p>

            <motion.div className="pp-hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease }}>
              <Link to="/contact" className="pp-btn-primary">Request a Demo</Link>
              <a href="#how-it-works" className="pp-btn-ghost">See How It Works ↓</a>
            </motion.div>
          </div>

          <motion.div className="pp-kpi-col" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.18, ease }}>
            {kpis.map(k => (
              <div key={k.label} className="pp-kpi">
                <div className="pp-kpi-num"><CountUp value={k.num} /></div>
                <div className="pp-kpi-label">{k.label}</div>
                <div className="pp-kpi-desc">{k.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section id="how-it-works" className="pp-section pp-section-white">
        <div className="container">
          <AnimatedSection yOffset={24}>
            <div className="pp-section-header">
              <span className="pp-tag">Finance Challenges</span>
              <h2 className="pp-section-title">What Finance<br /><em>Organisations Face.</em></h2>
              <p className="pp-section-sub">The operational pressures driving change in finance operations and close management.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection yOffset={32} delay={0.1}>
            <div className="pp-steps">
              {challenges.map(c => (
                <div key={c.num} className="pp-step">
                  <span className="pp-step-num">{c.num}</span>
                  <h3 className="pp-step-title">{c.title}</h3>
                  <p className="pp-step-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How Audela Helps */}
      <section className="pp-section pp-section-alt ip-caps-section finance-caps-section" ref={ucRef}>
        <motion.div className="ip-caps-parallax-bg finance-caps-bg" style={{ y: ucBgY }} />
        <div className="ip-caps-parallax-overlay finance-caps-overlay" />

        <div className="container">
            <AnimatedSection yOffset={24}>
              <div className="pp-section-header">
                <span className="pp-tag">Audela for Finance</span>
                <h2 className="pp-section-title">How Audela<br /><em>Transforms Finance Operations.</em></h2>
              </div>
            </AnimatedSection>
            <AnimatedSection yOffset={32} delay={0.08}>
              <div className="pp-caps-grid">
                {capabilities.map(c => (
                  <div key={c.title} className="pp-cap-card">
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
      </section>

      {/* Measured Outcomes */}
      <section className="pp-section pp-section-white">
        <div className="container">
          <AnimatedSection yOffset={24}>
            <div className="pp-section-header">
              <span className="pp-tag">Measured Impact</span>
              <h2 className="pp-section-title">Outcomes That<br /><em>Matter.</em></h2>
              <p className="pp-section-sub">Real financial impact delivered across the finance operating model.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection yOffset={32} delay={0.1}>
            <div className="pp-outcomes-grid">
              {outcomes.map(o => (
                <div key={o.label} className="pp-outcome-card">
                  <div className="pp-outcome-num"><CountUp value={o.num} /></div>
                  <div className="pp-outcome-label">{o.label}</div>
                  <p className="pp-outcome-desc">{o.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="pp-section pp-section-alt">
        <div className="container">
          <AnimatedSection yOffset={24}>
            <div className="pp-section-header">
              <span className="pp-tag">Finance Use Cases</span>
              <h2 className="pp-section-title">Where Audela<br /><em>Delivers Value.</em></h2>
              <p className="pp-section-sub">Real-world scenarios where finance teams gain immediate operational leverage.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection yOffset={32} delay={0.1}>
            <div className="pp-uc-grid">
              {useCases.map(uc => (
                <div key={uc.title} className="pp-uc-card">
                  <h3>{uc.title}</h3>
                  <p>{uc.desc}</p>
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
              <span className="pp-tag">Complementary Solutions</span>
              <h2 className="pp-section-title">Audela Finance<br /><em>Ecosystem.</em></h2>
              <p className="pp-section-sub">Clara works alongside Reven and Shift to create a unified AI operating model across finance, revenue, and workforce.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection yOffset={32} delay={0.1}>
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
