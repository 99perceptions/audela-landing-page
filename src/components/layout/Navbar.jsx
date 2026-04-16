import React, { useEffect, useState } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          {/* Logo on white bg doesn't need invert if the source SVG is dark */}
          <img src="/Brand-Assets/Audella-ai-logo.svg.svg" alt="Audella.AI Logo" className="nav-logo-img" />
        </a>
        
        <div className={`nav-menu-container ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#products" onClick={toggleMenu}>Products</a></li>
            <li><a href="#platform" onClick={toggleMenu}>Platform</a></li>
            <li><a href="#why" onClick={toggleMenu}>Why Audella</a></li>
            <li><a href="#industries" onClick={toggleMenu}>Industries</a></li>
          </ul>
          
          <a href="#cta" className="btn btn-primary nav-cta" onClick={toggleMenu}>
            Request Demo
          </a>
        </div>

        <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </div>
  );
};
