import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

/**
 * Lenis smooth scroll for a standalone one-pager.
 *
 * Mirrors the setup in `pages/Landing.jsx` without touching it: creates a
 * Lenis instance for the lifetime of the page, exposes it on `window.__lenis`
 * (the navbars use that to scroll to anchors), and handles hash / route
 * changes the same way the landing page does.
 */
export const useLenis = () => {
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

    let frame;
    function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
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

  return lenisRef;
};
