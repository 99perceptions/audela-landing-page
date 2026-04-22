import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import './About.css';

const ease = [0.22, 1, 0.36, 1];

const HeroGeo = () => (
  <svg className="about-hero-geo" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="about-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <rect x="10" y="10" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 40 40)"/>
        <rect x="22" y="22" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="0.3" transform="rotate(45 40 40)"/>
        <circle cx="40" cy="40" r="4" fill="none" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="40" y1="10" x2="40" y2="70" stroke="currentColor" strokeWidth="0.2"/>
        <line x1="10" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="0.2"/>
      </pattern>
    </defs>
    <rect width="500" height="300" fill="url(#about-geo)"/>
  </svg>
);

const pillars = [
  {
    num: '01',
    title: 'Vertical-Deep Intelligence',
    desc: 'Every Audela solution is purpose-built for its industry — not a horizontal tool stretched to fit. We go deep into the operational logic, constraints, and data patterns of each vertical. That depth is what makes our results look different.',
  },
  {
    num: '02',
    title: 'Real-Time, Not Batch',
    desc: 'From workforce scheduling to revenue cycle decisions to field quality scoring — Audela acts at machine speed. No nightly jobs. No manual triggers. Decisions made continuously as conditions change.',
  },
  {
    num: '03',
    title: 'Consequences-Aware AI',
    desc: 'We build for industries where a wrong decision has a real cost — a missed shift, an unpaid claim, a failed compliance check. Our systems are calibrated for high-stakes environments, not optimised for demo performance.',
  },
];

const milestones = [
  { year: '2022', event: 'Audela founded with a singular thesis: AI must be built for specific industries, not adapted from generic platforms.' },
  { year: '2023', event: 'Clara™ and Shift™ enter pilot deployment across healthcare and facilities operations in the Gulf region.' },
  { year: '2024', event: 'Reven™ launched for Revenue Cycle Management. Lens™ developed in partnership with field services operators. Advisory board formed.' },
  { year: '2025', event: 'Full portfolio of four active solutions live across healthcare, retail, logistics, and enterprise workforce operations.' },
  { year: '2026', event: 'Expansion pipeline: Veloc™, AutoVault™, Aisle™, Flow™, Vigil™, and Care™ in active development.' },
];

const values = [
  {
    title: 'Depth Over Breadth',
    desc: 'We would rather solve one problem completely than many problems superficially. Every product we build is the result of going further into a domain than any horizontal vendor ever will.',
  },
  {
    title: 'Specificity as Strategy',
    desc: 'Generic AI is abundant. Specific AI — trained on the right data, constrained by real operational logic, and measured against real outcomes — is rare. That specificity is Audela\'s competitive advantage.',
  },
  {
    title: 'Operational Trust',
    desc: 'The industries we serve cannot afford AI that surprises them. Every system we ship is built to be predictable, auditable, and trustworthy under pressure — not just impressive in a boardroom.',
  },
  {
    title: 'Continuous Evolution',
    desc: 'Our systems learn. Not as a feature — as a design requirement. Every deployment improves over time as it ingests operational feedback, new demand signals, and outcome data.',
  },
];

