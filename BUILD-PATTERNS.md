# Audela Landing Page Building Patterns

This document records key technical decisions and layout fixes made during the development of the Audela landing page to ensure consistency across future features and builds.

## 1. Deployment & Vercel Configuration
- **Output Directory**: The `vite.config.js` `build.outDir` must be set to `'dist'`. Vercel looks for this folder at the project root to serve the site.
- **GitHub Push**: The `website/` folder is the repository root for `99perceptions/audela-landing-page`. Ensure GitHub actions or Vercel are watching this specific folder.

## 2. Favicon & Branding
- **SVG Favicons**: All product favicon SVGs should have the primary brand color (`#25272C`) applied to the paths for high visibility in tabs.
- **Cache-Busting**: When updating the favicon, always append a version query string (e.g., `/favicon.svg?v=2`) in `index.html` to force browsers to refresh the icon.

## 3. Responsive Layout (Mobile Fixes)
- **Preventing Horizontal Overflow**:
    - Add `min-width: 0` to flex child containers that hold title or description text. This forces the content to obey its parent's width instead of overflowing.
    - Global wrapping: Ensure `div`, `span`, `li`, and `a` elements are included in the `overflow-wrap: break-word` CSS rule.
- **Fixed Navbar Collisions**: 
    - The fixed/floating "pill" navbar requires sections to have a larger mobile `padding-top` (e.g., `6rem`) to ensure top-level tags and headings aren't obscured.
    - Use `scroll-margin-top` on section IDs so that anchor links position the section below the navbar.
- **Grid Stacking**: Mobile grids (like stats or bento cards) should transition to a single-column layout earlier on small widths (< 600px) to prevent vertical clipping or horizontal squishing.

## 4. Product Naming Convention
- **Footer Sync**: Always match the Footer product names (e.g., Shift™, Aisle™) with the branding in the `Products.jsx` section and the official logo files.
