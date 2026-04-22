import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { ContactForm } from '../sections/ContactForm';
import '../sections/ProductPage.css';
import './Shift.css';

const ease = [0.22, 1, 0.36, 1];

const HeroGeo = () => (
  <svg className="pp-hero-geo" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="shift-geo" x="0" y="0" width="70" height="70" patternUnits="userSpaceOnUse">
        <rect x="10" y="10" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.6" transform="rotate(15 35 35)"/>
        <rect x="20" y="20" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="0.4" transform="rotate(15 35 35)"/>
        <circle cx="35" cy="35" r="3" fill="none" stroke="currentColor" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#shift-geo)"/>
  </svg>
);

const kpis = [
  { num: '30–50%', label: 'Reduction in Scheduling Inefficiencies', desc: 'Dynamic, demand-aware workforce planning removes wasted labour hours and recurring scheduling friction.' },
  { num: '20–35%', label: 'Improvement in Workforce Utilisation',   desc: 'Better alignment between real workload demand and workforce capacity improves productivity across teams and locations.' },
  { num: 'Real-Time', label: 'Dynamic Workforce Optimisation',       desc: 'Shift continuously adapts schedules and workforce deployment as operating conditions change.' },
];

const features = [
  {
    num: '01',
    title: 'Demand Forecasting Intelligence',
    desc: 'Shift interprets historical patterns, live demand signals, and operational rhythms to forecast workforce needs with far greater precision than static planning methods. It reads your business — not just your headcount.',
    screenshot: '/Brand-Assets/Shift-Product-Screenshots/2-Dashboard.png',
    screenshotAlt: 'Shift demand forecasting dashboard',
  },
  {
    num: '02',
    title: 'Dynamic Scheduling Engine',
    desc: 'Builds optimised schedules automatically based on demand, skills, availability, shifts, and business priorities. Constraint-aware and adaptive — schedules adjust when demand changes, absences occur, or priorities shift during live operations.',
    screenshot: '/Brand-Assets/Shift-Product-Screenshots/8-Schedule Generation.png',
    screenshotAlt: 'Shift schedule generation interface',
  },
  {
    num: '03',
    title: 'Skill-Aware Workforce Allocation',
    desc: 'Matches the right people to the right work based on capability, certification, experience, and location-specific requirements. Profiles are continuously updated — so the right fit is always based on current reality, not stale records.',
    screenshot: '/Brand-Assets/Shift-Product-Screenshots/5-Staffing Board.png',
    screenshotAlt: 'Shift staffing board',
  },
  {
    num: '04',
    title: 'Real-Time Response to Disruption',
    desc: 'Adapts quickly when absences, demand spikes, delays, or operational changes occur. Shift surfaces options and recommendations immediately — helping teams stay stable under pressure without manual re-planning.',
    screenshot: '/Brand-Assets/Shift-Product-Screenshots/6-Shift Adjustment.png',
    screenshotAlt: 'Shift adjustment interface',
  },
];

const capabilities = [
  { title: 'Constraint & Compliance Management',    desc: 'Respects labour policies, rest rules, shift constraints, and business logic automatically while still maximising workforce efficiency.' },
  { title: 'Continuous Performance Optimisation',   desc: 'Learns from utilisation, output, service levels, and staffing outcomes over time — improving future workforce decisions continuously instead of relying on static planning cycles.' },
  { title: 'AI-Powered Schedule Generation',        desc: 'Generates schedules across complex multi-site, multi-role, multi-shift environments in seconds — handling constraint sets that would take human planners hours to resolve.' },
  { title: 'Worker Profile Intelligence',           desc: 'Maintains live profiles of availability, skill certifications, performance history, and contractual constraints — used to inform every allocation decision the system makes.' },
  { title: 'Operational Visibility Dashboard',      desc: 'Live view of workforce deployment, coverage gaps, utilisation rates, and service readiness across all sites and shifts — at every level of the organisation.' },
  { title: 'Cross-Industry Adaptability',           desc: 'Shift is not built for one vertical. Healthcare, logistics, retail, facilities, field services — the same intelligence engine adapts its model to fit your industry\'s demand patterns.' },
];

const outcomes = [
  { num: '30–50%', label: 'Lower Scheduling Inefficiency',    desc: 'Demand-aware workforce planning reduces wasted labour hours and removes recurring scheduling friction.' },
  { num: '20–35%', label: 'Higher Workforce Utilisation',     desc: 'Teams are deployed more effectively against real demand across shifts, sites, and functions.' },
  { num: '50%',    label: 'Fewer Manual Scheduling Decisions', desc: 'Manual planning cycles are replaced by intelligent, system-generated workforce recommendations.' },
  { num: 'Live',   label: 'Operational Agility',              desc: 'Shift responds to absences, spikes, and disruptions as they happen — not after service levels drop.' },
  { num: '100%',   label: 'Compliance Coverage',              desc: 'Every schedule honours labour laws, rest rules, and business policies automatically — no manual checking required.' },
  { num: '3×',     label: 'Faster Schedule Generation',       desc: 'Complex multi-site schedules that took hours to build manually are generated in seconds by the optimisation engine.' },
];

