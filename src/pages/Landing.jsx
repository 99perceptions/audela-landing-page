import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { LandingNavbar } from '../components/layout/LandingNavbar';
import { LandingFooter } from '../components/layout/LandingFooter';
import { SEO } from '../components/ui/SEO';
import { CookieConsent } from '../components/ui/CookieConsent';
import { Hero } from '../sections/Hero';
import { CompanyStatement } from '../sections/CompanyStatement';
import { Products } from '../sections/Products';
import { WhyAudella } from '../sections/WhyAudella';
import { Industries } from '../sections/Industries';
import { TeamSection } from '../sections/TeamSection';
import { ContactForm } from '../sections/ContactForm';
import './Landing.css';

export const Landing = () => {
  const lenisRef = useRef(null);
  const { hash, key } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    lenisRef.current = lenis;
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      if (window.__lenis === lenis) window.__lenis = null;
    };
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      if (hash) {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
        window.scrollTo(0, 0);
      }
    }, 60);
    return () => clearTimeout(id);
  }, [hash, key]);

  return (
    <>
      <SEO
        title="Specialized AI for Industries Where It Matters Most"
        description="Audela builds specialized AI solutions for the industries where decisions have consequences — purpose-built, not adapted from a generic platform."
        path="/"
      />
      <LandingNavbar />
      <main className="landing-main">
        <div id="top" />
        <Hero />
        <CompanyStatement />
        <div id="products"><Products /></div>
        <WhyAudella />
        <div id="industries"><Industries /></div>
        <div id="team"><TeamSection /></div>
        <div id="contact"><ContactForm /></div>

        <LandingFooter />
      </main>
      <CookieConsent />
    </>
  );
};
