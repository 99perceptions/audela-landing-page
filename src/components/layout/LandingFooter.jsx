import React from 'react';
import { Link } from 'react-router-dom';
import './LandingFooter.css';

export const LandingFooter = () => (
  <footer className="landing-footer">
    <div className="container landing-footer-inner">
      <p className="landing-footer-copy">&copy; 2026 Audela. All rights reserved.</p>
      <div className="landing-footer-links">
        <Link to="/privacy" className="landing-footer-link">Privacy Policy</Link>
        <Link to="/terms" className="landing-footer-link">Terms of Use</Link>
      </div>
      <p className="landing-footer-tagline">Intelligence That Evolves With You</p>
    </div>
  </footer>
);
