import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const IndustrySVG = ({ type }) => {
  const svgs = {
    healthcare: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3"/>
        <polyline points="4,24 12,24 16,14 20,34 24,20 28,28 32,24 44,24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    logistics: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="24" r="3" fill="currentColor" fillOpacity="0.7"/>
        <circle cx="24" cy="10" r="3" fill="currentColor" fillOpacity="0.7"/>
        <circle cx="40" cy="24" r="3" fill="currentColor" fillOpacity="0.7"/>
        <circle cx="24" cy="38" r="3" fill="currentColor" fillOpacity="0.7"/>
        <circle cx="24" cy="24" r="4" fill="currentColor"/>
        <line x1="11" y1="24" x2="20" y2="24" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="28" y1="24" x2="37" y2="24" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="24" y1="13" x2="24" y2="20" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="24" y1="28" x2="24" y2="35" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
        <line x1="11" y1="22" x2="22" y2="13" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25"/>
        <line x1="26" y1="13" x2="37" y2="22" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25"/>
      </svg>
    ),
    retail: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
        <rect x="19" y="6" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7"/>
        <rect x="32" y="6" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
        <rect x="6" y="19" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7"/>
        <rect x="19" y="19" width="10" height="10" rx="2" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="32" y="19" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7"/>
        <rect x="6" y="32" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
        <rect x="19" y="32" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7"/>
        <rect x="32" y="32" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
      </svg>
    ),
    finance: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="6,38 14,26 22,30 32,14 42,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="26" r="2.5" fill="currentColor" fillOpacity="0.6"/>
        <circle cx="22" cy="30" r="2.5" fill="currentColor" fillOpacity="0.6"/>
        <circle cx="32" cy="14" r="2.5" fill="currentColor" fillOpacity="0.6"/>
        <line x1="6" y1="42" x2="42" y2="42" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3"/>
      </svg>
    ),
    fieldops: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="28" width="8" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
        <rect x="20" y="20" width="8" height="22" rx="1" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7"/>
        <rect x="32" y="10" width="8" height="32" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="6" y1="42" x2="42" y2="42" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3"/>
      </svg>
    ),
    workforce: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="14" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6"/>
        <circle cx="38" cy="34" r="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6"/>
        <path d="M14 42 C14 36 34 36 34 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
        <path d="M4 42 C4 38 16 38 16 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.35"/>
        <path d="M32 42 C32 38 44 38 44 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.35"/>
        <line x1="19" y1="18" x2="13" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
        <line x1="29" y1="18" x2="35" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
      </svg>
    ),
  };
  return svgs[type] || null;
};

const activeSolutions = [
  { name: 'Clara™', path: 'clara', logo: '/Brand-Assets/Product-Logos/Clara-logo.svg', desc: 'Autonomous Finance Operations' },
  { name: 'Reven™', path: 'reven', logo: '/Brand-Assets/Product-Logos/Reven-logo.svg', desc: 'Intelligent Revenue Cycle Engine' },
  { name: 'Lens™', path: 'lens', logo: '/Brand-Assets/Product-Logos/Lens-logo.svg', desc: 'Smart Field Quality AI' },
  { name: 'Shift™', path: 'shift', logo: '/Brand-Assets/Product-Logos/Shift-logo.svg', desc: 'Workforce Intelligence System' },
];

const comingSoonSolutions = [
  { name: 'Veloc™' }, { name: 'AutoVault™' }, { name: 'Aisle™' },
  { name: 'Flow™' }, { name: 'Vigil™' }, { name: 'Care™' },
];

const industries = [
  { key: 'healthcare', label: 'Healthcare',               desc: 'Revenue cycle & workforce AI',        path: 'industries/healthcare' },
  { key: 'finance',    label: 'Finance & Banking',        desc: 'Autonomous finance operations',       path: 'industries/finance' },
  { key: 'logistics',  label: 'Transport & Logistics',    desc: 'Fleet scheduling & field quality',    path: 'industries/transport-logistics' },
  { key: 'retail',     label: 'Retail & Hospitality',     desc: 'Demand scheduling & service quality', path: 'industries/retail' },
  { key: 'fieldops',   label: 'Manufacturing & Field Ops',desc: 'Quality AI for field operations',     path: 'industries/manufacturing' },
  { key: 'workforce',  label: 'Facilities & Workforce',   desc: 'Multi-site workforce management',     path: 'industries/facilities' },
];

