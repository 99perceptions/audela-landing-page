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
import './Facilities.css';

const ease = [0.22, 1, 0.36, 1];

const HeroGeo = () => (
  <svg className="pp-hero-geo" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="facilities-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <rect x="10" y="10" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.5"/>
        <rect x="20" y="20" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.6"/>
        <circle cx="40" cy="40" r="5" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.4"/>
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#facilities-geo)"/>
  </svg>
);

const kpis = [
  { num: '30–50%', label: 'Reduction in Scheduling Inefficiencies', desc: 'Coordinated scheduling across site networks removes manual rescheduling and coverage gaps.' },
  { num: '100%', label: 'SLA-Critical Site Coverage', desc: 'Real-time absence response ensures contractual service level commitments are met.' },
  { num: '60%', label: 'Reduction in Quality Monitoring Cost', desc: 'Automated quality verification and compliance documentation eliminate manual audits.' },
];

const challenges = [
  { num: '01', title: 'Multi-Site Workforce Scheduling Complexity', desc: 'Coordinating workers across dozens or hundreds of sites with varying requirements creates persistent friction.' },
  { num: '02', title: 'Quality Consistency Across Distributed Sites', desc: 'No unified view of cleaning, maintenance, and security standards across geographically dispersed locations.' },
  { num: '03', title: 'Contractor Payment & Finance Operations', desc: 'Manual reconciliation of contractor invoices, client billing, and payment timing across contracts.' },
  { num: '04', title: 'SLA Compliance Documentation', desc: 'Proving SLA delivery and coverage to demanding commercial and government clients requires constant manual evidence.' },
];

const capabilities = [
  { title: 'Multi-Site Shift Scheduling Engine', desc: 'Optimized scheduling across distributed facilities with coverage guarantees and real-time absence response.' },
  { title: 'Cleaning & Maintenance Quality Scoring', desc: 'Automated quality verification for daily cleaning protocols and maintenance procedures — surfacing gaps immediately.' },
  { title: 'Security Patrol & Compliance Monitoring', desc: 'Real-time patrol verification and security protocol compliance documentation for audit and regulatory review.' },
  { title: 'Contractor & Agency Payment Automation', desc: 'Automated AP processing for contractor and temporary worker payments — eliminating manual invoice chasing.' },
  { title: 'Client Contract Billing Reconciliation', desc: 'Unified billing reconciliation across multiple service contracts and client locations — eliminating disputes.' },
  { title: 'Real-Time Absence & Coverage Response', desc: 'Instant coverage optimization when workers become unavailable — automatically filling gaps without manual intervention.' },
];

const outcomes = [
  { num: '30–50%', label: 'Fewer Scheduling Inefficiencies', desc: 'Automated multi-site coordination removes manual rescheduling and coverage confusion.' },
  { num: '60%', label: 'Reduction in Quality Monitoring Cost', desc: 'Automated quality verification and documentation eliminate manual site audits.' },
  { num: '100%', label: 'SLA Documentation Coverage', desc: 'Every site visit, patrol, and service event logged and auditable for client proof.' },
  { num: '50%', label: 'Reduction in AP Processing Time', desc: 'Contractor invoices matched automatically to schedules and payments — eliminating follow-up.' },
  { num: '99%', label: 'Real-Time Absence Coverage Response', desc: 'Coverage gaps detected and filled automatically without manual intervention.' },
  { num: '40%', label: 'Reduction in Client Billing Disputes', desc: 'Unified billing reconciliation eliminates discrepancies between sites and contracts.' },
];

const useCases = [
  { title: 'Contract Cleaning Quality Programme', desc: 'Daily quality verification and protocol compliance across contracted locations and facility types.' },
  { title: 'Security Patrol Compliance', desc: 'Real-time patrol verification and incident documentation for security operations across the site network.' },
  { title: 'Multi-Site Workforce Scheduling', desc: 'Coordinated shift scheduling across facility network with coverage guarantees and absence response.' },
  { title: 'Facilities Finance Back-Office', desc: 'Automated AP and billing reconciliation across contractor relationships and client contracts.' },
  { title: 'Real-Time SLA Coverage Management', desc: 'Continuous SLA verification and coverage optimization across the entire facility network.' },
  { title: 'Facilities Group Financial Consolidation', desc: 'Unified financial operations and reporting across multi-location facility portfolios and service contracts.' },
];

