import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="nav-logo">
              <img src="/Brand-Assets/Audella-ai-logo.svg.svg" alt="Audella.AI Logo" style={{ height: "30px", marginBottom: "1rem" }} />
            </a>
            <p>Continuously bringing AI solutions online for the Age of AI. Evolutionary intelligence for the industries that power the world.</p>
          </div>
          
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="#">ShiftIQ™</a></li>
              <li><a href="#">RevenIQ™</a></li>
              <li><a href="#">VelocIQ™</a></li>
              <li><a href="#">AutoVault™</a></li>
              <li><a href="#">LensIQ™</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Platform</a></li>
              <li><a href="#">Industries</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Contact Sales</a></li>
              <li><a href="#">Partner Program</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Audella.AI. All rights reserved.</p>
          <p className="footer-tagline">Intelligence That Evolves With You</p>
        </div>
      </div>
    </footer>
  );
};
