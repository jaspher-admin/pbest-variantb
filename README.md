# Pampanga’s Best — Variant B v2 (Corporate)

One file per page. Serve the folder over http (e.g. `npx serve .`) and open `index.dc.html`.

| Page | File | Deep links |
|---|---|---|
| Home | index.dc.html |  |
| Our Story | our-story.dc.html |  |
| Products | products.dc.html | ?cat=Longaniza |
| Recipes | recipes.dc.html | ?r=tocino-fried-rice |
| Where to Buy | where-to-buy.dc.html |  |
| Business Opportunities | business-opportunities.dc.html |  |
| News & Stories | news.dc.html | ?a=be-a-home-negosyo-partner-today |
| Contact | contact.dc.html | ?subject=Careers |
| Careers | careers.dc.html |  |

- `site-data.js` — shared content (82 products from pampangasbest.store, categories, story, testimonials, promos, stores) and page logic. Edit copy and prices here once; every page picks it up.
- `assets/live/` — official logo and product packaging from pampangasbest.store. `assets/live/manifest.json` lists every product with its store URL.
- Category photos, testimonial avatars, the AAA badge and the founder portrait are referenced from pampangasbest.com (wp-content/uploads); download them into `assets/` before go-live.
- `assets/imagery/` — food and heritage photography cropped from the client reference mock.
- `_ds/` — design system tokens and component bundle. `support.js` — prototype runtime.

Each page has its own `<title>`, meta description, canonical and Open Graph tags. Content renders client-side; port each page to server-rendered templates for production SEO.

Type: Montserrat 800 uppercase headings, Open Sans body (Google Fonts), after the consistent.com.ph reference.
