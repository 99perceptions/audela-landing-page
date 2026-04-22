import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import './Products.css';

const featured = [
  {
    path: '/clara',
    logoFile: 'Clara-logo.svg',
    category: 'Finance · Operations',
    desc: 'End-to-end AI automation of AP, AR, reconciliation and financial close. Faster cycles, fewer errors, zero manual bottlenecks.',
    span: 'wide',
  },
  {
    path: '/reven',
    logoFile: 'Reven-logo.svg',
    category: 'Healthcare · Finance',
    desc: 'AI-powered claim submission, denial management, fraud detection and full revenue cycle reconciliation.',
    span: 'narrow',
  },
  {
    path: '/lens',
    logoFile: 'Lens-logo.svg',
    abstractImg: 'lensiq_bg.png',
    category: 'Workforce · Quality',
    desc: 'Smart glasses capture field workforce activity. AI scores performance against service standards in real time.',
    span: 'narrow',
  },
  {
    path: '/shift',
    logoFile: 'Shift-logo.svg',
    abstractImg: 'shiftiq_bg.png',
    category: 'Workforce · Operations',
    desc: 'Demand-aware scheduling, dynamic workforce optimization and constraint-aware planning — built for any industry.',
    span: 'wide',
  },
];

const comingSoon = [
  { logoFile: 'Veloc-logo.svg',    name: 'Veloc™',     desc: 'Dynamic Fleet Intelligence' },
  { logoFile: 'AutoVault-logo.svg', name: 'AutoVault™', desc: 'Fleet Lifecycle & Compliance' },
  { logoFile: 'Aisle-logo.svg',    name: 'Aisle™',     desc: 'Retail Demand Scheduling' },
  { logoFile: 'Flow-logo.svg',     name: 'Flow™',       desc: 'CX Staff Allocator' },
  { logoFile: 'Vigi-logo.svg',     name: 'Vigil™',     desc: 'Visual Maintenance AI' },
  { logoFile: 'Care-logo.svg',     name: 'Care™',       desc: 'Remote Patient Intelligence' },
];

export const Products = () => {
  return (
    <section id="products" className="section-padding products-section">
      <div className="container">

        <AnimatedSection yOffset={30}>
          <div className="section-header">
            <div className="tag">Solutions</div>
            <h2>Purpose-built AI.<br /><i>For Every Industry We Serve.</i></h2>
            <p className="section-subtitle">
              Four active solutions, each built from the ground up for its domain.
              More in the pipeline.
            </p>
          </div>
        </AnimatedSection>

        {/* ── Tier 1: Featured bento ── */}
        <div className="feat-bento">
          {featured.map((p, i) => (
            <AnimatedSection
              key={p.path}
              delay={0.07 * i}
              yOffset={36}
              className={`feat-item feat-${p.span}`}
            >
              <Link to={p.path} className="feat-card">
                {p.abstractImg && (
                  <div className="feat-abstract">
                    <img
                      src={`/Brand-Assets/Product-Imgs/${p.abstractImg}`}
                      alt=""
                      aria-hidden="true"
                    />
                  </div>
                )}

                <div className="feat-body">
                  <div className="feat-top">
                    <span className="feat-category">{p.category}</span>
                    <div className="feat-logo">
                      <img
                        src={`/Brand-Assets/Product-Logos/${p.logoFile}`}
                        alt={p.logoFile.replace('-logo.svg', '')}
                      />
                    </div>
                    <p className="feat-desc">{p.desc}</p>
                  </div>

                  <div className="feat-cta">
                    <span className="feat-cta-text">Learn More</span>
                    <svg viewBox="0 0 16 16" fill="none" className="feat-cta-arrow" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Tier 2: Coming soon ── */}
        <AnimatedSection yOffset={24} delay={0.1}>
          <div className="soon-header">
            <div className="soon-rule" />
            <span className="soon-label">More solutions in the pipeline</span>
            <div className="soon-rule" />
          </div>
        </AnimatedSection>

        <div className="soon-grid">
          {comingSoon.map((p, i) => (
            <AnimatedSection key={p.name} delay={0.05 * i} yOffset={20}>
              <div className="soon-card">
                <div className="soon-logo">
                  <img
                    src={`/Brand-Assets/Product-Logos/${p.logoFile}`}
                    alt={p.name}
                  />
                </div>
                <p className="soon-desc">{p.desc}</p>
                <span className="soon-pill">Coming Soon</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