export const Navbar = () => {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [activeMenu, setActiveMenu]       = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const closeTimer = useRef(null);
  const location   = useLocation();
  const navigate   = useNavigate();
  const isHome     = location.pathname === '/full' || location.pathname === '/full/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openMenu     = useCallback((m) => { clearTimeout(closeTimer.current); setActiveMenu(m); }, []);
  const scheduleClose = useCallback(() => { closeTimer.current = setTimeout(() => setActiveMenu(null), 140); }, []);
  const cancelClose  = useCallback(() => clearTimeout(closeTimer.current), []);

  const handleSection = (e, hash) => {
    e.preventDefault();
    setMobileOpen(false);
    setActiveMenu(null);
    if (isHome) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/full/' + hash);
    }
  };

  return (
    <>
      {/* ── Full-width top bar ── */}
      <header className={`navbar-bar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner container">
          <Link to="." className="nav-logo">
            <img src="/Brand-Assets/Audella-ai-logo.svg.svg" alt="Audela" className="nav-logo-img" />
          </Link>

          <ul className="nav-links desktop-only" role="menubar">
            <li role="none"><Link to="about"   className="nav-plain">About</Link></li>
            {['solutions', 'industries'].map(menu => (
              <li
                key={menu}
                role="none"
                className={`nav-item-dd ${activeMenu === menu ? 'active' : ''}`}
                onMouseEnter={() => openMenu(menu)}
                onMouseLeave={scheduleClose}
              >
                <button className="nav-btn" role="menuitem" aria-haspopup="true" aria-expanded={activeMenu === menu}>
                  {menu.charAt(0).toUpperCase() + menu.slice(1)}
                  <svg className="nav-chevron" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </li>
            ))}
            <li role="none"><Link to="team"    className="nav-plain">Team</Link></li>
            <li role="none"><Link to="contact" className="nav-plain">Contact</Link></li>
          </ul>

          <Link to="contact" className="btn btn-primary nav-cta desktop-only">Request Demo</Link>

          <button
            className={`hamburger ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className="bar" /><span className="bar" /><span className="bar" />
          </button>
        </div>
      </header>

      {/* ── Mega menu: Solutions ── */}
      <div
        className={`mega-panel ${activeMenu === 'solutions' ? 'open' : ''}`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        role="region"
        aria-label="Solutions menu"
      >
        <div className="container mega-grid">
          <div className="mega-col mega-col-active">
            <p className="mega-eyebrow">Active Solutions</p>
            <div className="mega-solutions-grid">
              {activeSolutions.map(s => (
                <Link key={s.path} to={s.path} className="mega-sol-card" onClick={() => setActiveMenu(null)}>
                  <div className="mega-sol-logo">
                    <img src={s.logo} alt={s.name} />
                  </div>
                  <span className="mega-sol-desc">{s.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mega-divider" />

          <div className="mega-col mega-col-soon">
            <p className="mega-eyebrow">Coming Soon</p>
            <ul className="mega-soon-list">
              {comingSoonSolutions.map(s => (
                <li key={s.name} className="mega-soon-item">{s.name}</li>
              ))}
            </ul>
            <a href="#products" className="mega-see-all" onClick={e => handleSection(e, '#products')}>
              View all solutions →
            </a>
          </div>
        </div>
      </div>

      {/* ── Mega menu: Industries ── */}
      <div
        className={`mega-panel ${activeMenu === 'industries' ? 'open' : ''}`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        role="region"
        aria-label="Industries menu"
      >
        <div className="container mega-grid mega-grid-ind">
          <div className="mega-col mega-col-full">
            <p className="mega-eyebrow">Industries We Serve</p>
            <div className="mega-ind-grid">
              {industries.map(ind => (
                <Link
                  key={ind.key}
                  to={ind.path}
                  className="mega-ind-card"
                  onClick={() => setActiveMenu(null)}
                >
                  <div className="mega-ind-icon"><IndustrySVG type={ind.key} /></div>
                  <span className="mega-ind-name">{ind.label}</span>
                  <span className="mega-ind-desc">{ind.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Invisible backdrop to close menus */}
      {activeMenu && <div className="mega-backdrop" onClick={() => setActiveMenu(null)} onMouseEnter={() => setActiveMenu(null)} />}

      {/* ── Mobile menu ── */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="mobile-inner">

          <div className="mob-section mob-plain-links">
            <Link to="about"   className="mob-plain" onClick={() => setMobileOpen(false)}>About</Link>
          </div>

          {['solutions', 'industries'].map(menu => (
            <div key={menu} className="mob-section">
              <button
                className={`mob-acc-btn ${mobileAccordion === menu ? 'open' : ''}`}
                onClick={() => setMobileAccordion(p => p === menu ? null : menu)}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
                <svg viewBox="0 0 12 12" fill="none" className="mob-chevron" aria-hidden="true">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {mobileAccordion === 'solutions' && menu === 'solutions' && (
                <div className="mob-acc-body">
                  <p className="mob-label">Active</p>
                  {activeSolutions.map(s => (
                    <Link key={s.path} to={s.path} className="mob-sol-row" onClick={() => setMobileOpen(false)}>
                      <img src={s.logo} alt={s.name} className="mob-sol-logo" />
                      <span className="mob-sol-desc">{s.desc}</span>
                    </Link>
                  ))}
                  <p className="mob-label" style={{ marginTop: '1.25rem' }}>Coming Soon</p>
                  <div className="mob-soon-wrap">
                    {comingSoonSolutions.map(s => <span key={s.name} className="mob-soon-pill">{s.name}</span>)}
                  </div>
                </div>
              )}

              {mobileAccordion === 'industries' && menu === 'industries' && (
                <div className="mob-acc-body">
                  <div className="mob-ind-grid">
                    {industries.map(ind => (
                      <Link key={ind.key} to={ind.path} className="mob-ind-card"
                        onClick={() => setMobileOpen(false)}>
                        <div className="mob-ind-icon"><IndustrySVG type={ind.key} /></div>
                        <span className="mob-ind-name">{ind.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="mob-section mob-plain-links">
            <Link to="team"    className="mob-plain" onClick={() => setMobileOpen(false)}>Team</Link>
            <Link to="contact" className="mob-plain" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>

          <Link to="contact" className="btn btn-primary mob-cta" onClick={() => setMobileOpen(false)}>
            Request Demo
          </Link>
        </div>
      </div>
    </>
  );
};
