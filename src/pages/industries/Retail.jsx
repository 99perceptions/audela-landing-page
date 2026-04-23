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
import './Retail.css';

const ease = [0.22, 1, 0.36, 1];

const HeroGeo = () => (
  <svg className="pp-hero-geo" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="retail-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <rect x="10" y="10" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.5"/>
        <rect x="50" y="10" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.7"/>
        <rect x="10" y="50" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.6"/>
        <rect x="50" y="50" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4"/>
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#retail-geo)"/>
  </svg>
);

const kpis = [
  { num: '20–35%', label: 'Higher Workforce Utilisation', desc: 'Demand-responsive scheduling ensures staff are deployed where footfall and customer interaction matter most.' },
  { num: '40%', label: 'Fewer Customer Complaints', desc: 'Real-time service quality monitoring ensures consistent customer experience across all locations.' },
  { num: '80%', label: 'Faster Multi-Site Close', desc: 'Unified financial reconciliation across all stores eliminates multi-site consolidation bottlenecks.' },
];

const challenges = [
  { num: '01', title: 'Demand-Driven Scheduling Complexity', desc: 'Footfall patterns shift hourly. Manual scheduling leaves teams over or understaffed — wasting labour budget or degrading customer experience.' },
  { num: '02', title: 'Customer Service Quality at Scale', desc: 'No visibility into customer interactions and service quality across hundreds of locations until complaints arrive — reactive, not preventative.' },
  { num: '03', title: 'Multi-Site Financial Operations', desc: 'Closing books across store networks is manual, slow, and error-prone — tying up finance teams for days after period close.' },
  { num: '04', title: 'High Staff Turnover and Onboarding Cost', desc: 'Training new hires to service standards takes weeks. Quality drifts without continuous reinforcement and objective measurement.' },
];

const capabilities = [
  { title: 'Footfall-Responsive Workforce Scheduling', desc: 'Real-time scheduling optimization based on predicted demand and workforce availability — removing manual rescheduling cycles.' },
  { title: 'Customer Interaction Quality Scoring', desc: 'Automated assessment of customer service interactions, identifying training gaps and performance trends across locations.' },
  { title: 'Multi-Site Financial Reconciliation', desc: 'Unified close management across all store locations and payment channels — eliminating consolidation friction.' },
  { title: 'New Hire Standards Enforcement', desc: 'Quality baseline establishment for onboarding associates — ensuring standards are maintained from day one.' },
  { title: 'Promotional Period Workforce Optimisation', desc: 'Dynamic staffing for seasonal demand, promotions, and special events — responding to business cycles automatically.' },
  { title: 'Supplier Payment & AP Automation', desc: 'Autonomous AP processing for inventory, marketing, and operational vendors — reducing finance overhead.' },
];

const outcomes = [
  { num: '20–35%', label: 'Higher Workforce Utilisation', desc: 'Demand-aware scheduling optimizes labour deployment across all locations.' },
  { num: '40%', label: 'Fewer Customer Complaints', desc: 'Proactive quality monitoring catches service gaps before they become complaints.' },
  { num: '80%', label: 'Faster Multi-Site Close', desc: 'Automated reconciliation across stores eliminates end-of-period consolidation work.' },
  { num: '60%', label: 'Training Cost Reduction', desc: 'Objective quality baselines and reinforcement reduce onboarding time and rework.' },
  { num: '50%', label: 'Reduction in Scheduling Admin', desc: 'Automated demand-driven scheduling eliminates manual rescheduling and coordination.' },
  { num: '100%', label: 'Labour Compliance Coverage', desc: 'Every shift scheduled within labour regulations — defensible and auditable.' },
];

const useCases = [
  { title: 'Supermarket Workforce Scheduling', desc: 'Optimize staffing based on footfall prediction and checkout performance across all locations.' },
  { title: 'Restaurant & QSR Service Quality', desc: 'Monitor order accuracy, speed of service, and customer satisfaction continuously.' },
  { title: 'Retail Estate Financial Management', desc: 'Unified close process across regional and national store networks.' },
  { title: 'Hotel Staffing Optimisation', desc: 'Demand-driven housekeeping and front-desk scheduling for seasonal and event-driven hotels.' },
  { title: 'New Store Opening Workforce Ramp', desc: 'Accelerate new location onboarding with quality baselines and rapid staff certification.' },
  { title: 'Franchise Network Quality Programme', desc: 'Continuous service quality monitoring across all franchise locations and operators.' },
];

