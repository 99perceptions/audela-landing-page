import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { Products } from './sections/Products';
import { WhyAudella } from './sections/WhyAudella';
import { Platform } from './sections/Platform';
import { Industries } from './sections/Industries';
import { ContactForm } from './sections/ContactForm';

function App() {
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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Products />
        <WhyAudella />
        <Platform />
        <Industries />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
