# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Audela is a modern B2B SaaS landing page for a company offering multiple AI-powered products (Clara, Reven, Lens, Shift). Built with React + Vite, it features smooth animations, responsive design, and per-product marketing pages.

## Quick Start Commands

All commands are run from the `website/` directory:

- **Development**: `npm run dev` → Start Vite dev server on http://localhost:5173
- **Build**: `npm run build` → Production build to `dist/` directory
- **Preview**: `npm run preview` → Preview the production build locally
- **Lint**: `npm run lint` → Run ESLint on all files

## Tech Stack

- **React 19** with React Router 7 for client-side routing
- **Vite 8** for fast build tooling and HMR
- **Framer Motion** for component animations and transitions
- **Lenis** for smooth scroll behavior (see variables.css for required CSS setup)
- **Lucide React** for consistent icon usage
- **react-helmet-async** for managing meta tags and SEO per-page
- **Custom CSS** with CSS variables for theming (no Tailwind or CSS-in-JS framework)

## Directory Structure

```
website/
├── src/
│   ├── pages/          # Route-level components (Home, Clara, Reven, Lens, Shift, Team, Contact, About, PrivacyPolicy, Terms)
│   ├── sections/       # Reusable page sections (Hero, Products, Industries, Stats, Platform, CompanyStatement, ContactForm, etc.)
│   ├── components/
│   │   ├── layout/     # Layout wrapper, Navbar, Footer (shared across all pages)
│   │   └── ui/         # Utility components (AnimatedSection, SEO meta handler, CookieConsent)
│   ├── assets/         # Images and SVGs
│   ├── variables.css   # Design system: colors, typography, spacing (CSS custom properties)
│   ├── index.css       # Global styles and utility classes
│   ├── App.jsx         # Router configuration
│   └── main.jsx        # React entry point
├── public/             # Static assets and brand files
├── dist/               # Production build output
└── package.json        # Dependencies and scripts
```

## Architecture & Patterns

### Routing Structure
React Router is configured in `App.jsx` with a single `<Layout />` wrapper component. All routes are nested under a shared layout (Navbar + Footer). Routes include:
- `/` → Home page with multiple sections
- `/clara`, `/reven`, `/lens`, `/shift` → Individual product showcase pages
- `/team`, `/about`, `/contact` → Company pages
- `/privacy`, `/terms` → Legal pages

### Component Organization
- **Pages** are route-level components that compose multiple sections
- **Sections** are reusable, self-contained page areas (e.g., Hero, Products grid, Contact form)
- **Layout components** wrap the entire app (Navbar, Footer, Layout)
- **UI components** are small, focused utilities
- Each component has co-located CSS (e.g., `Hero.jsx` + `Hero.css`)

### Styling Approach
Uses **CSS custom properties** defined in `variables.css`:
- Color palette mapped to semantic variables (`--text-primary`, `--bg-primary`, `--accent-color`)
- Fluid typography using `clamp()` for responsive sizing (e.g., `clamp(2rem, 8vw, 6rem)`)
- Fluid spacing with `--padding-section`, `--padding-card`, `--gap-grid` 
- Global utility classes: `.container`, `.section-padding`, `.btn`, `.btn-primary`, `.btn-secondary`, `.tag`, `.glass-panel`
- Fonts: Playfair Display (headings), Google Sans (body text)
- **Lenis smooth scroll** is initialized in the codebase; CSS in `variables.css` is required for it to function properly

### Animation & Motion
- **Framer Motion** is used for component-level animations (check `sections/` for `motion.*` usage)
- **Lenis** provides smooth scroll behavior globally
- CSS transitions are used for button hover states and simple transitions

### SEO & Meta Tags
- `react-helmet-async` wrapper in `Layout.jsx` allows per-page meta tag customization
- `<SEO />` component (in `components/ui/SEO.jsx`) abstracts common meta tag setup
- Product pages and legal pages should define their own meta tags for proper social sharing and search engine indexing

### Cookie Consent
- `<CookieConsent />` component handles cookie disclosure
- Should be placed in the Layout component to persist across all pages

## Key Considerations

1. **CSS Custom Properties are foundational** — the entire design system runs on variables in `variables.css`. Changes to colors, spacing, or typography should be made there first.

2. **Responsive design uses fluid values** — breakpoints are minimal; use `clamp()` and viewport-relative units (vw) instead of fixed breakpoints where possible.

3. **Lenis requires its CSS setup** — smooth scroll won't work without the CSS rules in `variables.css`. If adding smooth scroll elsewhere, ensure these rules are included.

4. **Per-page SEO is required** — each page should define its own meta tags (title, description, OG tags) using react-helmet-async for proper search engine and social media presence.

5. **Animation performance** — Framer Motion animations should use `will-change` and GPU-accelerated properties for smooth 60fps performance on lower-end devices.

6. **Product pages follow a template** — Clara, Reven, Lens, Shift all likely share a similar structure (`ProductPage.css` suggests a shared layout component or styling pattern).

## Build & Deployment Notes

- Production builds output to `website/dist/`
- The `public/` folder contains static assets (brand PDFs, logos, videos) that are copied as-is to dist
- Brand assets are versioned and stored in `/Brand-Assets/` alongside old build archives (`/builds/v1-v5/`)
