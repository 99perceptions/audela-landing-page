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
import './TransportLogistics.css';

const ease = [0.22, 1, 0.36, 1];

const HeroGeo = () => (
  <svg className="pp-hero-geo" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="transport-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="3" fill="currentColor" fillOpacity="0.4"/>
        <circle cx="60" cy="20" r="3" fill="currentColor" fillOpacity="0.7"/>
        <circle cx="20" cy="60" r="3" fill="currentColor" fillOpacity="0.6"/>
        <circle cx="60" cy="60" r="3" fill="currentColor" fillOpacity="0.5"/>
        <path d="M20 20 L60 60" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3"/>
        <path d="M60 20 L20 60" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3"/>
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#transport-geo)"/>
  </svg>
);

const kpis = [
  { num: '30–50%', label: 'Scheduling Inefficiency Reduction', desc: 'Demand-aware fleet scheduling eliminates manual rescheduling and coordination overhead.' },
  { num: '40%', label: 'Fewer Field Quality Incidents', desc: 'Real-time compliance scoring ensures delivery and service standards across the fleet.' },
  { num: '3×', label: 'Faster Financial Reconciliation', desc: 'Automated route cost matching and vendor payment verification accelerate finance close.' },
];

const challenges = [
  { num: '01', title: 'Driver Scheduling at Scale', desc: 'Coordinating drivers across multiple depots while managing absences, rest requirements, and live disruptions creates persistent scheduling friction.' },
  { num: '02', title: 'Field Quality Without Visibility', desc: 'No real-time insight into delivery protocol compliance, service standards, or quality incidents in the field until complaints or audits arrive.' },
  { num: '03', title: 'Financial Complexity Behind Every Route', desc: 'Route costs, fuel surcharges, and vendor payments are manual and error-prone — eating into operational margins and delaying close.' },
  { num: '04', title: 'Regulatory Compliance Pressure', desc: 'Hours-of-service tracking, driver rest periods, and incident documentation must be defensible for audits and regulatory review.' },
];

const capabilities = [
  { title: 'Depot & Fleet Workforce Scheduling', desc: 'Multi-depot scheduling with absence prediction, disruption response, and shift optimization — ensuring coverage without excess overtime.' },
  { title: 'Delivery Protocol Quality Scoring', desc: 'Real-time field protocol compliance scoring for deliveries, pickups, and vehicle inspections — surfacing quality gaps before they become liabilities.' },
  { title: 'Route Finance Reconciliation', desc: 'Automatic route cost matching, fuel surcharge application, and vendor payment verification — eliminating manual finance reconciliation.' },
  { title: 'Real-Time Absence & Disruption Response', desc: 'Continuous coverage optimization when drivers become unavailable — automatically rerouting and adjusting schedules in real time.' },
  { title: 'Driver Onboarding Quality Baseline', desc: 'New driver quality assessment and protocol mastery verification — ensuring standards are met from day one.' },
  { title: 'Fleet Cost & Vendor Payment Automation', desc: 'Autonomous AP processing for fuel, maintenance, and third-party logistics vendors — reducing finance overhead.' },
];

const outcomes = [
  { num: '30–50%', label: 'Fewer Scheduling Inefficiencies', desc: 'Automated scheduling removes manual coordination overhead and reduces missed coverage.' },
  { num: '40%', label: 'Fewer Field Quality Incidents', desc: 'Real-time compliance scoring catches quality gaps before they become customer complaints.' },
  { num: '3×', label: 'Faster Financial Reconciliation', desc: 'Automated route finance matching eliminates manual close-time work.' },
  { num: '100%', label: 'Hours-of-Service Compliance', desc: 'Every shift scheduled within regulatory limits — defensible and auditable.' },
  { num: '60%', label: 'Reduction in AP Processing Time', desc: 'Vendor invoices matched automatically to routes and payments — eliminating follow-up.' },
  { num: '99%', label: 'Real-Time Disruption Response', desc: 'Coverage gaps detected and filled automatically without manual intervention.' },
];

const useCases = [
  { title: 'Last-Mile Delivery Workforce', desc: 'Optimize scheduling and service quality for same-day and next-day delivery at scale.' },
  { title: 'Fleet Driver Quality Programme', desc: 'Continuous assessment of driver protocol compliance across vehicle fleet and delivery network.' },
  { title: 'Transport Finance Back-Office', desc: 'Automate AP, AR, and cost reconciliation across multiple transportation vendors and routes.' },
  { title: 'Multi-Depot Scheduling Coordination', desc: 'Coordinated shift scheduling and disruption response across entire depot network.' },
  { title: 'Subcontractor & Agency Driver Management', desc: 'Onboarding, compliance, and payment automation for flexible and temporary workforce.' },
  { title: 'Regulatory Compliance Monitoring', desc: 'Continuous hours-of-service, rest period, and audit trail documentation across fleet.' },
];

