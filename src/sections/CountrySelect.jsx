import React, { useEffect, useMemo, useRef, useState } from 'react';

/**
 * Custom country select for react-phone-number-input.
 *
 * Replaces the native <select> dropdown (which can't be styled past the trigger)
 * with a brand-styled popover that supports keyboard search. Plugged in via
 * the library's `countrySelectComponent` prop and given the same props the
 * built-in select would receive: { value, onChange, options, iconComponent }.
 */
export const CountrySelect = ({
  value,
  onChange,
  options,
  iconComponent: FlagIcon,
  disabled,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [highlight, setHighlight] = useState(0);
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const searchRef = useRef(null);

  const validOptions = useMemo(() => options.filter((o) => !o.divider), [options]);
  const selected = validOptions.find((o) => o.value === value);

  const filtered = useMemo(() => {
    if (!query) return validOptions;
    const q = query.toLowerCase();
    return validOptions.filter((o) => (o.label || '').toLowerCase().includes(q));
  }, [validOptions, query]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setHighlight(0);
      // Focus the search input on open
      setTimeout(() => searchRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => {
    if (!open || !listRef.current) return;
    const el = listRef.current.querySelector(`[data-idx="${highlight}"]`);
    if (el) el.scrollIntoView({ block: 'nearest' });
  }, [highlight, open]);

  const choose = (val) => {
    onChange(val);
    setOpen(false);
  };

  const onKeyDown = (e) => {
    if (!open) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const opt = filtered[highlight];
      if (opt) choose(opt.value);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
    }
  };

  return (
    <div className="cc-select" ref={rootRef}>
      <button
        type="button"
        className="cc-select-trigger"
        onClick={() => !disabled && setOpen((v) => !v)}
        onKeyDown={onKeyDown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={selected ? `Country: ${selected.label}` : 'Select country'}
        {...rest}
      >
        {FlagIcon && (
          <span className="cc-select-flag">
            <FlagIcon country={value} label={selected?.label || ''} />
          </span>
        )}
        <svg viewBox="0 0 12 8" className="cc-select-chevron" aria-hidden="true">
          <path d="M1 1.5L6 6L11 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </button>

      {open && (
        <div className="cc-select-panel" role="dialog">
          <div className="cc-select-search-wrap">
            <input
              ref={searchRef}
              type="text"
              className="cc-select-search"
              placeholder="Search country…"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setHighlight(0); }}
              onKeyDown={onKeyDown}
              aria-label="Search countries"
            />
          </div>

          <ul ref={listRef} className="cc-select-list" role="listbox">
            {filtered.length === 0 && (
              <li className="cc-select-empty">No matches</li>
            )}
            {filtered.map((opt, i) => (
              <li
                key={opt.value || 'intl'}
                role="option"
                aria-selected={opt.value === value}
                data-idx={i}
                className={`cc-select-item ${opt.value === value ? 'is-selected' : ''} ${i === highlight ? 'is-highlighted' : ''}`}
                onMouseEnter={() => setHighlight(i)}
                onClick={() => choose(opt.value)}
              >
                {FlagIcon && (
                  <span className="cc-select-item-flag">
                    <FlagIcon country={opt.value} label={opt.label} />
                  </span>
                )}
                <span className="cc-select-item-label">{opt.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
