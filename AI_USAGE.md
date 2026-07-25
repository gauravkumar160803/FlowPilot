# AI Usage Statement

## Tool used

OpenAI Codex (GPT-5) was used as an engineering assistant during this assignment.

## Why AI was used

The tool was used to accelerate routine implementation work, explore component and content structure, and support a systematic quality review. It was not used as a substitute for checking the final output.

## AI-assisted output

AI assistance was used for:

- Initial React/Vite project setup and dependency configuration
- Drafting reusable component and page structures
- Drafting fictional FlowPilot marketing copy
- Creating SEO metadata and JSON-LD schema objects
- Suggesting accessibility and performance improvements
- Producing project documentation

## Manually implemented and directed work

The project direction, requirements, architecture decisions, component composition, content selection, styling choices, route behavior, and requested revisions were manually directed. Specific implementation choices, including the production performance approach, were reviewed and adjusted against the assignment requirements.

## Manual review

The following areas were manually reviewed in the source:

- Route coverage and lazy-loading configuration
- Semantic landmark and heading usage
- Contact-form labels, required fields, autocomplete values, and keyboard behavior
- Focus states, skip navigation, reduced-motion behavior, and icon accessibility
- Unique metadata and canonical URLs for each route
- JSON-LD coverage and JSON serialization
- Footer wording and required external link

## Validation performed

The final source was validated with:

```bash
npm run lint
npm run build
```

The Vite production build completed without errors. JSON-LD source objects were also serialized and parsed as JSON during the final audit.

## Accessibility, SEO, and performance verification

Accessibility, SEO, and performance requirements were reviewed against the implementation, including semantic HTML, headings, labels, focus visibility, metadata, canonical URLs, structured data, route code splitting, and asset use. A browser Lighthouse score is not claimed here because no deployed-browser audit result is stored in the repository. Lighthouse and Rich Results Test should be run against the final deployed URL before release.