const related = [
  { name: 'Shift™', path: '/shift', logoFile: 'Shift-logo.svg', active: true, desc: 'Shift manages workforce scheduling across retail locations — optimizing staff deployment based on real demand.' },
  { name: 'Lens™', path: '/lens', logoFile: 'Lens-logo.svg', active: true, desc: 'Lens monitors customer service quality interactions — identifying training gaps and service standards compliance.' },
  { name: 'Clara™', path: '/clara', logoFile: 'Clara-logo.svg', active: true, desc: 'Clara automates multi-site financial reconciliation — eliminating store consolidation and close bottlenecks.' },
];

export const Retail = () => {
  const ucRef = useRef(null);
  const { scrollYProgress: ucScroll } = useScroll({
    target: ucRef,
    offset: ['start end', 'end start'],
  });
  const ucBgY = useTransform(ucScroll, [0, 1], ['0%', '25%']);

  return (
    <>
      <SEO
        title="AI for Retail & Hospitality — Workforce Scheduling, Service Quality & Finance Automation"
        description="Shift improves workforce utilisation by 20–35%. Lens reduces customer complaints by 40%. Clara closes multi-site books 80% faster. Built for retail and hospitality operations."
        path="/industries/retail"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AI for Retail & Hospitality — Audela",
            "description": "Shift improves workforce utilisation by 20–35%. Lens reduces customer complaints by 40%. Clara closes multi-site books 80% faster.",
            "about": { "@type": "Thing", "name": "Retail & Hospitality AI" },
            "audience": { "@type": "Audience", "audienceType": "Retail COOs, Store Operations Directors, Hospitality Finance Controllers" },
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
              { "@type": "ListItem", "position": 3, "name": "Retail & Hospitality", "item": "https://audela.me/industries/retail" },
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
          <span className="pp-breadcrumb-current">Retail & Hospitality</span>
        </div>
      </nav>

      <h1 className="sr-only">AI for Retail & Hospitality — Workforce Scheduling, Service Quality & Finance Automation</h1>

      {/* Hero */}
      <section className="pp-hero ip-hero retail-hero">
        <HeroGeo />
        <div className="container pp-hero-inner">
          <div className="pp-hero-left">
            <motion.span className="pp-category" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
              Retail & Hospitality · Workforce & Finance AI
            </motion.span>

            <motion.h2 className="ip-hero-name" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1, ease }}>
              AI That Schedules Your Teams, Scores Your Service, and Closes Your Books
            </motion.h2>

            <motion.p className="pp-hero-desc" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }}>
              Retail and hospitality leaders face compounding complexity: demand swings demand real-time workforce optimization, service quality varies across locations, and financial operations span hundreds of points of sale. Audela deploys specialised AI across workforce scheduling, service quality monitoring, and multi-site finance operations — built for the pace and scale of retail and hospitality networks.
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
              <span className="pp-tag">Retail Challenges</span>
              <h2 className="pp-section-title">What Retail<br /><em>Organisations Face.</em></h2>
              <p className="pp-section-sub">The operational pressures driving change in retail workforce and service operations.</p>
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
      <section className="pp-section pp-section-alt ip-caps-section retail-caps-section" ref={ucRef}>
        <motion.div className="ip-caps-parallax-bg retail-caps-bg" style={{ y: ucBgY }} />
        <div className="ip-caps-parallax-overlay retail-caps-overlay" />

        <div className="container">
            <AnimatedSection yOffset={24}>
              <div className="pp-section-header">
                <span className="pp-tag">Audela for Retail</span>
                <h2 className="pp-section-title">How Audela<br /><em>Transforms Retail Operations.</em></h2>
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
              <p className="pp-section-sub">Real operational impact delivered across scheduling, service, and finance.</p>
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
              <span className="pp-tag">Retail Use Cases</span>
              <h2 className="pp-section-title">Where Audela<br /><em>Delivers Value.</em></h2>
              <p className="pp-section-sub">Real-world scenarios where retail operations gain immediate competitive advantage.</p>
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
              <h2 className="pp-section-title">Audela Retail<br /><em>Ecosystem.</em></h2>
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
            <h2 className="pp-cta-title">See Audela Retail<br /><em>in Action.</em></h2>
            <p className="pp-cta-desc">
              Get a personalised demo configured for your store network size, service model,
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
