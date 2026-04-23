import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export const CountUp = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(value);
  const animationStarted = useRef(false);

  useEffect(() => {
    if (!isInView || animationStarted.current) return;

    // Parse the value to extract numeric parts and suffix
    const parseValue = (val) => {
      // Non-numeric values: return as-is
      if (!/\d/.test(val)) {
        return { isNumeric: false, display: val };
      }

      // Handle range values like "30–50%" or "20–35%"
      if (val.includes('–')) {
        const parts = val.split('–');
        const match1 = parts[0].match(/(\d+(?:\.\d+)?)/);
        const match2 = parts[1].match(/(\d+(?:\.\d+)?)/);
        const suffix = parts[1].replace(/[\d.]/g, '');

        if (match1 && match2) {
          return {
            isNumeric: true,
            isRange: true,
            num1: parseFloat(match1[0]),
            num2: parseFloat(match2[0]),
            suffix,
            decimals: (match1[0].split('.')[1] || '').length,
          };
        }
      }

      // Single numeric value
      const match = val.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
      if (match) {
        const [, prefix, number, suffix] = match;
        const decimals = (number.split('.')[1] || '').length;
        return {
          isNumeric: true,
          isRange: false,
          prefix,
          num: parseFloat(number),
          suffix,
          decimals,
        };
      }

      return { isNumeric: false, display: val };
    };

    const parsed = parseValue(value);

    if (!parsed.isNumeric) {
      setDisplayValue(parsed.display);
      return;
    }

    animationStarted.current = true;
    const duration = 1800; // 1.8 seconds
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);

      let newDisplay;

      if (parsed.isRange) {
        const current1 = Math.round(parsed.num1 * eased * Math.pow(10, parsed.decimals)) / Math.pow(10, parsed.decimals);
        const current2 = Math.round(parsed.num2 * eased * Math.pow(10, parsed.decimals)) / Math.pow(10, parsed.decimals);

        const format = (num) => {
          return parsed.decimals > 0 ? num.toFixed(parsed.decimals) : Math.round(num).toString();
        };

        newDisplay = `${format(current1)}–${format(current2)}${parsed.suffix}`;
      } else {
        const current = parsed.num * eased;
        let display;

        if (parsed.decimals > 0) {
          const factor = Math.pow(10, parsed.decimals);
          display = (Math.round(current * factor) / factor).toFixed(parsed.decimals);
        } else {
          display = Math.round(current).toString();
        }

        newDisplay = `${parsed.prefix}${display}${parsed.suffix}`;
      }

      setDisplayValue(newDisplay);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};
