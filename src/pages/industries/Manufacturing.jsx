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
import './Manufacturing.css';

const ease = [0.22, 1, 0.36, 1];

const HeroGeo = () => (
  <svg className="pp-hero-geo" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="manufacturing-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <rect x="15" y="15" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5"/>
        <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.6"/>
        <line x1="20" y1="40" x2="60" y2="40" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.4"/>
        <line x1="40" y1="20" x2="40" y2="60" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.4"/>
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#manufacturing-geo)"/>
  </svg>
);

const kpis = [
  { num: '35%', label: 'Quality Score Improvement', desc: 'Production procedures monitored in real time elevate quality baselines within 90 days.' },
  { num: '30–50%', label: 'Scheduling Inefficiency Reduction', desc: 'Multi-shift scheduling with skill matching and disruption response removes manual coordination.' },
  { num: '60%', label: 'Reduction in Compliance Incident Cost', desc: 'Continuous safety monitoring and automated audit trails eliminate compliance surprises.' },
];

const challenges = [
  { num: '01', title: 'Quality & Safety Compliance at Scale', desc: 'Manual procedures cannot keep pace with multi-shift production, creating audit risk and quality drift.' },
  { num: '02', title: 'Shift Scheduling Across Complex Operations', desc: 'Coordinating 24/7 production shifts while balancing skill requirements, safety rules, and live disruptions.' },
  { num: '03', title: 'The Onboarding Quality Blind Spot', desc: 'New operators arrive without baseline quality assessment — weeks of production before standards are enforced.' },
  { num: '04', title: 'Production Finance Complexity', desc: 'Cost allocation across production lines, material tracking, and vendor payments remain manual and fragmented.' },
];

const capabilities = [
  { title: 'Production Procedure Quality Scoring', desc: 'Real-time monitoring of production procedures, step completion, and protocol compliance — surfacing quality gaps at the point of work.' },
  { title: 'Safety Protocol Compliance Monitoring', desc: 'Continuous safety procedure verification and incident prevention — documenting compliance trails for audits and regulatory review.' },
  { title: '24/7 Production Workforce Scheduling', desc: 'Multi-shift scheduling with skill matching, safety rule enforcement, and real-time disruption response.' },
  { title: 'Operator Onboarding Quality Baseline', desc: 'Day 1 quality standards assessment for new operators — rapid certification programs and competency validation.' },
  { title: 'Manufacturing Finance & Cost Reconciliation', desc: 'Automated cost allocation across production lines, material tracking, and vendor payment automation.' },
  { title: 'Field Installation Verification', desc: 'Quality assessment for field-installed products and customer handoff compliance — ensuring production standards follow into the field.' },
];

const outcomes = [
  { num: '35%', label: 'Quality Score Improvement', desc: 'Real-time procedure monitoring elevates quality baselines and closes compliance gaps.' },
  { num: '60%', label: 'Reduction in Compliance Incident Cost', desc: 'Continuous monitoring and automated audit trails eliminate regulatory surprises and penalties.' },
  { num: '30–50%', label: 'Scheduling Inefficiency Reduction', desc: 'Automated multi-shift coordination removes manual rescheduling and coverage gaps.' },
  { num: '1', label: 'Day 1 Quality Measurement', desc: 'New operators assessed against production standards from first shift — no quality blind spot.' },
  { num: '3×', label: 'Faster Performance Development', desc: 'Objective quality feedback and reinforcement accelerate operator certification.' },
  { num: '100%', label: 'Compliance Trail Coverage', desc: 'Every procedure, decision, and exception logged and auditable for regulatory review.' },
];

const useCases = [
  { title: 'Production Line Quality Assurance', desc: 'Real-time procedure compliance and quality scoring across all production lines and shifts.' },
  { title: 'Field Engineer Installation Compliance', desc: 'Verification of on-site installations and customer handoff quality standards.' },
  { title: '24/7 Shift Workforce Optimisation', desc: 'Multi-shift scheduling with skill balancing and safety rule enforcement across production operations.' },
  { title: 'Operator Onboarding & Certification Tracking', desc: 'Rapid certification programs with quality baseline and competency validation for new hires.' },
  { title: 'Manufacturing Finance Back-Office', desc: 'Cost allocation, material tracking, and vendor payment automation across production operations.' },
  { title: 'Site Safety Compliance Documentation', desc: 'Continuous safety monitoring and audit trail documentation for regulatory compliance.' },
];

