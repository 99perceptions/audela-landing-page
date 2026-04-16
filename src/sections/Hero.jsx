import React from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import './Hero.css';

export const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-video-wrapper">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%23EEF1F2'%3E%3Crect width='100' height='100'/%3E%3C/svg%3E"
        >
          {/* Using the explicit video provided tightly integrated into the brand assets */}
          <source src="/Brand-Assets/Video/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <AnimatedSection yOffset={40}>
          <div className="hero-eyebrow">
            <div className="hero-pulse-dot"></div>
            <span>The Age of AI Starts Here</span>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.15} yOffset={50}>
          <h1>
            Intelligence<br/>
            <i>That Evolves</i><br/>
            With You
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3} yOffset={30}>
          <p className="hero-subtitle">
            Audella.AI delivers cutting-edge AI solutions that transform how industries operate — from workforce and fleet to healthcare and revenue. Built for the Age of AI.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.45} yOffset={30}>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">Explore Solutions</a>
            <a href="#cta" className="btn btn-secondary">Request a Demo</a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
