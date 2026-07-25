# Lighthouse Readiness

## Final Lighthouse scores

Final scores are **pending** a Lighthouse run against the deployed production URL. Scores should not be inferred from local build output alone.

| Category | Status |
| --- | --- |
| Performance | Pending deployed audit |
| Accessibility | Pending deployed audit |
| Best Practices | Pending deployed audit |
| SEO | Pending deployed audit |

## How to run the final audit

1. Deploy the production `dist/` output.
2. Open Chrome DevTools → Lighthouse.
3. Select Mobile, all categories, and clear storage if appropriate.
4. Run at least three audits and record the median score.
5. Run Google Rich Results Test for the pricing page schema.

## Performance optimizations

- Route modules are lazy-loaded with `React.lazy` and `Suspense`.
- Vite produces separate chunks for page routes and shared components.
- Unused starter images and assets were removed.
- No large raster images, external fonts, or third-party scripts are loaded.
- User-facing visuals are CSS or inline SVG.
- Nonessential animation uses small CSS rules rather than shipping an animation runtime in the rendered bundle.
- Motion is disabled for users who prefer reduced motion.

## Core Web Vitals readiness

- **LCP:** The hero uses text and CSS/SVG rather than a large hero image or video.
- **INP:** Navigation, FAQ controls, and form interactions use native HTML and minimal client-side state.
- **CLS:** Visual regions have deterministic layouts; no late-loading images or font swaps are used.

Core Web Vitals require field data or a deployed lab audit for final measurement.

## Lazy loading and route code splitting

`HomePage`, `ProductPage`, `PricingPage`, `ContactPage`, and `NotFoundPage` are imported with `React.lazy`. This keeps non-current route code out of the initial route load and lets Vite emit route chunks in the production build.

## Image and bundle optimization

- No content raster images are used, so no oversized image payloads are shipped.
- The local favicon is a compact SVG.
- Lucide icons are imported by name, enabling bundler tree shaking of unused icons.
- Vite performs production minification, module optimization, and tree shaking.
- Unused starter assets were removed from the repository.

## Accessibility improvements relevant to Lighthouse

- Language, viewport, semantic landmarks, one `h1` per route, and logical headings
- Keyboard navigation, skip link, native disclosure widgets, and visible focus states
- Labeled required fields and semantic button/link usage
- Decorative icons hidden from the accessibility tree; informative SVG has an accessible name
- Reduced-motion support

## SEO improvements relevant to Lighthouse

- Route-specific titles and descriptions
- Canonical URLs
- Open Graph and Twitter Card metadata
- Semantic page content and descriptive link text
- JSON-LD structured data for relevant pages
