import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://audela.me';
const DEFAULT_IMAGE = `${BASE_URL}/Brand-Assets/Og-Image/Audela-Og-Image.jpg`;
const SITE_NAME = 'Audelà';

// Default to `noindex, nofollow` — the legacy multi-page site at /full/* is
// not for public consumption right now, and SEO calls there shouldn't have to
// remember to opt out of indexing. Public pages (Landing, etc.) pass
// `robots="index, follow"` explicitly.
export const SEO = ({ title, description, path = '', image = DEFAULT_IMAGE, robots = 'noindex, nofollow' }) => {
  const fullTitle = title ? `${title} — Audelà` : 'Audelà — Specialized AI for Industries Where It Matters Most';
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Audelà — Specialized AI Solutions" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
