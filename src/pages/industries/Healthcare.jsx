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
import './Healthcare.css';

const ease = [0.22, 1, 0.36, 1];

const HeroGeo = () => (
  <svg className="pp-hero-geo" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="healthcare-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="0.6"/>
        <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="0.4"/>
        <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <line x1="40" y1="10" x2="40" y2="70" stroke="currentColor" strokeWidth="0.3"/>
        <line x1="10" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="0.3"/>
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#healthcare-geo)"/>
  </svg>
);

const kpis = [
  { num: '45%', label: 'Claim Denial Reduction', desc: 'Pre-submission AI validation eliminates preventable denials before they reach payers, improving clean claim rates.' },
  { num: '30–50%', label: 'Scheduling Efficiency Gain', desc: 'Demand-aware workforce scheduling ensures the right staff are in the right place — reducing agency spend and overtime.' },
  { num: '3×', label: 'Faster Cash Collection', desc: 'Automated follow-up workflows and intelligent denial resolution accelerate cash from claim submission to payment.' },
];

const challenges = [
  { num: '01', title: 'Revenue Leakage from Denials', desc: 'Claim denials — driven by coding errors, eligibility mismatches, and payer rule complexity — result in millions of dollars of recoverable revenue being lost or delayed every year.' },
  { num: '02', title: 'Workforce Scheduling Under Pressure', desc: 'Healthcare organisations operate 24/7 with complex skill requirements, compliance constraints, and unpredictable demand. Manual scheduling creates persistent gaps, overtime risk, and burnout.' },
  { num: '03', title: 'Finance Operations Complexity', desc: 'High-volume transactions, remittances, write-offs, intercompany allocations, and reconciliation across multiple cost centres create significant administrative burden for healthcare finance teams.' },
  { num: '04', title: 'Quality at the Point of Care', desc: 'Home care and community health workers perform tasks invisible to supervisors. Without objective quality measurement, compliance gaps go undetected until an incident or audit.' },
];

const capabilities = [
  { title: 'AI Claim Pre-Validation', desc: 'Every claim screened against payer rules, eligibility, and NCCI edits before submission — eliminating preventable denials upstream and protecting reimbursement rates.' },
  { title: 'Denial Management & Recovery', desc: 'Denied claims automatically categorised, root-cause analysed, and prioritised for resubmission — with AI focusing human effort on the highest-value recovery opportunities first.' },
  { title: 'Clinical Workforce Scheduling', desc: 'Shift builds optimised rosters across wards, departments, and community teams — balancing skills, compliance rules, shift preferences, and live demand without manual rescheduling cycles.' },
  { title: 'Healthcare Finance Automation', desc: 'Clara automates AP/AR, payment posting, remittance reconciliation, and close workflows — reducing administrative burden on finance teams managing high-volume, multi-payer environments.' },
  { title: 'Point-of-Care Quality Assurance', desc: 'Lens scores home care and community health workers against clinical protocols using smart glasses — providing objective compliance evidence that supervisors cannot physically observe.' },
  { title: 'Revenue Intelligence Dashboards', desc: 'Real-time visibility into denial rates by payer, days in AR, staffing coverage gaps, and financial close status — enabling clinical and financial leadership to act before performance deteriorates.' },
];

const outcomes = [
  { num: '45%', label: 'Claim Denial Reduction', desc: 'AI pre-validation eliminates the most common denial triggers before claims reach payer adjudication.' },
  { num: '30%', label: 'Faster Days in AR', desc: 'Automated follow-up and priority-based work queues accelerate cash collection across all payer types.' },
  { num: '50%', label: 'Reduction in Scheduling Admin', desc: 'Demand-aware scheduling replaces manual roster builds with automated, constraint-compliant workforce plans.' },
  { num: '100%', label: 'Protocol Coverage for Home Care', desc: 'Every visit scored against clinical standards — no quality blind spot during onboarding or remote deployment.' },
  { num: '3×', label: 'Faster Denial Resolution', desc: 'Claims categorised, corrected, and resubmitted faster when AI handles triage and routing automatically.' },
  { num: '80%', label: 'Faster Financial Close', desc: 'Continuous reconciliation and automated exception handling eliminate month-end compression for healthcare finance teams.' },
];

const useCases = [
  { title: 'Hospital System Revenue Cycle', desc: 'Multi-facility claim management, denial tracking, and payment reconciliation — consolidated into a single AI-driven revenue cycle across all sites.' },
  { title: 'Community & Home Care Compliance', desc: 'Lens monitors and scores home care workers against visit protocols — providing evidence of care standards for regulatory audit and payer review.' },
  { title: 'Clinical Workforce Rota Management', desc: 'Shift builds 24/7 rosters across clinical teams, balancing regulatory rest requirements, skill mix ratios, and demand patterns that change shift by shift.' },
  { title: 'Multi-Payer Remittance Reconciliation', desc: 'Clara automates payment posting and remittance matching across Medicare, Medicaid, and commercial payers — eliminating the manual reconciliation that consumes healthcare finance bandwidth.' },
  { title: 'Specialty Practice Revenue Optimisation', desc: 'AI coding validation and prior authorisation tracking tailored to high-complexity specialties — reducing denials where coding errors most frequently occur.' },
  { title: 'Healthcare Group Finance Operations', desc: 'Multi-entity financial consolidation, intercompany reconciliation, and continuous close management across hospital networks and subsidiary clinical operations.' },
];

