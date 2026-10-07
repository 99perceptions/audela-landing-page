import React from 'react';
import { motion } from 'framer-motion';
import { useLenis } from '../hooks/useLenis';
import { SEO } from '../components/ui/SEO';
import { CookieConsent } from '../components/ui/CookieConsent';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { LandingFooter } from '../components/layout/LandingFooter';
import { FrendsNavbar } from '../sections/frends/FrendsNavbar';
import { FrendsContactForm } from '../sections/frends/FrendsContactForm';
import {
  PAGE_PATH,
  FRENDS_URL,
  SHOW_REFERENCE_NAMES,
  REFERENCE_NAMES,
  hero,
  stats,
  partnership,
  platform,
  segments,
  why,
  einvoicing,
  services,
  team,
} from '../sections/frends/frendsContent';
import '../sections/Hero.css';
import './Frends.css';

const easeOut = [0.22, 1, 0.36, 1];

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" className="hero-cta-arrow" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const External = () => (
  <svg viewBox="0 0 12 12" fill="none" className="fr-ext-icon" aria-hidden="true">
    <path d="M3 9L9 3M9 3H4.5M9 3v4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Hero ─────────────────────────────────────────────── */
const FrendsHero = () => (
  <section className="fr-hero">
    <div className="fr-hero-bg" aria-hidden="true">
      <video
        autoPlay muted loop playsInline
        className="fr-hero-video"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%23EEF1F2'%3E%3Crect width='100' height='100'/%3E%3C/svg%3E"
      >
        <source src="/Brand-Assets/Video/hero-video-2.mp4" type="video/mp4" />
      </video>
      <div className="fr-hero-overlay" />
    </div>

    <div className="container fr-hero-content">
      <div className="fr-hero-left">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: easeOut }}
        >
          <div className="hero-pulse-dot" />
          <span>{hero.eyebrow}</span>
        </motion.div>

        <motion.h1
          className="fr-hero-headline"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
        >
          {hero.headline[0]}<br />
          <em>{hero.headline[1]}</em>
        </motion.h1>

        <motion.p
          className="fr-hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: easeOut }}
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          className="fr-hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42, ease: easeOut }}
        >
          <a
            href={hero.primaryCta.href}
            className="hero-cta-primary"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector(hero.primaryCta.href);
              if (!el) return;
              if (window.__lenis) window.__lenis.scrollTo(el);
              else el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {hero.primaryCta.label}
            <Arrow />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="hero-cta-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            {hero.secondaryCta.label} <External />
          </a>
        </motion.div>
      </div>

      <motion.dl
        className="fr-stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: easeOut }}
      >
        {stats.map((s) => (
          <div className="fr-stat" key={s.label}>
            <dt className="fr-stat-label">{s.label}</dt>
            <dd className="fr-stat-value">{s.value}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </section>
);

/* ─── Partnership statement (dark band) ───────────────── */
const Partnership = () => (
  <section className="fr-partnership">
    <div className="container">
      <AnimatedSection yOffset={24}>
        <div className="fr-ps-rule" />
        <div className="fr-ps-inner">
          <div className="fr-ps-body">
            <p className="fr-ps-label">{partnership.label}</p>
            <h2 className="fr-ps-headline">
              {partnership.headline[0]}<br />
              <em>{partnership.headline[1]}</em>
            </h2>
          </div>
          <div className="fr-ps-right">
            <p className="fr-ps-description">{partnership.description}</p>
            <div className="fr-ps-roles">
              {partnership.roles.map((r) => (
                <div className="fr-ps-role" key={r.num}>
                  <span className="fr-ps-role-num">{r.num}</span>
                  <span className="fr-ps-role-text">{r.text}</span>
                </div>
              ))}
            </div>
            <a href={FRENDS_URL} className="fr-ps-link" target="_blank" rel="noopener noreferrer">
              Learn more about Frends at frends.com <External />
            </a>
          </div>
        </div>
        <div className="fr-ps-rule" />
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Platform ─────────────────────────────────────────── */
const Platform = () => (
  <section id="platform" className="section-padding fr-platform">
    <div className="container">
      <AnimatedSection yOffset={30}>
        <div className="section-header fr-section-header">
          <div className="tag">{platform.tag}</div>
          <h2>{platform.headline[0]}<br /><i>{platform.headline[1]}</i></h2>
          <p className="section-subtitle">{platform.intro}</p>
        </div>
      </AnimatedSection>

      <div className="fr-pillars">
        {platform.pillars.map((p, i) => (
          <AnimatedSection yOffset={36} delay={0.08 * i} key={p.title}>
            <div className="fr-pillar">
              <span className="fr-pillar-num">0{i + 1}</span>
              <h3 className="fr-pillar-title">{p.title}</h3>
              <p className="fr-pillar-desc">{p.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection yOffset={20} delay={0.25}>
        <div className="fr-deploy">
          <span className="fr-deploy-dot" aria-hidden="true" />
          <p>{platform.deploy}</p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Segments ─────────────────────────────────────────── */
const Segments = () => (
  <section id="segments" className="section-padding fr-segments">
    <div className="container">
      <AnimatedSection yOffset={30}>
        <div className="section-header fr-section-header">
          <div className="tag">{segments.tag}</div>
          <h2>{segments.headline[0]}<br /><i>{segments.headline[1]}</i></h2>
        </div>
      </AnimatedSection>

      <div className="fr-segment-list">
        {segments.items.map((s, i) => (
          <AnimatedSection yOffset={30} delay={0.08 * i} key={s.index}>
            <article className="fr-segment">
              <div className="fr-segment-index">{s.index}</div>
              <div className="fr-segment-body">
                <h3 className="fr-segment-title">{s.title}</h3>
                <p className="fr-segment-desc">{s.desc}</p>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Why Frends ───────────────────────────────────────── */
const Why = () => (
  <section id="why" className="section-padding fr-why">
    <div className="container">
      <AnimatedSection yOffset={30}>
        <div className="section-header fr-section-header">
          <div className="tag">{why.tag}</div>
          <h2>{why.headline[0]}<br /><i>{why.headline[1]}</i></h2>
        </div>
      </AnimatedSection>

      <div className="fr-why-grid">
        {why.items.map((w, i) => (
          <AnimatedSection yOffset={40} delay={0.07 * i} key={w.index}>
            <div className="fr-why-card">
              <div className="fr-why-index">{w.index}</div>
              <h3 className="fr-why-title">{w.title}</h3>
              <p className="fr-why-desc">{w.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── UAE e-Invoicing spotlight ────────────────────────── */
const EInvoicing = () => (
  <section id="einvoicing" className="fr-einv">
    <div className="container">
      <div className="fr-einv-grid">
        <AnimatedSection yOffset={30} className="fr-einv-text">
          <div className="tag fr-tag-on-dark">{einvoicing.tag}</div>
          <h2 className="fr-einv-headline">
            {einvoicing.headline[0]}<br />
            <em>{einvoicing.headline[1]}</em>
          </h2>
          {einvoicing.body.map((p) => (
            <p className="fr-einv-body" key={p}>{p}</p>
          ))}
          {SHOW_REFERENCE_NAMES && (
            <p className="fr-einv-refs">
              Regional references include {REFERENCE_NAMES.join(', ')}.
            </p>
          )}
        </AnimatedSection>

        <AnimatedSection yOffset={30} delay={0.15} className="fr-einv-side">
          <div className="fr-einv-card">
            <p className="fr-einv-card-label">What we deliver</p>
            <ul className="fr-einv-points">
              {einvoicing.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <a
              href={einvoicing.cta.href}
              className="btn btn-primary fr-einv-cta"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector(einvoicing.cta.href);
                if (!el) return;
                if (window.__lenis) window.__lenis.scrollTo(el);
                else el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {einvoicing.cta.label}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* ─── Services ─────────────────────────────────────────── */
const Services = () => (
  <section id="services" className="section-padding fr-services">
    <div className="container">
      <AnimatedSection yOffset={30}>
        <div className="section-header fr-section-header">
          <div className="tag">{services.tag}</div>
          <h2>{services.headline[0]}<br /><i>{services.headline[1]}</i></h2>
        </div>
      </AnimatedSection>

      <div className="fr-services-grid">
        {services.items.map((s, i) => (
          <AnimatedSection yOffset={30} delay={0.07 * i} key={s.title}>
            <div className="fr-service-card">
              <h3 className="fr-service-title">{s.title}</h3>
              <p className="fr-service-desc">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection yOffset={20} delay={0.3}>
        <div className="fr-regions">
          <span className="fr-regions-label">Serving</span>
          <ul className="fr-regions-list">
            {services.regions.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Team ─────────────────────────────────────────────── */
const Team = () => (
  <section id="team" className="section-padding fr-team">
    <div className="container">
      <AnimatedSection yOffset={30}>
        <div className="section-header fr-section-header">
          <div className="tag">{team.tag}</div>
          <h2>{team.headline[0]}<br /><i>{team.headline[1]}</i></h2>
        </div>
      </AnimatedSection>

      <div className="fr-team-grid">
        {team.people.map((p, i) => (
          <AnimatedSection yOffset={28} delay={0.08 * i} key={p.name}>
            <div className="fr-person">
              <div className="fr-person-head">
                <h3 className="fr-person-name">{p.name}</h3>
                {p.linkedin && (
                  <a
                    href={p.linkedin}
                    className="fr-person-li"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} on LinkedIn`}
                  >
                    in
                  </a>
                )}
              </div>
              <p className="fr-person-role">{p.role}</p>
              <p className="fr-person-bio">{p.bio}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Page ─────────────────────────────────────────────── */
export const Frends = () => {
  useLenis();

  return (
    <>
      <SEO
        title="Official Frends Partner for the GCC & Pakistan"
        description="Audelà is the official Frends partner for the GCC and Pakistan — European enterprise integration, business process automation and AI orchestration at a fraction of the cost, live in weeks."
        path={PAGE_PATH}
        robots="index, follow"
      />
      <FrendsNavbar />
      <main className="fr-main">
        <div id="top" />
        <FrendsHero />
        <Partnership />
        <Platform />
        <Segments />
        <Why />
        <EInvoicing />
        <Services />
        <Team />
        <div id="contact"><FrendsContactForm /></div>
        <LandingFooter />
      </main>
      <CookieConsent />
    </>
  );
};
