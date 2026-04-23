import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import './Industries.css';

const industriesData = [
  { name: 'Healthcare', desc: 'Remote care & RCM', img: '/Brand-Assets/Healthcare.jpg' },
  { name: 'Retail', desc: 'Supermarket & customer service', img: '/Brand-Assets/Retail.jpg' },
  { name: 'Transport & Fleet', desc: 'Fleet ops & compliance', img: '/Brand-Assets/transport-and-fleet.jpg' },
  { name: 'Manufacturing', desc: 'Bottling & production lines', img: '/Brand-Assets/manufacturing.jpg' },
  { name: 'Facilities', desc: 'Large-scale service ops', img: '/Brand-Assets/facilities.jpg' },
  { name: 'Enterprise', desc: 'Cross-functional workforce', img: '/Brand-Assets/Enterprise.jpg' },
];

export const Industries = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <section id="industries" className="section-padding industries-section" ref={sectionRef}>

      {/* Parallax background */}
      <motion.div
        className="ind-parallax-bg"
        style={{ y: bgY }}
        aria-hidden="true"
      />
      {/* Overlay to keep text readable */}
      <div className="ind-parallax-overlay" aria-hidden="true" />

      <div className="container ind-content">

        <AnimatedSection yOffset={30}>
          <div className="section-header">
            <div className="tag">Industries</div>
            <h2>Transforming Every Sector<br/><i>We Touch</i></h2>
            <p className="section-subtitle">
              Audela solutions are deployed across high-complexity, high-stakes industries where operational excellence is non-negotiable.
            </p>
          </div>
        </AnimatedSection>

        <div className="ind-grid">
          {industriesData.map((ind, idx) => (
            <AnimatedSection key={idx} delay={0.05 * idx} yOffset={30}>
              <div className="ind-card">
                <div className="ind-img-wrap">
                  <img src={ind.img} alt={ind.name} className="ind-img" loading="lazy" />
                </div>
                <div className="ind-body">
                  <h4 className="ind-name">{ind.name}</h4>
                  <p className="ind-desc">{ind.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
