# Structured Data

FlowPilot emits JSON-LD through the shared `Seo` component using React Helmet Async. Source data is held in `src/data/site.js`, and page-specific schema configuration is passed from the route pages.

## Organization

**Purpose:** Identifies FlowPilot as the company behind the website.

**SEO value:** Helps search engines associate the site, company name, URL, and description as one entity. It can support richer understanding of the organization in search systems.

**Implementation:** `organizationSchema` in `src/data/site.js` is used on the home page. The contact page extends this organization data for its contact-specific URL.

## ContactPoint

**Purpose:** Describes a business contact channel, including contact type, email, telephone number, and supported language.

**SEO value:** Gives crawlers explicit, machine-readable contact information associated with the organization.

**Implementation:** Embedded in the `Organization` schema on the home page and contact page. The contact page uses a sales/support contact type.

## SoftwareApplication

**Purpose:** Identifies FlowPilot as a web-based business software application.

**SEO value:** Clarifies the product category, operating environment, product name, URL, and description for search engines.

**Implementation:** `productSchema` in `src/pages/ProductPage.jsx` is included on `/product`.

## Product

**Purpose:** Identifies FlowPilot as a commercial product and describes its pricing offers.

**SEO value:** Gives search engines structured information about the product and available plan offers. Eligibility for enhanced search presentation is determined by the search engine and its policies.

**Implementation:** `pricingSchema` in `src/pages/PricingPage.jsx` is included on `/pricing`. Standard-priced Starter and Professional plans are represented as `Offer` entries; the custom Enterprise plan is intentionally excluded from numeric price data.

## FAQPage

**Purpose:** Represents the pricing questions and answers as a structured FAQ.

**SEO value:** Helps crawlers understand the question-and-answer content. Search-result presentation is not guaranteed and depends on current search-engine policies.

**Implementation:** `faqPageSchema` in `src/data/site.js` supplies the question/answer entities. It is included in the pricing page’s JSON-LD `@graph`.

## Validation notes

- Schema data uses the Schema.org vocabulary and JSON-LD format.
- JSON-LD objects are serialized through the shared `Seo` component.
- Source objects were checked for successful JSON serialization during the final production audit.
- Run Google Rich Results Test against the deployed pricing URL before release to validate the live document.
