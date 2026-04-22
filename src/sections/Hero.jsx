import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

const GeometricTexture = () => (
  <svg className="hero-geo-texture" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="geo-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        {/* Octagonal Islamic-geometry-inspired mesh */}
        <polygon points="20,0 60,0 80,20 80,60 60,80 20,80 0,60 0,20" fill="none" stroke="currentColor" strokeWidth="0.6"/>
        <line x1="20" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="60" y1="0" x2="80" y2="20" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="80" y1="60" x2="60" y2="80" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="0" y1="60" x2="20" y2="80" stroke="currentColor" strokeWidth="0.4"/>
        <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <line x1="40" y1="32" x2="40" y2="20" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="40" y1="48" x2="40" y2="60" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="32" y1="40" x2="20" y2="40" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="48" y1="40" x2="60" y2="40" stroke="currentColor" strokeWidth="0.4"/>
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#geo-pattern)"/>
  </svg>
);

const easeOut = [0.22, 1, 0.36, 1];

export const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-video-wrapper">
        <video
          autoPlay muted loop playsInline
          className="hero-video"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%23EEF1F2'%3E%3Crect width='100' height='100'/%3E%3C/svg%3E"
        >
          <source src="/Brand-Assets/Video/hero-video-2.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <GeometricTexture />

      <div className="container hero-content">
        <div className="hero-left">
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <div className="hero-pulse-dot" />
            <span>Audela — Specialized AI</span>
          </motion.div>

          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: easeOut }}
          >
            Built for<br />
            Industries<br />
            <em>Where It<br />Matters Most.</em>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: easeOut }}
          >
            Audela builds specialized AI solutions for the industries where decisions
            have consequences — each one purpose-built, not adapted from a generic platform.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: easeOut }}
          >
            <a href="#products" className="hero-cta-primary">
              Explore Solutions
              <svg viewBox="0 0 16 16" fill="none" className="hero-cta-arrow">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <Link to="/contact" className="hero-cta-ghost">Request a Demo</Link>
          </motion.div>

          <motion.div
            className="hero-scroll-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <div className="hero-scroll-line" />
            <span>Scroll to explore</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