const useCases = [
  { title: 'Healthcare & Clinical Operations',    desc: 'Manages nursing, clinical, and support staff scheduling across wards, shifts, and specialities — balancing patient demand, skill requirements, and fatigue constraints without manual intervention.' },
  { title: 'Logistics & Distribution',            desc: 'Aligns driver, warehouse, and operational staff scheduling to route demand, delivery windows, and fluctuating throughput volumes — keeping operations running without over-staffing.' },
  { title: 'Retail & Multi-Site',                 desc: 'Coordinates staff across multiple outlets against footfall patterns, promotional events, and seasonal demand — ensuring coverage is right without burning budget on unnecessary hours.' },
  { title: 'Field Services & Engineering',         desc: 'Deploys technicians to jobs based on skill match, location, certification, and workload balance — eliminating the manual coordination that slows down field operations.' },
  { title: 'Facilities & Property Management',    desc: 'Manages cleaning, maintenance, and security rosters across complex building portfolios — maintaining service standards while controlling labour cost and compliance.' },
  { title: 'Hospitality & Events',                desc: 'Scales workforce up and down around events, bookings, and seasonal patterns — ensuring service quality is consistent even when demand is unpredictable.' },
];

const related = [
  { name: 'Lens™',  path: '/lens',  logoFile: 'Lens-logo.svg',  active: true, desc: 'Shift deploys the right person to the right job. Lens verifies they perform it to standard — closing the loop on workforce quality from scheduling to execution.' },
  { name: 'Clara™', path: '/clara', logoFile: 'Clara-logo.svg', active: true, desc: 'Shift manages workforce operations. Clara handles the downstream financial workflows tied to payroll timing, vendor payments, and operational reconciliations.' },
  { name: 'Reven™', path: '/reven', logoFile: 'Reven-logo.svg', active: true, desc: 'Optimise the staffing that drives your revenue. Shift ensures clinical and administrative teams are correctly resourced to maximise throughput and billings.' },
];

const FeaturedScreenshot = ({ item }) => (
  <AnimatedSection yOffset={32} delay={0.05}>
    <div className="shift-featured-wrap">
      <div className="shift-featured-header">
        <span className="shift-feature-num">{item.num}</span>
        <h3 className="shift-featured-title">{item.title}</h3>
      </div>
      <div className="shift-featured-img-wrap">
        <img
          src={item.screenshot}
          alt={item.screenshotAlt}
          className="shift-featured-img"
        />
      </div>
      <p className="shift-featured-desc">{item.desc}</p>
    </div>
  </AnimatedSection>
);

const ScreenshotRow = ({ item, index }) => {
  const isEven = index % 2 === 0;
  return (
    <AnimatedSection yOffset={32} delay={0.05}>
      <div className={`shift-feature-row ${isEven ? 'shift-row-normal' : 'shift-row-reverse'}`}>
        <div className="shift-feature-text">
          <span className="shift-feature-num">{item.num}</span>
          <h3 className="shift-feature-title">{item.title}</h3>
          <p className="shift-feature-desc">{item.desc}</p>
        </div>
        <div className="shift-screenshot-wrap">
          <img
            src={item.screenshot}
            alt={item.screenshotAlt}
            className="shift-screenshot"
            loading="lazy"
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export const Shift = () => {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="pp-breadcrumb" aria-label="Breadcrumb">
        <div className="container pp-breadcrumb-inner">
          <Link to="/">Audela</Link>
          <span className="pp-breadcrumb-sep">/</span>
          <Link to="/#products">Solutions</Link>
          <span className="pp-breadcrumb-sep">/</span>
          <span className="pp-breadcrumb-current">Shift™</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pp-hero shift-hero">
        <HeroGeo />
        <div className="container pp-hero-inner">
          <div className="pp-hero-left">
            <motion.span className="pp-category" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
              Workforce · Operations
            </motion.span>

            <motion.div className="pp-logo" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease }}>
              <img src="/Brand-Assets/Product-Logos/Shift-logo.svg" alt="Shift" />
            </motion.div>

            <motion.p className="pp-hero-desc" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }}>
              Shift is the autonomous workforce intelligence system that aligns demand, supply, and performance in real time — across any industry. It continuously interprets business demand, workforce availability, skills, constraints, and operational priorities to generate smarter schedules, better allocation decisions, and more resilient day-to-day execution.
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

      {/* How It Works — alternating screenshot rows */}
      <section id="how-it-works" className="pp-section pp-section-white shift-features-section">
        <div className="container">
          <AnimatedSection yOffset={24}>
            <div className="pp-section-header">
              <span className="pp-tag">How It Works</span>
              <h2 className="pp-section-title">From Challenge<br /><em>to Outcome.</em></h2>
              <p className="pp-section-sub">How Shift transforms workforce operations — from demand intelligence to live optimisation.</p>
            </div>
          </AnimatedSection>

          <div className="shift-features-list">
            <FeaturedScreenshot item={features[0]} />
            {features.slice(1).map((item, i) => (
              <ScreenshotRow key={item.num} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="pp-section pp-section-alt">
        <div className="container">
          <AnimatedSection yOffset={24}>
            <div className="pp-section-header">
              <span className="pp-tag">Core Capabilities</span>
              <h2 className="pp-section-title">Everything Shift<br /><em>Is Built to Do.</em></h2>
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
              <span className="pp-tag">Business Outcomes</span>
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
              <h2 className="pp-section-title">Shift Across<br /><em>Industries.</em></h2>
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
            <h2 className="pp-cta-title">See Shift™<br /><em>in Action.</em></h2>
            <p className="pp-cta-desc">
              Get a personalised demo configured for your workforce model, industry vertical,
              and operational environment — with a live expert from the Audela team.
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
