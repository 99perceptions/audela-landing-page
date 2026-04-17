import React from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import './Platform.css';

export const Platform = () => {
  return (
    <section id="platform" className="section-padding platform-section">
      <div className="container">
        <div className="platform-wrap">
          
          <div className="platform-text">
            <AnimatedSection yOffset={20}>
              <div className="tag">The Audella Platform</div>
              <h2 style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                One AI Core.<br/><i>Infinite Possibilities.</i>
              </h2>
              <p className="platform-sub">
                Every Audella product is powered by a shared intelligence layer — real-time data pipelines, ML model orchestration, and an adaptive learning engine.
              </p>
            </AnimatedSection>
            
            <div className="platform-features">
              {[
                { title: 'Adaptive ML Models', desc: "Models retrain continuously on your live data — getting sharper and more accurate over time." },
                { title: 'Real-Time Decision Engine', desc: "Sub-second decisions across all products powered by streaming AI inference." },
                { title: 'Enterprise-Grade Security', desc: "SOC2-ready architecture with end-to-end encryption and full audit trails." },
                { title: 'Open Integration Layer', desc: "REST APIs, webhooks and pre-built connectors for ERP, HR, EHR, SCADA and IoT systems." }
              ].map((feat, i) => (
                <AnimatedSection key={i} delay={0.1 * i} yOffset={20}>
                  <div className="pf">
                    <div className="pf-dot"></div>
                    <div>
                      <div className="pf-title">{feat.title}</div>
                      <div className="pf-desc">{feat.desc}</div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          
          <div className="platform-visual">
            <AnimatedSection delay={0.2} yOffset={40}>
              <div className="pv-card glass-panel">
                <div className="pv-header">
                  <span className="pv-title">Model Performance</span>
                  <span className="pv-badge">Live</span>
                </div>
                
                <div className="pv-stat-row">
                  <div className="pv-meta"><span>Shift — Scheduling Accuracy</span><span>94%</span></div>
                  <div className="pv-bar-wrap"><div className="pv-bar" style={{width: '94%'}}></div></div>
                </div>
                
                <div className="pv-stat-row">
                  <div className="pv-meta"><span>Reven — Denial Reduction</span><span>87%</span></div>
                  <div className="pv-bar-wrap"><div className="pv-bar" style={{width: '87%'}}></div></div>
                </div>
                
                <div className="pv-stat-row">
                  <div className="pv-meta"><span>Vigil — Anomaly Detection</span><span>98%</span></div>
                  <div className="pv-bar-wrap"><div className="pv-bar" style={{width: '98%'}}></div></div>
                </div>
              </div>

              <div className="pv-card glass-panel mt-4">
                <div className="pv-header">
                  <span className="pv-title">Platform Today</span>
                </div>
                <div className="mini-grid">
                  <div className="mini-stat">
                    <span className="mini-num">2.4M</span>
                    <span className="mini-lbl">Decisions/day</span>
                  </div>
                  <div className="mini-stat">
                    <span className="mini-num">0.3s</span>
                    <span className="mini-lbl">Avg latency</span>
                  </div>
                  <div className="mini-stat">
                    <span className="mini-num">99.9%</span>
                    <span className="mini-lbl">Uptime</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
        </div>
      </div>
    </section>
  );
};