export const About = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress: tlScroll } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start'],
  });
  const tlBgY = useTransform(tlScroll, [0, 1], ['0%', '25%']);

  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <HeroGeo />
        <div className="container about-hero-inner">
          <motion.span className="about-hero-tag" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            About Audela
          </motion.span>
          <motion.h1 className="about-hero-headline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1, ease }}>
            Built for Industries<br />
            <em>Where Decisions<br />Have Consequences.</em>
          </motion.h1>
          <motion.p className="about-hero-desc" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22, ease }}>
            Audela is a portfolio of specialized AI solutions — each built from scratch
            for a specific operational vertical. Not one platform. Not one product.
            A company that goes deep where others go wide.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission-section">
        <div className="container about-mission-inner">
          <AnimatedSection yOffset={24}>
            <div className="about-mission-text">
              <span className="about-tag">Our Mission</span>
              <h2 className="about-mission-headline">
                Make specialized AI<br />
                <em>the operational standard</em><br />
                in every industry we touch.
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection yOffset={24} delay={0.1}>
            <div className="about-mission-body">
              <p>
                The AI industry has spent a decade building horizontal tools — systems
                that claim to work everywhere but are truly optimised for nowhere. The
                result is a generation of deployments that underperform, require
                excessive customisation, and fail to earn the trust of operational teams.
              </p>
              <p>
                Audela was founded on a different conviction: that the right answer is
                not a smarter general-purpose model, but a purpose-built system that
                understands the specific logic, constraints, and failure modes of a single
                vertical. That is harder to build. It takes longer. It requires real
                industry expertise, not just engineering talent.
              </p>
              <p>
                That difficulty is the point. It is why our results look different.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars */}
      <section className="about-pillars-section">
        <div className="container">
          <AnimatedSection yOffset={24}>
            <div className="about-section-header">
              <span className="about-tag">How We Think</span>
              <h2 className="about-section-title">Three Principles<br /><em>Behind Every Solution.</em></h2>
            </div>
          </AnimatedSection>
          <div className="about-pillars-grid">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.num} yOffset={32} delay={0.08 * i}>
                <div className="about-pillar-card">
                  <span className="about-pillar-num">{p.num}</span>
                  <h3 className="about-pillar-title">{p.title}</h3>
                  <p className="about-pillar-desc">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline-section" ref={timelineRef}>
        <motion.div className="about-timeline-parallax-bg" style={{ y: tlBgY }} aria-hidden="true" />
        <div className="about-timeline-overlay" aria-hidden="true" />
        <div className="container about-timeline-content">
          <AnimatedSection yOffset={24}>
            <span className="about-tag">Our Journey</span>
            <p className="about-timeline-statement">
              From a singular conviction — that AI must be built for specific industries,
              not stretched from generic platforms — Audela has grown into a portfolio
              of four live solutions, deployed across healthcare, finance, field services,
              and workforce operations. The work continues.
            </p>
          </AnimatedSection>

          <div className="about-timeline-rule" />

          <div className="about-timeline">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} yOffset={20} delay={0.07 * i}>
                <div className="about-timeline-row">
                  <span className="about-timeline-year">{m.year}</span>
                  <p className="about-timeline-event">{m.event}</p>
                </div>
                <div className="about-timeline-rule" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values-section">
        <div className="container">
          <AnimatedSection yOffset={24}>
            <div className="about-section-header">
              <span className="about-tag">What We Stand For</span>
              <h2 className="about-section-title">The Values That<br /><em>Shape Our Work.</em></h2>
            </div>
          </AnimatedSection>
          <div className="about-values-grid">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} yOffset={28} delay={0.07 * i}>
                <div className="about-value-card">
                  <h3 className="about-value-title">{v.title}</h3>
                  <p className="about-value-desc">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions strip */}
      <section className="about-solutions-section">
        <div className="container">
          <AnimatedSection yOffset={24}>
            <div className="about-solutions-inner">
              <div className="about-solutions-text">
                <span className="about-tag-light">Active Solutions</span>
                <h2 className="about-solutions-headline">
                  Four solutions live.<br /><em>Six in development.</em>
                </h2>
                <p className="about-solutions-desc">
                  Clara™, Reven™, Lens™, and Shift™ are deployed across healthcare,
                  finance, field services, and workforce operations. Veloc™, AutoVault™,
                  Aisle™, Flow™, Vigil™, and Care™ are on the horizon.
                </p>
                <div className="about-solutions-actions">
                  <Link to="/#products" className="about-btn-primary">Explore Solutions</Link>
                  <Link to="/team" className="about-btn-ghost">Meet the Team →</Link>
                </div>
              </div>
              <div className="about-solutions-logos">
                {['Clara', 'Reven', 'Lens', 'Shift'].map(name => (
                  <Link key={name} to={`/${name.toLowerCase()}`} className="about-sol-logo-wrap">
                    <img
                      src={`/Brand-Assets/Product-Logos/${name}-logo.svg`}
                      alt={`${name}™`}
                      className="about-sol-logo"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="container about-cta-inner">
          <AnimatedSection yOffset={24}>
            <h2 className="about-cta-headline">
              Ready to see what<br /><em>purpose-built AI looks like?</em>
            </h2>
            <p className="about-cta-desc">
              Talk to our team about your operations. We'll show you the solution
              built specifically for your industry — not a demo adapted from someone else's.
            </p>
            <div className="about-cta-actions">
              <Link to="/contact" className="about-btn-primary">Request a Demo</Link>
              <Link to="/contact" className="about-btn-ghost-light">Contact Us →</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};
