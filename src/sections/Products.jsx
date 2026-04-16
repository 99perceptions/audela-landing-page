import React from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import './Products.css';

const productsData = [
  { logoFile: 'Shift-logo.svg', abstractImg: 'shiftiq_bg.png', fullName: 'Smart Workforce Optimizer', desc: "AI-driven staffing, credentials management, dynamic scheduling and swap optimization — reducing labour costs while maximising staff preference fulfilment.", class: "span-2" },
  { logoFile: 'Reven-logo.svg', fullName: 'Intelligent Revenue Cycle Engine', desc: "End-to-end RCM automation with AI-powered fraud, waste & abuse detection, denial reduction and reconciliation.", class: "span-1" },
  { logoFile: 'Veloc-logo.svg', fullName: 'Dynamic Fleet Intelligence Platform', desc: "Real-time fleet assignment to demand zones, credentials-aware driver scheduling and AI-powered geo-routing.", class: "span-1" },
  { logoFile: 'AutoVault-logo.svg', customWidth: '220px', fullName: 'Fleet Lifecycle & Compliance Manager', desc: "Automates permits, vehicle passports, renewals and full maintenance lifecycle management for large fleets.", class: "span-1" },
  { logoFile: 'Lens-logo.svg', abstractImg: 'lensiq_bg.png', fullName: 'HARIS — Smart Field Quality AI', desc: "Smart glasses record field workforce activity. AI scores performance against service standards in real time.", class: "span-2" },
  { logoFile: 'Aisle-logo.svg', fullName: 'Retail Demand Scheduling Engine', desc: "Predicts real-time demand surges in supermarket departments and automatically deploys staff where they're needed.", class: "span-1" },
  { logoFile: 'Flow-logo.svg', fullName: 'Customer Experience Staff Allocator', desc: "Dynamically assigns customer service staff across departments of large facilities in real time, matching demand bursts.", class: "span-1" },
  { logoFile: 'Vigi-logo.svg', fullName: 'Visual Preventive Maintenance AI', desc: "AI-powered visual inspection eliminates unplanned downtime in high-speed bottling lines.", class: "span-1" },
  { logoFile: 'Care-logo.svg', abstractImg: 'careiq_bg.png', fullName: 'Remote Patient Intelligence Platform', desc: "Integrates wearable and non-wearable devices with clinical AI to deliver consistent, scalable home healthcare.", class: "span-2" }
];

export const Products = () => {
  return (
    <section id="products" className="section-padding products-section">
      <div className="container">
        
        <AnimatedSection yOffset={30}>
          <div className="section-header">
            <div className="tag">Product Portfolio</div>
            <h2>Nine Intelligent Solutions.<br/><i>One Unified Platform.</i></h2>
            <p className="section-subtitle">
              Each product is purpose-built for its domain, powered by the same evolutionary AI core.
            </p>
          </div>
        </AnimatedSection>

        <div className="bento-grid">
          {productsData.map((prod, idx) => (
            <AnimatedSection key={idx} delay={0.05 * idx} yOffset={40} className={`bento-item ${prod.class}`}>
              <div className="product-card glass-panel">
                
                {prod.abstractImg && (
                  <div className="product-abstract-wrapper">
                    <img src={`/Brand-Assets/Product-Imgs/${prod.abstractImg}`} alt="" className="product-abstract-img" />
                  </div>
                )}
                
                <div className="product-content-overlay">
                  <div className="product-text-logo-wrapper">
                    <img 
                      src={`/Brand-Assets/Product-Logos/${prod.logoFile}`} 
                      alt={`${prod.logoFile} logo`} 
                      className="product-text-logo-img" 
                      style={prod.customWidth ? { width: prod.customWidth, maxWidth: '100%' } : {}}
                    />
                  </div>
                  <div>
                    <div className="product-full-name">{prod.fullName}</div>
                    <p className="product-desc">{prod.desc}</p>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