const related = [
  { name: 'Shift™', path: '/shift', logoFile: 'Shift-logo.svg', active: true, desc: 'Shift specializes in driver and fleet workforce scheduling — coordinating complex multi-depot operations.' },
  { name: 'Lens™', path: '/lens', logoFile: 'Lens-logo.svg', active: true, desc: 'Lens monitors field protocol compliance — capturing quality data from deliveries and service interactions.' },
  { name: 'Clara™', path: '/clara', logoFile: 'Clara-logo.svg', active: true, desc: 'Clara automates route finance reconciliation and vendor payment automation across the transport operation.' },
];

export const TransportLogistics = () => {
  const ucRef = useRef(null);
  const { scrollYProgress: ucScroll } = useScroll({
    target: ucRef,
    offset: ['start end', 'end start'],
  });
  const ucBgY = useTransform(ucScroll, [0, 1], ['0%', '25%']);

  return (
    <>
      <SEO
        title="AI for Transport & Logistics — Fleet Scheduling, Field Quality & Finance Automation"
        description="Shift cuts driver scheduling inefficiencies by 30–50%. Lens reduces field quality incidents by 40%. Clara reconciles route finance 3× faster. Built for transport operations."
        path="/industries/transport-logistics"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AI for Transport & Logistics — Audela",
            "description": "Shift cuts driver scheduling inefficiencies by 30–50%. Lens reduces field quality incidents by 40%. Clara reconciles route finance 3× faster.",
            "about": { "@type": "Thing", "name": "Transport & Logistics AI" },
            "audience": { "@type": "Audience", "audienceType": "Transport Operations Directors, Fleet Managers, Logistics CFOs" },
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
              { "@type": "ListItem", "position": 3, "name": "Transport & Logistics", "item": "https://audela.me/industries/transport-logistics" },
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
          <span className="pp-breadcrumb-current">Transport & Logistics</span>
        </div>
      </nav>

      <h1 className="sr-only">AI for Transport & Logistics — Fleet Scheduling, Field Quality & Finance Automation</h1>

      {/* Hero */}
      <section className="pp-hero ip-hero transport-hero">
        <HeroGeo />
        <div className="container pp-hero-inner">
          <div className="pp-hero-left">
            <motion.span className="pp-category" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
              Transport & Logistics · Workforce & Field AI
            </motion.span>

            <motion.h2 className="ip-hero-name" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1, ease }}>
              AI That Keeps Fleets Moving, Drivers Deployed, and Costs Under Control
            </motion.h2>

            <motion.p className="pp-hero-desc" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }}>
              Transport operators face relentless pressure: driver scheduling complexity overwhelms planning teams, field quality incidents go undetected until they become liabilities, and financial operations across multiple vendors remain manual. Audela deploys specialised AI across fleet scheduling, field quality monitoring, and finance operations — built for the distributed, complex operational reality of transport networks.
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
              <span className="pp-tag">Transport Challenges</span>
              <h2 className="pp-section-title">What Transport<br /><em>Operators Face.</em></h2>
              <p className="pp-section-sub">The operational pressures driving change in fleet management and logistics operations.</p>
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
      <section className="pp-section pp-section-alt ip-caps-section transport-caps-section" ref={ucRef}>
        <motion.div className="ip-caps-parallax-bg transport-caps-bg" style={{ y: ucBgY }} />
        <div className="ip-caps-parallax-overlay transport-caps-overlay" />

        <div className="container">
            <AnimatedSection yOffset={24}>
              <div className="pp-section-header">
                <span className="pp-tag">Audela for Transport</span>
                <h2 className="pp-section-title">How Audela<br /><em>Transforms Transport Operations.</em></h2>
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
              <p className="pp-section-sub">Real operational impact delivered across fleet, field, and finance.</p>
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
              <span className="pp-tag">Transport Use Cases</span>
              <h2 className="pp-section-title">Where Audela<br /><em>Delivers Value.</em></h2>
              <p className="pp-section-sub">Real-world scenarios where transport operations gain immediate operational advantage.</p>
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
              <h2 className="pp-section-title">Audela Transport<br /><em>Ecosystem.</em></h2>
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
            <h2 className="pp-cta-title">See Audela Transport<br /><em>in Action.</em></h2>
            <p className="pp-cta-desc">
              Get a personalised demo configured for your fleet size, operational complexity,
              and transport challenges — with a live expert from the Audela team.
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
