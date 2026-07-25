# FlowPilot — Submission

## Project summary

FlowPilot is a production-oriented React marketing site for a fictional AI workflow automation platform. It includes four responsive marketing routes, reusable components, route-level SEO, accessible controls, lazy-loaded pages, and JSON-LD structured data.

## Links

- Live URL: _to be added after deployment_
- GitHub URL: _to be added after repository publication_

## AI usage summary

OpenAI Codex (GPT-5) was used as an implementation assistant for component scaffolding, content drafting, and documentation. The resulting work was manually reviewed and validated with static checks and a production build. See [AI_USAGE.md](./AI_USAGE.md).

## Lighthouse summary

The site is prepared for a production Lighthouse audit with code splitting, small local assets, semantic markup, and SEO metadata. Final browser scores are pending a deployed-URL audit; see [LIGHTHOUSE.md](./LIGHTHOUSE.md).

## Structured data summary

The project implements `Organization`, `ContactPoint`, `SoftwareApplication`, `Product`, `Offer`, and `FAQPage` JSON-LD where relevant. See [SCHEMA.md](./SCHEMA.md).

## Accessibility summary

- Semantic landmarks and heading structure
- Keyboard-accessible navigation and FAQ controls
- Skip-to-content link and visible focus states
- Labeled form fields with autocomplete support
- Reduced-motion support and accessible inline graphics

## Deployment checklist

- [ ] Set the real production domain in `src/data/site.js`
- [ ] Run `npm install`, `npm run lint`, and `npm run build`
- [ ] Configure SPA rewrite/fallback rules on the host
- [ ] Publish the `dist/` directory
- [ ] Add live and repository URLs above
- [ ] Run Lighthouse and Google Rich Results Test against the deployed URL
