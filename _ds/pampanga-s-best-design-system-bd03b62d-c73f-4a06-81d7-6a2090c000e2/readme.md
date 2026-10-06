# Pampanga's Best Design System

Design system for the **Pampanga's Best** website rebuild — a modern re-platform of pampangasbest.com that keeps the brand's heritage (green, gold, the 1967 story) while adopting the editorial, serif-led layout of the supplied reference mock.

## Company & product context

Pampanga's Best, Inc. (San Fernando, Pampanga, Philippines; est. 1967) is a meat-processing company owned by the Hizon family and positions itself as "The FIRST and ORIGINAL Tocino Maker in the World." Core products: Tocino, Longaniza, Hotdogs, Sausages, Hams (incl. Christmas Hams), Bacon, Tapa, Hamburger Patties, Corned Beef, Embotido, Barbecue, Chicken Pops / Nuggets. Distribution is through supermarkets, dealers/distributors ("Home-Negosyo partners"), company outlets, and an online store (pampangasbest.store). Tagline in the wild: *"Una at Original"*, *"The Taste of Home. Since 1967."*

**Surface covered by this system:** the marketing website (home, products, recipes, where-to-buy/locations, business opportunities, news, contact). One product, one UI kit: `ui_kits/website/`.

## Sources

- Live site: https://www.pampangasbest.com (WordPress; scraped for navigation, copy, product list, testimonials). Online store: https://pampangasbest.store
- Reference mock (primary visual source): `uploads/929f3a75-e1ae-426f-8335-474136d15952.jpg` — a full homepage mock, green/cream, serif headlines. Sampled colors and layout come from this file.
- Initial design PDF: `uploads/PBEST WEBSITE INITIAL DESIGN (3).pdf` (copy in `research/pbest-initial-design.pdf`, page images in `research/pdf-p*-img*.png`). Three pages: Main Page, Upper Bar (screenshot of the current Shopify store), Menu Contents (Products + Locations pages). Heavier, gradient-green style with red TOCINO panels, white pill nav, fork/tocino footer illustration.
- Attached local folder `pampangas best/` — mounted **empty** during this run; nothing could be read from it. If it contains the site's code or brand assets, re-attach and the system should be re-synced against it.

No font files or vector logos were provided. Logos are raster crops from the mock/PDF (see Assets). Fonts are Google Fonts substitutes (see Fonts).

## Content fundamentals

- **Voice:** warm, family, heritage. First-person plural ("our story", "our products", "we deliver"), addressing the reader as "you"/"your family". Never corporate-cold, never slangy.
- **Bilingual flavour:** English is the base; Tagalog/Kapampangan phrases appear as brand lines and in testimonials — *"Una at Original"*, *"Ang Original Tocino ng Bayan"*, *"Best-Sarap"*, *"Saan ka man, bring the Best with you"*. Use Filipino only for taglines and quotes, not for UI labels.
- **Casing:** section eyebrows are ALL CAPS, letter-spaced ("OUR STORY", "WHERE TO BUY"). Headlines are Title Case serif ("A Taste That Started in Pampanga"). Buttons are ALL CAPS small sans ("EXPLORE OUR PRODUCTS", "VIEW ALL PRODUCTS"). Card titles are Title Case. Body is sentence case.
- **Length:** headlines 3–8 words; body under cards is one short sentence ("Sweet and savory taste that Filipinos love."). Sub-headlines are one line ("Authentic Filipino goodness crafted with quality, tradition, and love since 1967.").
- **Recurring words:** original, authentic, tradition, family, home, quality, since 1967, Filipino favorites.
- **CTAs:** verb-first, often with a trailing arrow → ("DISCOVER OUR STORY →", "LEARN MORE →", "GET DIRECTIONS →"). Secondary text-links use the same arrow.
- **Emoji:** none. Punctuation is plain; the brand name always takes the curly apostrophe: **Pampanga’s Best**.
- **Legacy copy worth reusing:** "The FIRST and ORIGINAL Tocino Maker in the World"; testimonials in Taglish ("The Best talaga ang Pampanga’s BEST products…"); "Do you want to know how we specially create the original sweet-salty breakfast favorite?"

## Visual foundations

