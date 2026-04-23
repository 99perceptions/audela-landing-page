import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const activeSolutions = [
  { name: 'Clara™',  path: '/clara' },
  { name: 'Reven™', path: '/reven' },
  { name: 'Lens™',  path: '/lens'  },
  { name: 'Shift™', path: '/shift' },
];

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
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Company</h4>
            <ul className="footer-list">
              <li><Link to="/team" className="footer-link">Team</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Industries</h4>
            <ul className="footer-list">
              <li><Link to="/industries/healthcare" className="footer-link">Healthcare</Link></li>
              <li><Link to="/industries/finance" className="footer-link">Finance & Banking</Link></li>
              <li><Link to="/industries/transport-logistics" className="footer-link">Transport & Logistics</Link></li>
              <li><Link to="/industries/retail" className="footer-link">Retail & Hospitality</Link></li>
              <li><Link to="/industries/manufacturing" className="footer-link">Manufacturing & Field Ops</Link></li>
              <li><Link to="/industries/facilities" className="footer-link">Facilities & Workforce</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Connect</h4>
            <ul className="footer-list">
              <li><Link to="/contact" className="footer-link">Contact Sales</Link></li>
              <li><Link to="/contact" className="footer-link">Request Demo</Link></li>
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
