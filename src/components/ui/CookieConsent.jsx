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
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const save = (consent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
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
          {/* Preferences drawer backdrop */}
          <AnimatePresence>
            {showPrefs && (
              <motion.div
                className="cc-backdrop"
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
                className="cc-prefs-panel"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.4, ease }}
              >
                <div className="cc-prefs-header">
                  <div>
                    <p className="cc-prefs-eyebrow">Cookie Preferences</p>
                    <h3 className="cc-prefs-title">Manage your consent</h3>
                  </div>
                  <button className="cc-prefs-close" onClick={() => setShowPrefs(false)} aria-label="Close">
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>

                <div className="cc-categories">
                  {categories.map(cat => (
                    <div key={cat.key} className="cc-category">
                      <div className="cc-category-info">
                        <span className="cc-category-label">{cat.label}</span>
                        <p className="cc-category-desc">{cat.desc}</p>
                      </div>
                      <button
                        className={`cc-toggle ${prefs[cat.key] ? 'cc-toggle-on' : ''} ${cat.locked ? 'cc-toggle-locked' : ''}`}
                        onClick={() => !cat.locked && toggle(cat.key)}
                        aria-pressed={prefs[cat.key]}
                        aria-label={`Toggle ${cat.label}`}
                        disabled={cat.locked}
                      >
                        <span className="cc-toggle-thumb" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cc-prefs-actions">
                  <button className="cc-btn-primary" onClick={savePrefs}>Save Preferences</button>
                  <button className="cc-btn-ghost" onClick={acceptAll}>Accept All</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main banner */}
          <motion.div
            className="cc-banner"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.5, ease }}
            role="dialog"
            aria-label="Cookie consent"
          >
            {/* Left — copy */}
            <div className="cc-copy">
              <div className="cc-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4"/>
                  <circle cx="8.5" cy="10" r="1.2" fill="currentColor"/>
                  <circle cx="14" cy="8"  r="0.9" fill="currentColor"/>
                  <circle cx="15.5" cy="14" r="1.1" fill="currentColor"/>
                  <circle cx="10" cy="15" r="0.8" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <p className="cc-title">We use cookies</p>
                <p className="cc-desc">
                  We use cookies to improve your experience, analyse site usage, and
                  support our communications. You can manage your preferences at any time.
                </p>
              </div>
            </div>

            {/* Right — actions */}
            <div className="cc-actions">
              <button className="cc-btn-manage" onClick={() => setShowPrefs(true)}>
                Manage Preferences
              </button>
              <button className="cc-btn-reject" onClick={rejectAll}>
                Reject All
              </button>
              <button className="cc-btn-accept" onClick={acceptAll}>
                Accept All
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