const related = [
  { name: 'Lens™', path: '/lens', logoFile: 'Lens-logo.svg', active: true, desc: 'Lens monitors production procedures and safety compliance — capturing quality data from every shift and operator.' },
  { name: 'Shift™', path: '/shift', logoFile: 'Shift-logo.svg', active: true, desc: 'Shift manages 24/7 production workforce scheduling — optimizing multi-shift operations with skill matching and safety rules.' },
  { name: 'Clara™', path: '/clara', logoFile: 'Clara-logo.svg', active: true, desc: 'Clara automates manufacturing finance — cost allocation, material tracking, and vendor payment automation.' },
];

export const Manufacturing = () => {
  const ucRef = useRef(null);
  const { scrollYProgress: ucScroll } = useScroll({
    target: ucRef,
    offset: ['start end', 'end start'],
  });
  const ucBgY = useTransform(ucScroll, [0, 1], ['0%', '25%']);

  return (
    <>
      <SEO
        title="AI for Manufacturing & Field Operations — Quality Scoring, Shift Scheduling & Compliance"
        description="Lens improves quality scores by 35% in 90 days. Shift cuts scheduling inefficiencies by 30–50%. Real-time compliance monitoring built for manufacturing and field operations."
        path="/industries/manufacturing"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AI for Manufacturing & Field Operations — Audela",
            "description": "Lens improves quality scores by 35% in 90 days. Shift cuts scheduling inefficiencies by 30–50%. Real-time compliance monitoring.",
            "about": { "@type": "Thing", "name": "Manufacturing & Field Operations AI" },
            "audience": { "@type": "Audience", "audienceType": "Manufacturing Directors, Quality Managers, Operations Controllers" },
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
              { "@type": "ListItem", "position": 3, "name": "Manufacturing & Field Ops", "item": "https://audela.me/industries/manufacturing" },
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
          <span className="pp-breadcrumb-current">Manufacturing & Field Ops</span>
        </div>
      </nav>

      <h1 className="sr-only">AI for Manufacturing & Field Operations — Quality Scoring, Shift Scheduling & Compliance</h1>

      {/* Hero */}
      <section className="pp-hero ip-hero manufacturing-hero">
        <HeroGeo />
        <div className="container pp-hero-inner">
          <div className="pp-hero-left">
            <motion.span className="pp-category" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
              Manufacturing & Field Operations · Quality & Workforce AI
            </motion.span>

            <motion.h2 className="ip-hero-name" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1, ease }}>
              AI That Enforces Standards, Optimises Shifts, and Controls Costs on the Floor
            </motion.h2>

            <motion.p className="pp-hero-desc" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }}>
              Manufacturing and field operations leaders face relentless pressure: quality compliance must be flawless, shift scheduling across complex operations overwhelms planning teams, and new operators arrive without baseline quality assessment. Audela deploys specialised AI across production quality monitoring, workforce scheduling, and finance operations — built for the precision and complexity of manufacturing and field environments.
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
              <span className="pp-tag">Manufacturing Challenges</span>
              <h2 className="pp-section-title">What Manufacturing<br /><em>Organisations Face.</em></h2>
              <p className="pp-section-sub">The operational pressures driving change in production quality and shift management.</p>
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
      <section className="pp-section pp-section-alt ip-caps-section manufacturing-caps-section" ref={ucRef}>
        <motion.div className="ip-caps-parallax-bg manufacturing-caps-bg" style={{ y: ucBgY }} />
        <div className="ip-caps-parallax-overlay manufacturing-caps-overlay" />

        <div className="container">
            <AnimatedSection yOffset={24}>
              <div className="pp-section-header">
                <span className="pp-tag">Audela for Manufacturing</span>
                <h2 className="pp-section-title">How Audela<br /><em>Transforms Manufacturing Operations.</em></h2>
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
              <p className="pp-section-sub">Real operational impact delivered across quality, scheduling, and compliance.</p>
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
              <span className="pp-tag">Manufacturing Use Cases</span>
              <h2 className="pp-section-title">Where Audela<br /><em>Delivers Value.</em></h2>
              <p className="pp-section-sub">Real-world scenarios where manufacturing operations gain immediate operational advantage.</p>
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
              <h2 className="pp-section-title">Audela Manufacturing<br /><em>Ecosystem.</em></h2>
              <p className="pp-section-sub">Lens, Shift, and Clara work together to create a unified operational model across quality, scheduling, and finance.</p>
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
            <h2 className="pp-cta-title">See Audela Manufacturing<br /><em>in Action.</em></h2>
            <p className="pp-cta-desc">
              Get a personalised demo configured for your production complexity, shift structure,
              and quality requirements — with a live expert from the Audela team.
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