const related = [
  { name: 'Shift™', path: '/shift', logoFile: 'Shift-logo.svg', active: true, desc: 'Shift optimizes multi-site workforce scheduling — coordinating staff across facility networks with real-time coverage guarantees.' },
  { name: 'Lens™', path: '/lens', logoFile: 'Lens-logo.svg', active: true, desc: 'Lens monitors quality compliance — capturing cleaning, maintenance, and security protocol verification across locations.' },
  { name: 'Clara™', path: '/clara', logoFile: 'Clara-logo.svg', active: true, desc: 'Clara automates facilities finance — contractor payments, client billing reconciliation, and financial consolidation.' },
];

export const Facilities = () => {
  const ucRef = useRef(null);
  const { scrollYProgress: ucScroll } = useScroll({
    target: ucRef,
    offset: ['start end', 'end start'],
  });
  const ucBgY = useTransform(ucScroll, [0, 1], ['0%', '25%']);

  return (
    <>
      <SEO
        title="AI for Facilities Management — Multi-Site Scheduling, Quality Monitoring & SLA Compliance"
        description="Shift cuts multi-site scheduling inefficiencies by 30–50%. Lens reduces quality monitoring cost by 60%. Clara automates contractor payment and client billing reconciliation."
        path="/industries/facilities"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AI for Facilities Management — Audela",
            "description": "Shift cuts multi-site scheduling inefficiencies by 30–50%. Lens reduces quality monitoring cost by 60%. Clara automates contractor payment and client billing.",
            "about": { "@type": "Thing", "name": "Facilities Management AI" },
            "audience": { "@type": "Audience", "audienceType": "Facilities Directors, Operations Managers, Contract Managers" },
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
              { "@type": "ListItem", "position": 3, "name": "Facilities & Workforce", "item": "https://audela.me/industries/facilities" },
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
          <span className="pp-breadcrumb-current">Facilities & Workforce</span>
        </div>
      </nav>

      <h1 className="sr-only">AI for Facilities Management — Multi-Site Scheduling, Quality Monitoring & SLA Compliance</h1>

      {/* Hero */}
      <section className="pp-hero ip-hero facilities-hero">
        <HeroGeo />
        <div className="container pp-hero-inner">
          <div className="pp-hero-left">
            <motion.span className="pp-category" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
              Facilities & Workforce Services · Operations AI
            </motion.span>

            <motion.h2 className="ip-hero-name" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1, ease }}>
              AI That Manages Every Worker, Every Site, and Every Contract — at Scale
            </motion.h2>

            <motion.p className="pp-hero-desc" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }}>
              Facilities management leaders face mounting complexity: coordinating workers across dozens of sites, ensuring consistent quality standards, managing contractor payments, and proving SLA compliance to demanding clients. Audela deploys specialised AI across multi-site workforce scheduling, quality monitoring, and finance operations — built for the distributed, contract-driven complexity of facilities management.
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
              <span className="pp-tag">Facilities Challenges</span>
              <h2 className="pp-section-title">What Facilities<br /><em>Organisations Face.</em></h2>
              <p className="pp-section-sub">The operational pressures driving change in multi-site workforce and contract management.</p>
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
      <section className="pp-section pp-section-alt ip-caps-section facilities-caps-section" ref={ucRef}>
        <motion.div className="ip-caps-parallax-bg facilities-caps-bg" style={{ y: ucBgY }} />
        <div className="ip-caps-parallax-overlay facilities-caps-overlay" />

        <div className="container">
            <AnimatedSection yOffset={24}>
              <div className="pp-section-header">
                <span className="pp-tag">Audela for Facilities</span>
                <h2 className="pp-section-title">How Audela<br /><em>Transforms Facilities Operations.</em></h2>
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
              <p className="pp-section-sub">Real operational impact delivered across scheduling, quality, and finance.</p>
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
              <span className="pp-tag">Facilities Use Cases</span>
              <h2 className="pp-section-title">Where Audela<br /><em>Delivers Value.</em></h2>
              <p className="pp-section-sub">Real-world scenarios where facilities operations gain immediate operational advantage.</p>
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
              <h2 className="pp-section-title">Audela Facilities<br /><em>Ecosystem.</em></h2>
              <p className="pp-section-sub">Shift, Lens, and Clara work together to create a unified operational model across scheduling, quality, and finance.</p>
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
            <h2 className="pp-cta-title">See Audela Facilities<br /><em>in Action.</em></h2>
            <p className="pp-cta-desc">
              Get a personalised demo configured for your facility network size, service model,
              and operational challenges — with a live expert from the Audela team.
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
