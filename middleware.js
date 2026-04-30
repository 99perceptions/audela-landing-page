/**
 * Vercel Edge Middleware — geo block for France.
 *
 * Goal: keep audelà.me out of French Google search results.
 *
 * How this works (and what it doesn't):
 *   - Google's index is global; there is no toggle that says "index for the
 *     world but hide for France only." The standard pattern is to make the
 *     site genuinely unavailable from French IPs. Once the page is reliably
 *     unavailable to French users, Google will eventually demote/drop it
 *     from google.fr's results because clicking through fails for French
 *     users.
 *   - Vercel injects `x-vercel-ip-country` (ISO-3166 alpha-2) on every
 *     request once the project is deployed. Local `vercel dev` populates
 *     the header too. In `vite dev` (no Vercel runtime) this middleware
 *     does not run, so dev workflows are unaffected.
 *   - We return HTTP 451 (Unavailable For Legal Reasons) with a minimal
 *     HTML body. Both Googlebot and human visitors from FR see the same
 *     response — we don't cloak.
 *   - Static assets (logos, CSS, JS, images, favicon, sitemap, robots) are
 *     allowed through so non-FR pages don't break if someone forwards a
 *     hotlink. The block is page-level only.
 *
 * Limits / caveats:
 *   - This depends on Vercel's geolocation header, which is best-effort
 *     (~99% accuracy). VPN/proxy users from FR may bypass.
 *   - Googlebot crawls primarily from US IPs, so this will NOT prevent
 *     google.com (or google.fr's index from a US crawl) from indexing
 *     the page in the first place. The deindexing happens passively as
 *     French users hit 451s and Google notices.
 *   - If you also want to disappear faster, file a removal in Google
 *     Search Console for the affected URLs after the block is live.
 */

export const config = {
  // Run on every request except static assets (the negative lookahead lets
  // through anything Next/Vite-style serves directly from /assets, /static,
  // /Brand-Assets, plus standard files at the root).
  matcher: [
    '/((?!_next/|assets/|static/|Brand-Assets/|favicon\\.svg|icons\\.svg|robots\\.txt|sitemap\\.xml|.*\\.(?:png|jpe?g|gif|svg|webp|ico|js|css|woff2?|ttf|map)$).*)',
  ],
};

const BLOCKED_COUNTRIES = new Set(['FR']);

const BLOCK_HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex, nofollow">
  <title>Unavailable</title>
  <style>
    body { margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
           background: #ffffff; color: #25272c; font-family: 'Google Sans','Open Sans',sans-serif; padding: 2rem; }
    .wrap { max-width: 480px; text-align: center; }
    h1 { font-family: 'Playfair Display', serif; font-weight: 700; font-size: clamp(1.6rem, 3vw, 2.2rem);
         margin: 0 0 1rem; }
    p { color: #3F4147; line-height: 1.6; margin: 0; font-size: 0.95rem; }
  </style>
</head>
<body>
  <div class="wrap">
    <h1>This site is not currently available in your region.</h1>
    <p>Audelà is unavailable for visitors located in France at this time.</p>
  </div>
</body>
</html>`;

export default function middleware(request) {
  const country =
    request.headers.get('x-vercel-ip-country') ||
    (request.geo && request.geo.country) ||
    '';

  if (BLOCKED_COUNTRIES.has(country)) {
    return new Response(BLOCK_HTML, {
      status: 451,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'x-robots-tag': 'noindex, nofollow',
        'cache-control': 'private, no-store',
      },
    });
  }

  // Otherwise let the request continue to the static/SPA response.
  return undefined;
}
