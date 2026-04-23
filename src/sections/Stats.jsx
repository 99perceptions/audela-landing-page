import React from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import './Stats.css';

export const Stats = () => {
  return (
    <section id="stats" className="stats-section">
      <div className="container">
        <AnimatedSection className="stats-wrapper glass-panel" yOffset={30}>
          <div className="stats-grid">
            <div className="stat">
              <span className="stat-num">10</span>
              <span className="stat-label">AI Solutions</span>
            </div>
            <div className="stat">
              <span className="stat-num">6</span>
              <span className="stat-label">Industry Verticals</span>
            </div>
            <div className="stat">
              <span className="stat-num">40%</span>
              <span className="stat-label">Avg Cost Reduction</span>
            </div>
            <div className="stat">
              <span className="stat-num">99.9%</span>
              <span className="stat-label">System Uptime</span>
            </div>
            <div className="stat">
              <span className="stat-num text-small">Real-time</span>
              <span className="stat-label">AI Decisions</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
