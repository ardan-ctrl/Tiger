# Paper Tiger Landing Page

Custom single-page landing page for **Paper Tiger** — a character-led animated brand selling:

- sponsored Paper Tiger episodes;
- brand integrations inside the Paper Tiger universe;
- custom animated ads created for brands.

The site’s job is to turn brand interest into **high-intent inbound collaboration leads** through a landing page that feels like part of the Paper Tiger world itself: bold, commercial, playful, visually distinctive, and easy to act on.

---

## 1. Source-of-truth hierarchy

When implementation choices need to be made, follow this order:

1. **Approved Paper Tiger mockups and section layout guides** — primary authority for composition, proportions, visual rhythm, typography weight, color temperature, and overall feeling.
2. **This README** — project-level product, structural, and build rules.
3. **`docs/DESIGN_SYSTEM.md`** — typography, color, spacing, borders, forms, cards, and UI behaviour.
4. **`docs/ASSET_MAP.md`** — artwork-packaging strategy by section.
5. **`docs/EXPORT_CHECKLIST.md`** — exact export checklist, filenames, and folder placement.

The implementation must stay faithful to the **Paper Tiger mockups first**. Do not flatten, cool down, over-systematize, or genericize the approved designs.

---

## 2. What this site must feel like

This is **not** a generic agency website, SaaS landing page, polished startup template, or standard creator portfolio.

It is an **art-directed conversion landing page** for a distinctive entertainment-led commercial offer.

The site must feel:

- unmistakably like **Paper Tiger**;
- bold, mischievous, and commercially sharp;
- warm, paper-like, and illustration-led;
- premium in composition, not overdesigned;
- humorous without becoming childish;
- persuasive without sounding corporate.

---

## 3. Non-negotiable implementation rules

### Do

- Use the approved Paper Tiger mockups as the **primary visual reference**.
- Build a custom, highly visual single-page landing page.
- Keep major site copy as real HTML text wherever possible.
- Use forms as real interactive UI, not baked into flattened images.
- Use prepared production artwork from `public/images/...`.
- Use flattened section guides from `design/layout-guides/` only as layout references, not as screenshots pasted into the page.
- Build desktop fidelity first, then adapt thoughtfully for tablet and mobile.
- Add motion only where it strengthens the Paper Tiger world and conversion flow.

### Do not

- Do not turn the site into a generic startup layout.
- Do not introduce testimonial strips, logo clouds, FAQ blocks, pricing tables, feature grids, or other filler unless explicitly requested later.
- Do not redesign approved compositions into cleaner but blander layouts.
- Do not replace Paper Tiger artwork with placeholders, stock-style graphics, or invented substitute scenes.
- Do not bake all page text into raster images.
- Do not overanimate the site with childish bounce, heavy parallax, or distracting motion.

---

## 4. Planned build direction

### Core stack

- **Next.js**
- **TypeScript**
- component-based architecture
- static image assets under `public/images/`
- responsive custom layout, not a template system

### Forms and lead capture

The site will include enquiry forms that send submissions to the site owner by email.

Final implementation method is still open:

1. external form handling service; or
2. custom API route with email delivery.

A placeholder route directory already exists at:

```txt
app/api/contact/
```

The environment template is prepared in:

```txt
.env.example
```

---

## 5. Approved landing-page structure

The homepage is a single scrolling story with a clear conversion arc.

### 1. Header
Minimal header with brand presence, optional anchor navigation, and Instagram link.

### 2. Hero
```txt
Paper Tiger
Make your brand impossible to scroll past
```
The hero uses multiple Paper Tiger visual vignettes around the title.

Key motion idea:
- the large `Paper Tiger` title assembles / appears letter by letter;
- the title entrance should feel playful, art-directed, and consistent with the site’s hand-crafted typographic world.

### 3. Offer statement
```txt
Sponsored episodes,
brand integrations
and custom animated ads.
```

### 4. Attention thesis
```txt
Ads people
actually watch
```

### 5. Problem statement
```txt
Your audience scrolls
before most ads even begin.
```

### 6. Attention ownership
```txt
This attention
could belong
to your brand
```

### 7. Capability statement
```txt
Paper Tiger
knows what to do.
```

### 8. Watchability statement
```txt
I give people
a reason
to watch.
```

### 9. Desire statement
```txt
So they want
what you sell.
```

### 10. Format choice intro
```txt
Choose
what you want
Paper Tiger to do.
```

### 11. Two commercial offer cards
1. **Put your brand inside Paper Tiger.**
2. **Get a custom animated ad made just for you.**

These cards must remain clean, highly readable, and conversion-focused.

### 12. Mid-page enquiry form
```txt
Not sure
which one fits?

Send your brand. We’ll tell you.
```