- **Color:** one dominant deep green (`--pb-green-900 #0b4a26`) for nav, footer, primary buttons and full-bleed bands; serif headlines in the same green. Warm creams (`#f7f7ee`, `#f0f1e0`) alternate with pure white to separate sections — max three surface colors on a page: cream, white, green. Gold (`#c9a23f`) is reserved for the logo band and tiny accents. Heritage red (`#c62828`) is packaging/legacy only — never as a UI color on the new site except promo panels.
- **Type:** serif display (Source Serif 4, 600) for every H1–H3; geometric sans (Figtree) for everything else. Display 58/1.08, H2 34/1.2, H3 26, body 15/1.55, small 13, eyebrow 11 bold caps at .12em, nav 12 semibold caps at .06em.
- **Backgrounds:** flat colors. Faint leaf/fern watermark (`assets/imagery/leaf-motif.png`) at ~40–50% opacity in the corners of cream bands. Photography is full-bleed only in the hero and the map/locations band; elsewhere it lives inside cards. No gradients except protection gradients over photos.
- **Imagery:** warm, saturated, appetizing food on white plates, banana leaf, wood; packaging shots front-on; heritage photos in muted sepia; team/CSR photos candid. Never cool-toned or B&W.
- **Cards:** white, 6px radius, 1px `--border-subtle` OR `--shadow-card` (not both), image on top bleeding to the card edges, 14–16px padding, title 15/700 + one-line 13px muted description. Hover: lift 2px, `--shadow-card-hover`.
- **Buttons:** 4px radius. Primary = green-900 fill, white 12px bold caps. Outline = 1.5px green border on transparent/cream. On green: white outline or white fill with green text. Padding 12px 22px. Hover darkens one step; press darkens two steps; no scale.
- **Inputs:** white, 4px radius, 1px border, 40px tall, placeholder muted; search fields carry a trailing icon.
- **Borders & shadows:** hairline `#d9dad2`. Shadows are soft and low; one floating shadow (`--shadow-float`) for the store card over the map.
- **Radii:** 4 (controls), 6 (cards), 12 (feature panels, map card), pill (tags), circle (icon badges 60–72px, green-900 fill, white icon).
- **Layout:** 1200px container, 40px side padding, 64px vertical section rhythm, 20px grid gaps, fixed 76px nav. Sections alternate left-text / right-media, with a 40/60 split. Product rows are 6-up carousels with a round arrow button. Timeline is a horizontal line with 4 dots.
- **Motion:** 220ms ease-out fades and lifts; carousels slide; hero has a dot pager. No bounces, no parallax.
- **Transparency & blur:** none, except protection gradients on photos and 35% white borders on green.
- **Iconography:** thin-stroke line icons (see below), white in green circles for features, green inline for links.

## Iconography

The mock uses simple 1.5–2px line icons: search, cart, chevron (nav dropdowns), arrow-right (links), map-pin, phone, mail, and filled social glyphs (Facebook, Instagram, YouTube, TikTok); feature badges use handshake and globe in white on green circles. No icon font or SVG set was supplied, so the system uses **Lucide** (CDN, MIT) as the closest match — same stroke style. `components/core/Icon.jsx` wraps it. Components that reference logo/leaf assets read `window.PB_ASSET_BASE` (set it to the path of `assets/` relative to the page; default `assets/`). Substitution flagged; swap in brand SVGs if they exist. No emoji; the only unicode used as an icon is the → arrow after CTAs.

## Fonts

No font files were provided. Substitutes via Google Fonts (`tokens/fonts.css`):
- Display serif → **Source Serif 4** (mock headline looks like a transitional serif of this kind).
- Sans → **Figtree** (mock body/nav is a geometric humanist sans; PDF uses a Gotham-like face).
Please supply licensed brand fonts if they differ.

## Assets

`assets/logo-modern-on-green.png` (cream script + gold BEST band, for nav and footer), `assets/logo-crop.png` (heritage mark with Lola portrait — legacy site/packaging). All raster crops; vector logo requested. `assets/imagery/` holds hero, product, recipe, history, and reference photos cropped from the mock and PDF (`ref-*` from the reference mock).

## Components (`components/core/`)

Inventory defined by the reference mock: Button, IconButton, Input, Eyebrow, SectionHeading, ProductCard, RecipeCard, NewsCard, FeatureCard, TimelineItem, StoreCard, Navbar, Footer, Icon. Intentional additions: **Icon** (wrapper for the Lucide glyph set).

## Index

- `styles.css` — entry; imports `tokens/{fonts,colors,typography,spacing,effects}.css`
- `guidelines/*.html` — foundation cards (colors, type, spacing, effects, brand)
- `components/core/` — React primitives + `core.card.html`
- `ui_kits/website/` — homepage, products, recipes, locations screens (`index.html`)
- `assets/` — logos, imagery
- `research/` — PDF and extracted page images
- `SKILL.md` — agent skill entry