const related = [
  { name: 'Reven™', path: '/reven', logoFile: 'Reven-logo.svg', active: true, desc: 'Reven is purpose-built for healthcare revenue cycle management — claim validation, denial management, and RCM automation.' },
  { name: 'Shift™', path: '/shift', logoFile: 'Shift-logo.svg', active: true, desc: 'Shift deploys clinical and support staff across wards, community, and departments — managing 24/7 operations with skill and compliance constraints.' },
  { name: 'Clara™', path: '/clara', logoFile: 'Clara-logo.svg', active: true, desc: 'Clara automates healthcare finance operations — AP/AR, remittance reconciliation, and continuous close across multi-payer environments.' },
];

export const Healthcare = () => {
  const capsRef = useRef(null);
  const { scrollYProgress: capsScroll } = useScroll({
    target: capsRef,
    offset: ['start end', 'end start'],
  });
  const capsBgY = useTransform(capsScroll, [0, 1], ['0%', '25%']);

  return (
    <>
      <SEO
        title="AI for Healthcare — Revenue Cycle, Workforce & Finance Automation"
        description="Audela reduces claim denials by 45%, cuts scheduling inefficiencies by 50%, and closes healthcare finance 80% faster. Purpose-built AI for clinical operations."
        path="/industries/healthcare"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AI for Healthcare — Audela",
            "description": "Audela delivers AI-powered revenue cycle management, clinical workforce scheduling, and healthcare finance automation for healthcare organisations.",
            "about": { "@type": "Thing", "name": "Healthcare AI" },
            "audience": { "@type": "Audience", "audienceType": "Healthcare CFOs, Revenue Cycle Directors, Clinical Operations Leaders" },
            "provider": { "@type": "Organization", "name": "Audela", "url": "https://audela.me" }
          })}
        </script>
      </Helmet>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://audela.me" },
              { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://audela.me/#industries" },
              { "@type": "ListItem", "position": 3, "name": "Healthcare", "item": "https://audela.me/industries/healthcare" }
            ]
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <nav className="pp-breadcrumb" aria-label="Breadcrumb">
        <div className="container pp-breadcrumb-inner">
          <Link to="/">Audela</Link>
          <span className="pp-breadcrumb-sep">/</span>
          <Link to="/#industries">Industries</Link>
          <span className="pp-breadcrumb-sep">/</span>
          <span className="pp-breadcrumb-current">Healthcare</span>
        </div>
      </nav>

      <h1 className="sr-only">AI for Healthcare — Revenue Cycle, Workforce & Finance Automation</h1>

      {/* Hero */}
      <section className="pp-hero ip-hero healthcare-hero">
        <HeroGeo />
        <div className="container pp-hero-inner">
          <div className="pp-hero-left">
            <motion.span className="pp-category" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
              Healthcare · Revenue & Workforce AI
            </motion.span>

            <motion.h2 className="ip-hero-name" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1, ease }}>
              AI That Runs the Business of Healthcare — So Clinicians Can Run Care
            </motion.h2>

            <motion.p className="pp-hero-desc" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }}>
              Healthcare organisations face compounding pressure: denied claims erode revenue, scheduling inefficiencies burn staff capacity, and fragmented finance operations drain teams. Audela deploys specialised AI across revenue cycle management, workforce scheduling, and finance operations — built for the complexity of clinical environments.
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
              <span className="pp-tag">Healthcare Challenges</span>
              <h2 className="pp-section-title">What Healthcare<br /><em>Organisations Face.</em></h2>
              <p className="pp-section-sub">The operational pressures driving change in healthcare finance and workforce operations.</p>
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
      <section className="pp-section pp-section-alt ip-caps-section healthcare-caps-section" ref={capsRef}>
        <motion.div
          className="ip-caps-parallax-bg healthcare-caps-bg"
          style={{ y: capsBgY }}
          aria-hidden="true"
        />
        <div className="ip-caps-parallax-overlay healthcare-caps-overlay" aria-hidden="true" />

        <div className="container">
          <AnimatedSection yOffset={24}>
            <div className="pp-section-header">
              <span className="pp-tag">Audela for Healthcare</span>
              <h2 className="pp-section-title">How Audela<br /><em>Transforms Healthcare Operations.</em></h2>
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

      {/* Measured Outcomes */}
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
                  <div className="pp-outcome-num"><CountUp value={o.num} /></div>
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
              <h2 className="pp-section-title">Audela Across<br /><em>Healthcare.</em></h2>
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
              <span className="pp-tag">Relevant Solutions</span>
              <h2 className="pp-section-title">Audela Products<br /><em>for Healthcare.</em></h2>
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
            <h2 className="pp-cta-title">See AI in<br /><em>Healthcare Action.</em></h2>
            <p className="pp-cta-desc">
              Get a personalised demo configured for your healthcare operation —
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