### 13. Price / FOMO section
```txt
The reach is
already big.

The price is not.
```
Supporting line:
```txt
Paper Tiger collaborations currently start from £400.
```

### 14. Final CTA + enquiry form
```txt
Drop your link.

Get Paper Tiger
working for your brand
```

### 15. Footer
Footer includes:
- animated typography treatment;
- Instagram;
- email or contact reference;
- copyright.

---

## 6. Repository structure

```txt
Tiger/
│
├── app/
│   └── api/
│       └── contact/
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   └── motion/
│
├── data/
│
├── design/
│   └── layout-guides/
│
├── docs/
│   ├── ASSET_MAP.md
│   ├── DESIGN_SYSTEM.md
│   └── EXPORT_CHECKLIST.md
│
├── lib/
│
├── styles/
│
├── public/
│   └── images/
│       ├── background/
│       ├── hero/
│       ├── services/
│       ├── watching/
│       ├── scrolling/
│       ├── attention/
│       ├── statements/
│       ├── formats/
│       ├── forms/
│       ├── price/
│       └── decor/
│
├── .env.example
├── .gitignore
└── README.md
```

---

## 7. Folder responsibilities

### `app/`
Page entry, layout shell, global styles, and future contact route.

### `components/layout/`
Header, footer, and shared page-shell structures.

### `components/sections/`
One component per major landing-page section.

### `components/ui/`
Reusable interface elements such as forms, buttons, and section utilities.

### `components/motion/`
Reusable motion primitives such as animated headings, stagger reveals, and scroll-triggered appearance logic.

### `data/`
Editable copy, card text, repeated labels, and other content that should stay easy to revise without hunting through layout files.

### `design/layout-guides/`
Flattened, reference-only section compositions showing intended desktop arrangement. These are implementation guides, not production page images.

### `docs/DESIGN_SYSTEM.md`
The active visual system for this project: typography, colors, spacing, borders, forms, cards, and interface behaviour.

### `docs/ASSET_MAP.md`
The artwork strategy: which sections need full guides, separate responsive assets, or both.

### `docs/EXPORT_CHECKLIST.md`
The operational export list: exact files, names, folders, and section-by-section requirements.

### `public/images/`
All production artwork used by the live website, grouped by section.

---

## 8. Asset rules

- Store production imagery only inside `public/images/...`.
- Store flattened section references only inside `design/layout-guides/`.
- Use descriptive file names.
- Prefer optimized `.webp` for production artwork unless another format is specifically needed.
- Export layered characters, props, bubbles, and decor with transparent backgrounds when they need independent placement.
- A large illustrated scene may remain one locked composition when that is the most faithful and efficient implementation choice.
- For complex sections, prepare both:
  - a full layout guide showing the intended composition;
  - separate production-ready assets for responsive implementation and motion.
- Major site copy remains HTML, except for speech bubbles and intentionally illustrated handwritten details.

Detailed asset instructions live in:

```txt
docs/ASSET_MAP.md
docs/EXPORT_CHECKLIST.md
```

---

## 9. Motion priorities

Motion matters, but it should serve the site rather than perform for its own sake.

Priority moments:

1. **Hero title assembly** — `Paper Tiger` lettering appears / assembles with character.
2. **Section reveals** — large statements and artwork enter with restrained timing.
3. **Micro-motion** for a few illustrated elements where it adds charm.
4. **Price notifications** if exported as separate assets.
5. **Footer typography animation** — a lively letter-based treatment consistent with the site’s hand-crafted graphic language.

Avoid frantic bounce, excessive parallax, readability loss, and gimmicky motion.

---

## 10. Performance and responsive requirements

The final website must:

- load quickly;
- work cleanly on desktop, tablet, and mobile;
- avoid awkward cropping of key artwork;
- maintain strong typography across breakpoints;
- preserve commercial clarity on smaller screens;
- avoid unnecessary heavy motion or oversized assets.

Desktop composition should be perfected first. Mobile should then be adapted intentionally rather than treated as a collapsed desktop version.

---

## 11. Current open decisions

Still open:

- final form submission method;
- whether any section gets a subtle video loop rather than static imagery plus code motion;
- final SEO metadata and social sharing assets;
- final copy polish in selected paragraphs and offer cards if adjusted during implementation.

Already fixed in project docs:

- typography and UI grammar;
- color logic;
- spacing approach;
- artwork handling strategy;
- page narrative structure.

---

## 12. Next implementation input

Before coding begins, use:

```txt
docs/DESIGN_SYSTEM.md
docs/ASSET_MAP.md
docs/EXPORT_CHECKLIST.md
```

together with the approved Paper Tiger mockups and uploaded layout guides.
