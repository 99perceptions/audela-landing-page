import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CookieConsent.css';

const STORAGE_KEY = 'audela_cookie_consent';

const defaultPrefs = {
  essential: true,
  analytics: false,
  marketing: false,
};

const categories = [
  {
    key: 'essential',
    label: 'Essential',
    desc: 'Required for the site to function. Cannot be disabled.',
    locked: true,
  },
  {
    key: 'analytics',
    label: 'Analytics',
    desc: 'Help us understand how visitors interact with the site so we can improve it.',
    locked: false,
  },
  {
    key: 'marketing',
    label: 'Marketing',
    desc: 'Used to deliver relevant content and measure the effectiveness of our communications.',
    locked: false,
  },
];

const ease = [0.22, 1, 0.36, 1];

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState(defaultPrefs);

  useEffect(() => {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (_) {}
    if (!saved) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const save = (consent) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(consent)); } catch (_) {}
    setVisible(false);
    setShowPrefs(false);
  };

  const acceptAll = () => save({ essential: true, analytics: true, marketing: true });
  const rejectAll = () => save({ essential: true, analytics: false, marketing: false });
  const savePrefs  = () => save(prefs);

  const toggle = (key) => {
    setPrefs(p => ({ ...p, [key]: !p[key] }));
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Main banner backdrop */}
          <motion.div
            className="aud-cp-veil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Preferences drawer backdrop */}
          <AnimatePresence>
            {showPrefs && (
              <motion.div
                className="aud-cp-shade"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowPrefs(false)}
              />
            )}
          </AnimatePresence>

          {/* Preferences panel */}
          <AnimatePresence>
            {showPrefs && (
              <motion.div
                className="aud-cp-drawer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.4, ease }}
              >
                <div className="aud-cp-drawer-head">
                  <div>
                    <p className="aud-cp-eyebrow">Cookie Preferences</p>
                    <h3 className="aud-cp-drawer-title">Manage your consent</h3>
                  </div>
                  <button className="aud-cp-drawer-close" onClick={() => setShowPrefs(false)} aria-label="Close">
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>

                <div className="aud-cp-categories">
                  {categories.map(cat => (
                    <div key={cat.key} className="aud-cp-item">
                      <div className="aud-cp-item-info">
                        <span className="aud-cp-item-label">{cat.label}</span>
                        <p className="aud-cp-item-desc">{cat.desc}</p>
                      </div>
                      <button
                        className={`aud-cp-switch ${prefs[cat.key] ? 'aud-cp-switch-on' : ''} ${cat.locked ? 'aud-cp-switch-locked' : ''}`}
                        onClick={() => !cat.locked && toggle(cat.key)}
                        aria-pressed={prefs[cat.key]}
                        aria-label={`Toggle ${cat.label}`}
                        disabled={cat.locked}
                      >
                        <span className="aud-cp-switch-knob" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="aud-cp-drawer-actions">
                  <button className="aud-cp-save" onClick={savePrefs}>Save Preferences</button>
                  <button className="aud-cp-accept-drawer" onClick={acceptAll}>Accept All</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main banner */}
          <motion.div
            className="aud-cp-bar"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.5, ease }}
            role="dialog"
            aria-label="Cookie consent"
          >
            {/* Left — copy */}
            <div className="aud-cp-copy">
              <div className="aud-cp-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4"/>
                  <circle cx="8.5" cy="10" r="1.2" fill="currentColor"/>
                  <circle cx="14" cy="8"  r="0.9" fill="currentColor"/>
                  <circle cx="15.5" cy="14" r="1.1" fill="currentColor"/>
                  <circle cx="10" cy="15" r="0.8" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <p className="aud-cp-title">We use cookies</p>
                <p className="aud-cp-desc">
                  We use cookies to improve your experience, analyse site usage, and
                  support our communications. You can manage your preferences at any time.
                </p>
              </div>
            </div>

            {/* Right — actions */}
            <div className="aud-cp-actions">
              <button className="aud-cp-manage" onClick={() => setShowPrefs(true)}>
                Manage Preferences
              </button>
              <button className="aud-cp-reject" onClick={rejectAll}>
                Reject All
              </button>
              <button className="aud-cp-accept" onClick={acceptAll}>
                Accept All
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
