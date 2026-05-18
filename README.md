# Paper Tiger Landing Page

Custom landing page for **Paper Tiger** — a character-led animated brand built to sell:

- sponsored Paper Tiger episodes;
- brand integrations inside the Paper Tiger universe;
- custom animated ads created for brands.

The goal of this site is to turn brand interest into **high-intent inbound collaboration leads** through a landing page that feels like an extension of the Paper Tiger world itself: bold, characterful, visually memorable, and commercially clear.

---

## 1. Project intent

This is **not** a generic agency website, SaaS landing page, polished startup template, or standard creator portfolio.

It is an **art-directed conversion landing page** for a distinctive entertainment-led commercial offer.

The site must:

- feel unmistakably like **Paper Tiger**;
- preserve the personality, humour, confidence, and visual charm of the approved slide mockups;
- communicate the offer fast and clearly to brands;
- make leaving an enquiry feel like the obvious next move;
- work beautifully on desktop, tablet, and mobile;
- load quickly despite being illustration-rich.

---

## 2. Core visual direction

### Main reference

The key visual reference is **Woset.world**, especially:

- its light, paper-like visual field;
- oversized typography;
- playful editorial composition;
- whimsical illustrated elements placed around the text;
- its animated typographic footer treatment.

Paper Tiger must **not** copy Woset. It should live in a similar territory of expressive editorial web design while remaining fully its own brand.

### Paper Tiger-specific feel

The landing page should feel:

- bold;
- mischievous;
- commercially sharp;
- hand-drawn / paper-world adjacent;
- premium in composition, not overdesigned;
- humorous without becoming childish;
- persuasive without sounding corporate.

---

## 3. Non-negotiable design rules

These rules should guide all coding, layout, motion, and styling decisions.

### Do

- Use the approved slide mockups as the **primary composition reference**.
- Build a custom, highly visual single-page landing page.
- Keep typography large, expressive, and immediately legible.
- Preserve generous negative space.
- Use prepared artwork from `public/images/...` as a source of truth.
- Keep copy as real HTML text wherever possible.
- Use forms as real interactive UI, not baked into flat mockup images.
- Design desktop first, then adapt thoughtfully for tablet and mobile.
- Add motion that feels editorial, refined, and intentional.

### Do not

- Do not turn the site into a generic startup layout.
- Do not introduce testimonial strips, logo clouds, pricing tables, FAQ blocks, feature grids, or any other standard marketing filler unless explicitly requested later.
- Do not redesign approved compositions into cleaner but blander layouts.
- Do not replace prepared Paper Tiger artwork with placeholders or unrelated stock-style graphics.
- Do not bake all page text into raster images.
- Do not overanimate the site with childish bounce, gimmicky parallax, or distracting effects.

---

## 4. Planned technology direction

The project is intended to be built as a custom modern landing page.

### Planned foundation

- **Next.js**
- **TypeScript**
- component-based architecture
- static image assets under `public/images/`
- future deployment via a modern static / serverless hosting flow

### Forms and lead capture

The website will include brand enquiry forms that send submissions to the site owner by email.

Implementation is still to be finalized. Current options:

1. external form handling service;
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

## 5. Approved landing-page narrative structure

The homepage is a single scrolling story with a clear conversion arc.

### 1. Header

Minimal header with:

- brand presence;
- navigation anchors if needed;
- Instagram link.

### 2. Hero

Primary message:

```txt
Paper Tiger
Make your brand impossible to scroll past
```

This section includes multiple Paper Tiger micro-scenes around the hero typography.

Important motion idea:

- the large **Paper Tiger** title should assemble / appear letter by letter;
- the effect should be inspired by the typographic spirit of the Woset footer, adapted into a hero entrance.

### 3. Offer statement

```txt
Sponsored episodes,
brand integrations
and custom animated ads.
```

This section introduces what brands can buy.

### 4. Attention thesis

```txt
Ads people
actually watch
```

The site moves from offer clarity into the attention problem.

### 5. Problem statement

```txt
Your audience scrolls
before most ads even begin.
```

This section frames the commercial tension quickly and clearly.

### 6. Attention ownership

```txt
This attention
could belong
to your brand
```

This is the aspiration / value section.

### 7. Paper Tiger capability statement

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

The site presents two choices:

1. **Put your brand inside Paper Tiger.**
2. **Get a custom animated ad made just for you.**

These cards must stay clean, highly readable, and conversion-focused.

### 12. Mid-page enquiry form

Prompt:

```txt
Not sure
which one fits?

Send your brand. We’ll tell you.
```

Real lead form, not decorative UI.

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

The enquiry form should be repeated here as a final conversion moment.

### 15. Footer

The footer should include:

- animated typography treatment;
- Instagram;
- email or contact reference;
- copyright.

The footer typography is one of the key motion moments of the site.

---

## 6. Project structure

The repository is intentionally organized before implementation begins.

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
│   └── ASSET_MAP.md
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

## 7. Planned folder responsibilities

### `app/`

Page entry, layout shell, global styles, and future API route.

### `components/layout/`

Shared site structure such as header and footer.

### `components/sections/`

One component per major homepage section.

### `components/ui/`

Reusable interface elements such as forms, buttons, repeated section utilities, and future ticker helpers.

### `components/motion/`

Reusable motion primitives such as animated headings, stagger reveals, and scroll-triggered appearance logic.

### `data/`

Editable copy, card text, repeated labels, and other content that should stay easy to revise without hunting through layout files.

### `design/layout-guides/`

Reference-only flattened compositions of whole sections. These guides show the intended desktop arrangement of all elements together and are used to keep the coded implementation faithful to the approved design.

They are **not** production webpage assets by default.

### `docs/ASSET_MAP.md`

Detailed production asset specification for the site, including:

- which images to export;
- which sections need a flattened layout guide;
- which elements should also be exported separately;
- how assets should be named;
- which files belong in which folders;
- where adaptive layout flexibility matters most.

### `lib/`

Small utility functions, form helpers, and technical helpers as needed.

### `styles/`

Organized style files if global styling is split beyond the app-level stylesheet.

### `public/images/`

All production art assets used by the landing page, grouped by section.

---

## 8. Image asset policy

All landing-page artwork should be prepared and uploaded into the already created asset folders.

### Required principles

- Store site imagery only inside `public/images/...`.
- Store non-production flattened section mockups in `design/layout-guides/`.
- Keep section-specific artwork in its matching folder.
- Use descriptive file names.
- Prefer web-friendly optimized formats, especially `.webp`, unless another format is required.
- Character and decorative assets that need layering should be exported with transparent backgrounds.
- Large scene compositions may be exported as a single image if the composition must remain locked.
- For complex sections, prepare both:
  - a full layout guide showing all elements together;
  - separate production-ready elements for responsive coding and motion.
- Text should generally remain in HTML, except for speech bubbles or decorative handwritten graphic details intentionally included as artwork.

### Current asset folders

```txt
public/images/background/
public/images/hero/
public/images/services/
public/images/watching/
public/images/scrolling/
public/images/attention/
public/images/statements/
public/images/formats/
public/images/forms/
public/images/price/
public/images/decor/
```

The full section-by-section asset specification lives in:

```txt
docs/ASSET_MAP.md
```

---

## 9. Typography direction

Typography is one of the main conversion and art-direction tools of the landing page. It must carry the same energy as the approved mockups: oversized, direct, editorial, warm, and unmistakably intentional.

### 9.1 Primary font system

The site should use **one dominant sans-serif family** for nearly all live HTML text:

- hero title;
- major section headlines;
- card headings;
- navigation;
- form labels and form copy;
- body text;
- footer utility text.

The primary sans-serif should feel:

- bold and highly legible;
- contemporary rather than techy;
- clean but not cold;
- friendly enough to live beside hand-drawn illustration;
- strong enough to hold very large display sizes.

The approved mockups should remain the **visual reference for weight, spacing, and overall typographic mood**.

### 9.2 Temporary implementation font if the final font is not locked yet

Until the final approved web font is selected or supplied, use a high-quality open implementation fallback that stays visually close to the mockup mood.

Recommended temporary direction:

- **Inter / Inter Tight-style grotesk logic** for the live coded prototype;
- heavy / bold styles for display text;
- regular / medium styles for body, utility, navigation, and forms.

This is a **temporary implementation choice**, not a permanent brand decision. Final substitution must preserve the approved visual character of the layouts.

### 9.3 Display headline behaviour

Large headlines should remain:

- materially oversized;
- black or near-black;
- tightly set;
- compact in line-height;
- visually stable across screen sizes.

Use responsive type sizing rather than fixed desktop-only sizes, but do not shrink headlines until they lose impact.

Expected behaviour:

- desktop: heroic oversized statements with strong authority;
- tablet: still dominant and editorial;
- mobile: large and dramatic, but carefully rewrapped instead of mechanically compressed.

### 9.4 Serif accent rule

A **single editorial serif accent** is allowed only where it matches the approved design language — most notably the statement:

```txt
So they want
what you sell.
```

This serif usage should:

- feel elegant, desirable, and slightly more fashion/editorial;
- appear as a deliberate tonal shift;
- remain rare.

Do **not** spread serif typography across random headings or card content. The power of this contrast comes from scarcity.

### 9.5 Handwritten and pencil lettering

Handwritten details are part of the illustration system, not the core type system.

This includes:

- speech / thought bubbles;
- small pencil-style reactions;
- decorative handwritten connectors such as the sketched `and`, if retained.

Preferred rule:

- keep these as artwork assets when they are part of the approved illustration composition;
- do not replace them with a generic handwriting web font unless explicitly requested.

The handwritten layer should stay imperfect, lightly naive, and human — not typographically “cute.”

### 9.6 Typographic hierarchy

The intended hierarchy is:

1. **Hero display text** — biggest and most dominant.
2. **Major section statements** — giant conversational commercial claims.
3. **Offer-card headings** — strong, very clear, still characterful.
4. **Supporting copy** — compact and readable.
5. **Form labels / navigation / metadata** — understated and precise.

Avoid using too many sizes. The system should feel intentional, not improvised.

### 9.7 Font implementation rules

When the site is implemented in Next.js:

- use the built-in `next/font` system for production font loading;
- prefer variable fonts when available and appropriate;
- self-host the selected font through the project build rather than relying on external browser requests;
- if a custom licensed font is selected, load it locally using the project font setup;
- keep the live coded font system to **no more than two HTML font families**:
  1. primary sans-serif;
  2. optional serif accent.

Handwritten styles remain image assets unless we explicitly decide otherwise.

### 9.8 Licensing rule

Do **not** use any commercial or reference-site font in the live project unless its web use is legally cleared.

Reference fonts may guide the mood, but implementation must use either:

- an explicitly approved licensed brand font; or
- a suitable open alternative during prototyping and, if approved, in production.

Font licensing must be treated as part of production hygiene, not an afterthought.

---

## 10. Motion direction

Motion is important, but it should serve the Paper Tiger world rather than dominate it.

### Priority motion moments

1. **Hero title assembly** — Paper Tiger lettering appears / assembles with character.
2. **Section reveals** — large headlines and artwork enter with restrained timing.
3. **Micro-motion for select illustrated elements** where it strengthens charm.
4. **Price notifications** if implemented as separate assets.
5. **Footer typography animation** inspired by the Woset-style animated letter treatment.

### Motion restrictions

- No frantic bounce.
- No overuse of parallax.
- No animation that reduces readability or makes the landing page feel unserious.
- Prefer refined editorial movement over “fun website effects.”

---

## 11. Performance and responsive requirements

The final website must:

- load quickly;
- work cleanly on desktop, tablet, and mobile;
- avoid awkward cropping of key artwork;
- maintain strong typography across breakpoints;
- preserve the commercial clarity of the page on smaller screens;
- avoid unnecessary heavy motion or oversized assets.

Desktop composition should be perfected first. Mobile should then be adapted intentionally rather than treated as an afterthought or a collapsed desktop version.

---

## 12. Current open decisions / TBD

These points are intentionally not finalized yet:

- exact production tech stack setup details;
- final licensed / approved font selection;
- final form submission method;
- exact final image filenames within each asset directory where multiple export paths are still possible;
- whether any section gets a subtle video loop rather than static imagery + code motion;
- final SEO metadata and social sharing assets;
- final copy polish in selected paragraphs and offer cards if adjusted during implementation.

---

## 13. Immediate next step

Use the detailed asset specification in:

```txt
docs/ASSET_MAP.md
```

to prepare:

- flattened section layout guides for composition fidelity;
- separate production-ready artwork elements for responsive implementation;
- cleanly named assets placed into the correct project folders.
