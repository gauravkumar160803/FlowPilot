# FlowPilot

FlowPilot is a responsive marketing website for a fictional B2B SaaS company that helps teams automate business workflows with AI. It was created as a Web Developer hiring assignment with an emphasis on reusable React architecture, accessibility, search-engine readiness, and production performance.

## Project overview

The site presents FlowPilot’s workflow automation platform through dedicated Home, Product, Pricing, and Contact pages. It includes responsive navigation, reusable marketing sections, pricing comparison, an accessible contact form, route-level metadata, and JSON-LD structured data.

## Screenshots

Screenshots can be added here after deployment.

- Desktop home page: _placeholder_
- Mobile home page: _placeholder_
- Product and pricing pages: _placeholder_

## Features

- Responsive SaaS marketing pages for Home, Product, Pricing, and Contact
- Shared navigation, footer, CTA, FAQ, pricing, testimonial, and form components
- Client-side routing with lazy-loaded route modules
- Responsive mobile navigation and predictable scroll-to-top route changes
- Accessible contact form with validation, labels, and autocomplete tokens
- Per-route SEO metadata and canonical URLs
- JSON-LD structured data for organization, product, software, FAQ, and contact information

## Tech stack

- React 19
- Vite 8
- React Router
- Tailwind CSS v4 with `@tailwindcss/vite`
- React Helmet Async
- Lucide React
- Framer Motion (installed as part of the requested stack; CSS is used for the small production animations to minimize shipped JavaScript)

## Folder structure

```text
src/
├── assets/       # Local optimized assets (reserved)
├── components/   # Reusable UI, SEO, and routing helpers
├── data/         # Marketing content and JSON-LD data
├── hooks/        # Shared hooks (reserved)
├── layouts/      # Shared application layout
├── pages/        # Lazy-loaded route pages
├── styles/       # Tailwind entry point and global styles
├── utils/        # Shared utilities (reserved)
├── App.jsx       # Route configuration
└── main.jsx      # React and Helmet providers
```

## Installation

```bash
npm install
```

## Running locally

```bash
npm run dev
```

Vite will print the local development URL, normally `http://localhost:5173`.

## Production build

```bash
npm run lint
npm run build
npm run preview
```

The build output is generated in `dist/`.

## Deployment

This is a static Vite application and can be deployed to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static hosting provider.

1. Set the production domain in `src/data/site.js` before deployment.
2. Run `npm run build`.
3. Publish the `dist/` directory.
4. Configure SPA fallback/rewrite rules so direct visits to `/product`, `/pricing`, and `/contact` resolve to `index.html`.

## Lighthouse results

No browser Lighthouse run is recorded in this repository. Run Lighthouse against the deployed production URL to capture final scores; see [LIGHTHOUSE.md](./LIGHTHOUSE.md) for the audit checklist and optimizations in place.

## Accessibility features

- Semantic document landmarks and logical heading hierarchy
- One page-level `h1` per route
- Keyboard-accessible navigation, controls, and FAQ disclosures
- Skip-to-content link and visible focus indicators
- Programmatic labels, required fields, and autocomplete tokens in the contact form
- Accessible names for informative SVGs; decorative icons hidden from assistive technologies
- Reduced-motion support through `prefers-reduced-motion`

## SEO features

- Unique title and meta description for every route
- Canonical URLs
- Open Graph and Twitter Card metadata
- Human-readable routes and semantic HTML
- `lang`, viewport, robots, and theme-color metadata in the root document

## Structured data implemented

- `Organization` and `ContactPoint` on the home/contact experience
- `SoftwareApplication` on the product page
- `Product` and standard plan `Offer` data on the pricing page
- `FAQPage` on the pricing page

See [SCHEMA.md](./SCHEMA.md) for implementation details.

## Performance optimizations

- Route-level lazy loading with `React.lazy` and `Suspense`
- Route code splitting in the Vite production build
- No large raster images or third-party font requests
- Inline SVG/CSS visuals and compact local favicon
- Removed unused starter assets
- CSS-only, reduced-motion-safe animation instead of runtime animation for the rendered UI

## Future improvements

- Connect the contact form to a secure serverless form endpoint or CRM
- Replace the reserved example domain with the production domain
- Add real product screenshots and Open Graph social imagery
- Add analytics with consent management
- Run and record deployed Lighthouse and Rich Results Test reports
- Add end-to-end tests for routing and form submission

## License

This project is provided for the Digital Heroes training task and hiring-assignment evaluation. No separate license has been assigned.
