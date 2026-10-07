import { getCountries } from 'react-phone-number-input';

/**
 * Country list for the phone inputs on every contact form.
 * Business decision (Oct 2026): Israel is not offered.
 */
const EXCLUDED = new Set(['IL']);

export const PHONE_COUNTRIES = getCountries().filter((c) => !EXCLUDED.has(c));
