import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LandingNavbar.css';

const links = [
  { hash: '#products',   label: 'Products'   },
  { hash: '#industries', label: 'Industries' },
  { hash: '#team',       label: 'Team'       },
  { hash: '#contact',    label: 'Contact'    },
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
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
};

export const LandingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isLanding = location.pathname === '/';

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
    if (isLanding) {
      scrollToHash(hash);
    } else {
      navigate('/' + hash);
    }
  };

  const handleLogo = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    if (isLanding) {
      scrollToTop();
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <header className={`landing-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container landing-nav-inner">
          <a href="#top" className="landing-nav-logo" onClick={handleLogo}>
            <img src="/Brand-Assets/Audella-ai-logo.svg.svg" alt="Audelà" />
          </a>

          <ul className="landing-nav-links desktop-only">
            {links.map(l => (
              <li key={l.hash}>
                <a href={l.hash} onClick={(e) => handleClick(e, l.hash)}>{l.label}</a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="btn btn-primary landing-nav-cta desktop-only"
            onClick={(e) => handleClick(e, '#contact')}
          >
            Get in touch
          </a>

          <button
            className={`landing-nav-burger ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`landing-nav-mobile ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <ul>
          {links.map(l => (
            <li key={l.hash}>
              <a href={l.hash} onClick={(e) => handleClick(e, l.hash)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn btn-primary landing-nav-mobile-cta"
              onClick={(e) => handleClick(e, '#contact')}
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
