# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Audela is a B2B SaaS marketing site for a company offering AI-powered products (Clara, Reven, Lens, Shift). React 19 + Vite 8, with per-product and per-industry pages, smooth scroll, and per-page SEO.

## Commands

Run from the **repository root** (where `package.json` lives — not from `website/`).

- `npm run dev` — Vite dev server on http://localhost:5173 (auto-opens browser per `vite.config.js`)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the built bundle
- `npm run lint` — ESLint over the repo (no test runner is configured)

## Repository Layout — important gotcha

Two parallel trees exist:

- **Root** (`/src`, `/public`, `/package.json`, `/index.html`) — the actual development tree. All `npm` commands and edits go here.
- **`website/`** — a separate copy/submodule that mirrors the project. Per `BUILD-PATTERNS.md`, the GitHub repo `99perceptions/audela-landing-page` is wired so Vercel watches the `website/` folder. Recent commits (e.g. "update: website submodule with email change") show the workflow is: change root, then sync `website/`. Don't make edits only in `website/` — root is the source of truth, and divergence between the two has caused deploy/content mismatches.

Other top-level dirs:
- `Brand-Assets/` — versioned brand PDFs/logos
- `builds/v1-v5/` — archived prior builds (read-only history)
- `plans/` — planning docs

## Architecture

### Routing (`src/App.jsx`)
Single `createBrowserRouter` with everything nested under `<Layout />` (Navbar + Footer + CookieConsent). Routes:
- `/` Home, `/clara`, `/reven`, `/lens`, `/shift` product pages
- `/team`, `/about`, `/contact`, `/privacy`, `/terms`
- `/industries/{healthcare,finance,transport-logistics,retail,manufacturing,facilities}` — industry pages live under `src/pages/industries/`

`vercel.json` rewrites all paths to `/index.html` for client-side routing.

### Component layers
- `src/pages/` — route components, compose sections
- `src/sections/` — page-area components (`Hero`, `Products`, `Industries`, `Stats`, `Platform`, `CompanyStatement`, `ContactForm`, `WhyAudella`); product pages share `ProductPage.css`
- `src/components/layout/` — `Layout`, `Navbar`, `Footer`
- `src/components/ui/` — `AnimatedSection`, `SEO`, `CookieConsent`
- Each component co-locates its CSS file (`Foo.jsx` + `Foo.css`)

### Styling system
- `src/variables.css` is the design system source of truth: color tokens (`--text-primary`, `--bg-primary`, `--accent-color`), fluid typography via `clamp()`, fluid spacing (`--padding-section`, `--padding-card`, `--gap-grid`), and the **CSS rules required for Lenis smooth scroll** — don't remove those.
- `src/index.css` defines global utility classes: `.container`, `.section-padding`, `.btn`, `.btn-primary`, `.btn-secondary`, `.tag`, `.glass-panel`
- Fonts: Playfair Display (headings), Google Sans (body)
- No Tailwind/CSS-in-JS despite `tailwind-merge` and `clsx` being in `package.json`

### Animation
Framer Motion for component animations; Lenis for global smooth scroll (initialized in code; CSS in `variables.css` is required for it to function).

### SEO
`react-helmet-async` is wired through `Layout.jsx`. Use the `<SEO />` component (`src/components/ui/SEO.jsx`) on every page — product, industry, and legal pages each need their own title/description/OG tags.

## Conventions from BUILD-PATTERNS.md

- **Favicon cache-busting**: when changing `favicon.svg`, bump the version query in `index.html` (`/favicon.svg?v=N`). Product favicon SVGs use brand color `#25272C` on paths.
- **Mobile overflow**: flex children holding text need `min-width: 0` to prevent horizontal overflow; the global `overflow-wrap: break-word` rule must include `div`, `span`, `li`, `a`.
- **Floating navbar collisions**: mobile sections need ~`6rem` `padding-top`; section anchors need `scroll-margin-top` so deep links don't hide under the pill nav.
- **Mobile grids**: collapse to single column below ~600px (stats, bento) to avoid clipping.
- **Product naming sync**: Footer product names, `Products.jsx`, and logo files must agree (e.g., Shift™, Aisle™). Drift here is a recurring bug.

## Vercel / deploy

- Build output must be `dist/` (set in `vite.config.js` — don't change without updating Vercel config).
- Vercel watches the `website/` folder of the GitHub repo, so a deploy requires syncing `website/` with root after changes (see "Repository Layout" gotcha above).
