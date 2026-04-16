import React from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import './Industries.css';

const industriesData = [
  { name: 'Healthcare', desc: 'Remote care & RCM' },
  { name: 'Retail', desc: 'Supermarket & customer service' },
  { name: 'Transport & Fleet', desc: 'Fleet ops & compliance' },
  { name: 'Manufacturing', desc: 'Bottling & production lines' },
  { name: 'Facilities', desc: 'Large-scale service ops' },
  { name: 'Enterprise', desc: 'Cross-functional workforce' },
];

export const Industries = () => {
  return (
    <section id="industries" className="section-padding industries-section">
      <div className="container">
        
        <AnimatedSection yOffset={30}>
          <div className="section-header">
            <div className="tag">Industries</div>
            <h2>Transforming Every Sector<br/><i>We Touch</i></h2>
            <p className="section-subtitle">
              Audella.AI solutions are deployed across high-complexity, high-stakes industries where operational excellence is non-negotiable.
            </p>
          </div>
        </AnimatedSection>

        <div className="ind-grid">
          {industriesData.map((ind, idx) => (
            <AnimatedSection key={idx} delay={0.05 * idx} yOffset={30}>
              <div className="ind-card glass-panel">
                <div className="ind-dot"></div>
                <h4 className="ind-name">{ind.name}</h4>
                <p className="ind-desc">{ind.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
