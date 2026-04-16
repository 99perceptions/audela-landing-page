import React from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import './WhyAudella.css';

export const WhyAudella = () => {
  return (
    <section id="why" className="section-padding why-section">
      <div className="container">
        
        <AnimatedSection yOffset={30}>
          <div className="section-header">
            <div className="tag">Why Audella.AI</div>
            <h2>Built Different.<br/><i>Built for What's Next.</i></h2>
          </div>
        </AnimatedSection>

        <div className="why-grid">
          <AnimatedSection yOffset={40} delay={0.1}>
            <div className="why-card">
              <div className="why-index">01</div>
              <h3 className="why-title">Evolutionary Intelligence</h3>
              <p className="why-desc">Our AI doesn't just automate — it learns. Every solution continuously adapts to new data, new patterns, and new environments. Your operations get smarter every day you use them.</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection yOffset={40} delay={0.2}>
            <div className="why-card">
              <div className="why-index">02</div>
              <h3 className="why-title">Vertical-Deep, Platform-Wide</h3>
              <p className="why-desc">Each product is built with deep industry expertise, yet all nine solutions share a unified AI core and data layer. Cross-domain intelligence that no point solution can match.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection yOffset={40} delay={0.3}>
            <div className="why-card">
              <div className="why-index">03</div>
              <h3 className="why-title">Real-Time, Every Time</h3>
              <p className="why-desc">From fleet assignments to staff deployments to patient monitoring — Audella makes decisions at machine speed. Not batch. Not scheduled. Real-time AI at every touchpoint.</p>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
};
