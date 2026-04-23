import React from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import './CompanyStatement.css';

export const CompanyStatement = () => {
  return (
    <section className="company-statement-section">
      <div className="container">
        <AnimatedSection yOffset={24}>
          <div className="cs-inner">
            <div className="cs-rule" />
            <div className="cs-body">
              <p className="cs-label">What We Build</p>
              <h2 className="cs-headline">
                Not one product.<br />
                <em>A portfolio of AI built from scratch</em><br />
                for each industry it serves.
              </h2>
            </div>
            <div className="cs-right">
              <p className="cs-description">
                Every Audela solution is purpose-built for a specific vertical —
                not a horizontal tool stretched to fit. We go deep, not wide.
                That is why our results look different.
              </p>
              <div className="cs-pillars">
                <div className="cs-pillar">
                  <span className="cs-pillar-num">01</span>
                  <span className="cs-pillar-text">Industry-native intelligence</span>
                </div>
                <div className="cs-pillar">
                  <span className="cs-pillar-num">02</span>
                  <span className="cs-pillar-text">Real-time AI decisions</span>
                </div>
                <div className="cs-pillar">
                  <span className="cs-pillar-num">03</span>
                  <span className="cs-pillar-text">Enterprise-grade reliability</span>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-rule" />
        </AnimatedSection>
      </div>
    </section>
  );
};
