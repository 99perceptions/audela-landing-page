import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FRENDS_URL, PAGE_PATH } from './frendsContent';
import { FrendsLogo } from './FrendsLogo';
import '../../components/layout/LandingNavbar.css';
import './FrendsNavbar.css';

const links = [
  { hash: '#platform',  label: 'Platform'    },
  { hash: '#segments',  label: "Who it's for" },
  { hash: '#why',       label: 'Why Frends'  },
  { hash: '#services',  label: 'Services'    },
  { hash: '#team',      label: 'Team'        },
];

const scrollToHash = (hash) => {
  const el = document.querySelector(hash);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: 0 });
  else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const scrollToTop = () => {
  if (window.__lenis) {
    window.__lenis.scrollTo(0, { duration: 1.2, force: true });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

/**
 * Navbar for the Frends partner one-pager.
 * Re-uses the visual language of `LandingNavbar` (same CSS) but with its own
 * anchor set, so the main landing page is never touched.
 */
export const FrendsNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onPage = location.pathname === PAGE_PATH;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleClick = (e, hash) => {
    e.preventDefault();
    setMobileOpen(false);
    if (onPage) scrollToHash(hash);
    else navigate(PAGE_PATH + hash);
  };

  const handleLogo = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    if (onPage) scrollToTop();
    else navigate(PAGE_PATH);
  };

  return (
    <>
      <header className={`landing-nav frends-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container landing-nav-inner">
          <a href={PAGE_PATH} className="landing-nav-logo frends-nav-logo" onClick={handleLogo}>
            <img src="/Brand-Assets/Audella-ai-logo.svg.svg" alt="Audelà" />
          </a>

          <ul className="landing-nav-links desktop-only">
            {links.map((l) => (
              <li key={l.hash}>
                <a href={l.hash} onClick={(e) => handleClick(e, l.hash)}>{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="frends-nav-actions desktop-only">
            <a
              href={FRENDS_URL}
              className="frends-nav-external"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Frends — visit frends.com"
            >
              <FrendsLogo className="frends-nav-logo-mark" />
              <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M3 9L9 3M9 3H4.5M9 3v4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn btn-primary landing-nav-cta"
              onClick={(e) => handleClick(e, '#contact')}
            >
              Talk to us
            </a>
          </div>

          <button
            className={`landing-nav-burger ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`landing-nav-mobile ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <ul>
          {links.map((l) => (
            <li key={l.hash}>
              <a href={l.hash} onClick={(e) => handleClick(e, l.hash)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a
              href={FRENDS_URL}
              className="frends-nav-mobile-logo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Frends — visit frends.com"
            >
              <FrendsLogo className="frends-nav-logo-mark" /> ↗
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="btn btn-primary landing-nav-mobile-cta"
              onClick={(e) => handleClick(e, '#contact')}
            >
              Talk to us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
