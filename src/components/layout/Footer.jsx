import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const activeSolutions = [
  { name: 'Clara™',  path: '/clara' },
  { name: 'Reven™', path: '/reven' },
  { name: 'Lens™',  path: '/lens'  },
  { name: 'Shift™', path: '/shift' },
];

const comingSoonSolutions = ['Veloc™', 'AutoVault™', 'Aisle™', 'Flow™', 'Vigil™', 'Care™'];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img
                src="/Brand-Assets/Audella-ai-logo.svg.svg"
                alt="Audela"
                className="footer-logo"
              />
            </Link>
            <p className="footer-brand-copy">
              Specialized AI solutions for industries where decisions have consequences.
            </p>
            <Link to="/contact" className="footer-demo-btn">Request a Demo →</Link>
          </div>

          {/* Solutions */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Solutions</h4>
            <ul className="footer-list">
              {activeSolutions.map(s => (
                <li key={s.path}>
                  <Link to={s.path} className="footer-link">{s.name}</Link>
                </li>
              ))}
            </ul>
            <p className="footer-soon-label">Coming Soon</p>
            <ul className="footer-list footer-list-soon">
              {comingSoonSolutions.map(name => (
                <li key={name} className="footer-soon-item">{name}</li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Company</h4>
            <ul className="footer-list">
              <li><Link to="/team" className="footer-link">Team</Link></li>
              <li><Link to="/#industries" className="footer-link">Industries</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><span className="footer-link footer-link-muted">Careers</span></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Connect</h4>
            <ul className="footer-list">
              <li><Link to="/contact" className="footer-link">Contact Sales</Link></li>
              <li><Link to="/contact" className="footer-link">Request Demo</Link></li>
              <li><span className="footer-link footer-link-muted">Partner Program</span></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms of Use</Link></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copy">&copy; 2026 Audela. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-bottom-link">Terms of Use</Link>
          </div>
          <p className="footer-tagline">Intelligence That Evolves With You</p>
        </div>
      </div>
    </footer>
  );
};
