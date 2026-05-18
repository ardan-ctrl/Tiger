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
- preserve the personality, humour, confidence, and visual charm of the approved mockups;
- communicate the offer fast and clearly to brands;
- make leaving an enquiry feel like the obvious next move;
- work beautifully on desktop, tablet, and mobile;
- load quickly despite being illustration-rich.

---

## 2. Source-of-truth hierarchy

When implementation choices need to be made, follow this order:

1. **Approved Paper Tiger mockups and layout guides** — primary authority for composition, proportions, visual rhythm, typography weight, color temperature, and overall feeling.
2. **This README** — project-level creative, structural, technical, typographic, color, and interface rules.
3. **`docs/ASSET_MAP.md`** — asset strategy: which section needs what type of artwork package.
4. **`docs/EXPORT_CHECKLIST.md`** — exact export plan, filenames, and folder placement.
5. **Uploaded Woset style reference** — foundational reference for the type/UI/color logic, adapted to the Paper Tiger mockups rather than followed mechanically.

The implementation should stay faithful to the **Paper Tiger mockups first**. The Woset system is a design reference and structural aid, not a reason to flatten, cool down, or weaken the approved Paper Tiger compositions.

---

## 3. Core visual direction

### Main reference

The key external reference is **Woset.world**, especially:

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
- warm, paper-like, and illustration-led;
- premium in composition, not overdesigned;
- humorous without becoming childish;
- persuasive without sounding corporate.

---

## 4. Non-negotiable design rules

These rules should guide all coding, layout, motion, and styling decisions.

### Do

- Use the approved Paper Tiger mockups as the **primary visual reference**.
- Build a custom, highly visual single-page landing page.
- Keep typography large, expressive, and immediately legible.
- Preserve generous negative space.
- Use prepared artwork from `public/images/...` as the production visual source.
- Use flattened layout guides from `design/layout-guides/` only as composition references, not as page screenshots pasted into the website.
- Keep core site copy as real HTML text wherever possible.
- Use forms as real interactive UI, not baked into flat mockup images.
- Design desktop first, then adapt thoughtfully for tablet and mobile.
- Add motion that feels editorial, refined, and intentional.

### Do not

- Do not turn the site into a generic startup layout.
- Do not introduce testimonial strips, logo clouds, pricing tables, FAQ blocks, feature grids, or other standard marketing filler unless explicitly requested later.
- Do not redesign approved compositions into cleaner but blander layouts.
- Do not replace prepared Paper Tiger artwork with placeholders or unrelated stock-style graphics.
- Do not bake all page text into raster images.
- Do not overanimate the site with childish bounce, gimmicky parallax, or distracting effects.
- Do not force a cold grey background simply because the Woset style reference contains a cooler canvas token; Paper Tiger must visually match its warmer approved mockups.

---

## 5. Planned technology direction

The project is intended to be built as a custom modern landing page.

### Planned foundation

- **Next.js**
- **TypeScript**
- component-based architecture
- static image assets under `public/images/`
- responsive custom layout, not a template system

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

## 6. Approved landing-page narrative structure

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

## 7. Project structure

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
│   ├── ASSET_MAP.md
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

## 8. Folder responsibilities

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

Explains the overall artwork strategy:

- which sections need flattened guides;
- which sections need separate responsive assets;
- when a locked composition is acceptable;
- how to think about artwork packaging.

### `docs/EXPORT_CHECKLIST.md`

The operational export document:

- exact files to prepare;
- filenames;
- folder placement;
- section-by-section export instructions;
- optional versus required asset splits.

### `lib/`

Small utility functions, form helpers, and technical helpers as needed.

### `styles/`

Organized style files if global styling is split beyond the app-level stylesheet.

### `public/images/`

All production art assets used by the landing page, grouped by section.

---

## 9. Image asset policy

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

Detailed asset guidance lives in:

```txt
docs/ASSET_MAP.md
docs/EXPORT_CHECKLIST.md
```

---

## 10. Typography system

Typography is based on the supplied Woset style reference, but the **approved Paper Tiger mockups are the visual authority**.

The style reference identifies **Macan** as the key reference family and gives **Inter** as the substitute. For the live coded Paper Tiger site, the implementation font is fixed as:

```txt
Inter
```

Do not introduce unrelated live web fonts unless explicitly directed later.

### 10.1 Core implementation rule

Use **Inter** for all live HTML typography:

- hero title `Paper Tiger`;
- all major section headlines;
- supporting subheads;
- offer card headings;
- body copy;
- navigation;
- form labels, field text, buttons, and utility copy;
- footer utility text.

Handwritten/pencil lettering remains part of the artwork system, not a coded handwriting font.

### 10.2 Mockup-led weight policy

The approved mockups read **heavier and more emphatic** than the base Woset text system. Implementation should follow the mockups rather than forcing a lighter Woset-style result.

Use this as the practical rule:

```txt
Inter 800 — default starting point for major Paper Tiger headlines and bold hero statements, whenever that best matches the mockups.
Inter 500 — use where 800 becomes visually excessive, too dense, or less faithful to the specific approved composition.
Inter 400 — body copy and lighter utility text where appropriate.
```

This is intentionally a **designer-led decision**, not a rigid numeric rule. The coded page should be tuned against the actual mockups section by section.

### 10.3 Type scale reference

The supplied style reference provides these baseline anchors:

```txt
body-lg:    16px / line-height 1 / letter-spacing -0.3px
subheading: 24px / line-height 1.2 / letter-spacing 1px
display:    95px / line-height 1 / letter-spacing -0.6px
```

Use these as structural reference points, not as an inflexible template. The final type scale should respect:

- the approved Paper Tiger layouts;
- the stronger headline presence visible in the mockups;
- readability on mobile and tablet;
- the need for the page to feel composed, not mechanically tokenized.

### 10.4 Application by role

#### Display and hero text

- Use Inter.
- Start from the stronger display feeling seen in the mockups.
- `800` weight is usually the right first pass.
- Reduce to `500` only where the approved screen clearly needs more softness or air.
- Maintain compact line-height and tight visual rhythm.

#### Supporting subheads

- Use Inter.
- Weight can move between `500` and `800` depending on mockup fidelity.
- Keep proportions and spacing visually aligned with the reference layouts.

#### Body, forms, card text, and utility copy

- Use Inter.
- Prefer `400` for body text.
- Use `500` for labels, small emphasis, and UI hierarchy.
- Increase line-height where longer reading requires it, especially inside offer cards.

### 10.5 Handwritten and pencil lettering

Handwritten details are part of the illustration system.

This includes:

- speech / thought bubbles;
- small pencil-style reactions;
- decorative handwritten connectors such as the sketched `and`, if retained.

Preferred rule:

- keep these as artwork assets when they are part of the approved illustration composition;
- do not replace them with a generic handwriting web font unless explicitly requested.

The handwritten layer should stay imperfect, lightly naive, and human — not typographically “cute.”

### 10.6 Typography implementation rules

When the site is implemented in Next.js:

- load **Inter** through `next/font/google`;
- use **Inter** as the single live HTML font family for the project;
- do not import or introduce additional live web fonts without explicit approval;
- implement typography through CSS custom properties or centralized style tokens;
- keep the style reference values available, but let the approved Paper Tiger mockups decide final headline weight, exact scale, and section-level typographic nuance.

---

## 11. Color system

The color system is informed by the supplied Woset style reference, but the **approved Paper Tiger mockups are the visual authority**, especially for the warmth of the page background.

### 11.1 Global color approach

Paper Tiger is a **warm paper-world site**, not a cold neutral interface.

The live build should preserve:

- soft warm paper background;
- near-black text with very high contrast;
- black form/button accents;
- minimal, disciplined secondary neutrals;
- rare small color accents only where they already belong to the visual system.

### 11.2 Core production colors

Use these supplied reference colors as the baseline system:

```txt
Ink Black      #000000 — primary text, major headings, key borders, black buttons
Muted Ash      #bbbab7 — subtle dividers, quiet borders where black is too strong
Graphite       #8d8c8a — secondary text only when a softer hierarchy is needed
Crayon Yellow  #ecca53 — rare active-state or small UI accent only when supported by the approved mockups
```

### 11.3 Background rule

The page background should follow the **approved warm paper mockups** and the production asset:

```txt
public/images/background/paper-texture.webp
```

Do **not** default the entire page to the cooler Woset `Canvas #e5e7eb` if that makes the Paper Tiger site feel greyer or colder than the mockups.

Implementation rule:

- the paper texture asset is the primary background source;
- the CSS background fallback should be selected to visually match that warm paper background during implementation;
- any flat fallback must support the approved mockup temperature, not override it.

### 11.4 UI colors and forms

Forms and interface elements should follow the current mockup logic:

- text: `Ink Black #000000`;
- input borders: usually `Ink Black #000000`, or `Muted Ash #bbbab7` only if the mockup calls for a softer edge;
- primary submit button: black fill with light text, matching the approved form compositions;
- avoid colorful button systems unless a specific approved screen requires it.

### 11.5 Accent color usage

`Crayon Yellow #ecca53` may be used only as a **controlled accent**, for example:

- a tiny selected-state chip;
- a highlighted micro-accent;
- a limited active-state marker.

It should **not** become a dominant CTA color on this Paper Tiger landing page unless a specific approved composition explicitly uses it.

### 11.6 Colors intentionally not active in the current landing page

The Woset reference also includes:

```txt
Deep Violet   #2d5193
Forest Green  #054331
Artisan Red   #a5001b
```

These are **not part of the current Paper Tiger landing page system** unless a future approved section explicitly introduces them.

Do not add colored full-bleed panels, decorative fills, or random accent blocks from these colors just because they exist in the style reference.

### 11.7 Color implementation rules

When the site is implemented:

- define color tokens centrally in CSS variables or the chosen theme layer;
- use semantic roles rather than scattering raw hex values across components;
- let the Paper Tiger mockups determine final warmth, contrast, and restraint;
- do not let the raw Woset palette mechanically override the actual approved landing page art direction.

---

## 12. Spacing, shape, and interface grammar

The Woset reference is useful here because it provides a disciplined **comfortable-density** logic: the site should breathe, interactive elements should feel soft rather than technical, and spacing should come from a coherent scale instead of random values.

Paper Tiger should use that logic, but the **approved mockups remain the visual authority**.

### 12.1 Spacing scale to keep available

Use the Woset spacing scale as the default token pool for implementation:

```txt
6 / 9 / 10 / 11 / 14 / 15 / 20 / 22 / 30 / 48 / 60 px
```

Recommended semantic anchors:

```txt
22px — default internal gap between related UI elements
14px — compact padding / micro-card padding reference
48px — strong CTA/button horizontal breathing room when needed
60px — macro gap reference between major grouped blocks, where compatible with the section mockup
```

These values should be centralized as CSS variables or theme tokens, but they must not mechanically override the actual Paper Tiger layout guides.

### 12.2 Page rhythm and density

The overall density should remain:

```txt
comfortable, spacious, composed
```

Implementation should preserve:

- large breathing room around statements;
- clear separation between major selling moments;
- tightly controlled local spacing inside forms and cards;
- a page that feels editorial and deliberate, not cramped and not empty by accident.

### 12.3 Borders and surfaces

Borrow the Woset discipline of **simple borders over decorative UI noise**:

- prefer `1px` borders for inputs, subtle card divisions, and quiet utility boundaries;
- use `Ink Black #000000` or `Muted Ash #bbbab7` as the primary border colors;
- avoid inventing extra border colors or heavier strokes unless a specific mockup demands it.

The approved Paper Tiger cards and forms may use a very subtle paper-on-paper separation treatment. Avoid glossy app-like elevation, heavy SaaS shadows, and overly polished glassmorphism.

### 12.4 Radius policy

The Woset system uses generous roundness as a softness principle. For Paper Tiger:

- preserve **soft, approachable geometry**;
- use a shared radius system rather than random one-off corners;
- treat `30px` as an available reference radius for pill-like or strongly rounded UI where it visually matches the mockups;
- do **not** blindly force every input, card, or button to `30px` if the approved Paper Tiger mockup uses a less pill-like shape.

Mockup fidelity wins over mechanical token obedience.

### 12.5 Forms and buttons

The system-level lessons worth keeping:

- inputs should be clearly outlined and simple;
- buttons should be decisive and easy to scan;
- primary submission moments should feel unmistakably actionable;
- UI should support the illustrated world, not compete with it.

For the current Paper Tiger mockups:

- form fields stay light and outlined;
- submit buttons are black, direct, and high-contrast;
- the real form must remain HTML/CSS, even when the composition is visually matched to the hand-drawn guide.

### 12.6 Cards

The relevant Woset takeaway is not the product-card component itself, but the principle of:

- simple surfaces;
- clear spacing hierarchy;
- restrained borders;
- no unnecessary decoration.

For Paper Tiger, apply this to the **two offer cards**:

- keep them calm and readable;
- preserve the approved hierarchy of title / explanation / “You get” / “We handle”;
- avoid turning them into generic pricing cards or startup feature blocks.

### 12.7 Icons and small UI marks

Use the Woset guidance selectively:

- icons should stay simple, outlined, and monochromatic when they are interface icons;
- avoid glossy colored icon packs;
- illustrated marks from the Paper Tiger world remain artwork assets, not UI iconography.

---

## 13. Motion direction

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

## 14. Performance and responsive requirements

The final website must:

- load quickly;
- work cleanly on desktop, tablet, and mobile;
- avoid awkward cropping of key artwork;
- maintain strong typography across breakpoints;
- preserve the commercial clarity of the page on smaller screens;
- avoid unnecessary heavy motion or oversized assets.

Desktop composition should be perfected first. Mobile should then be adapted intentionally rather than treated as an afterthought or a collapsed desktop version.

---

## 15. Current open decisions / TBD

These points are intentionally not finalized yet:

- final form submission method;
- exact final image filenames for optional variants where multiple export paths are still possible;
- whether any section gets a subtle video loop rather than static imagery + code motion;
- final SEO metadata and social sharing assets;
- final copy polish in selected paragraphs and offer cards if adjusted during implementation.

The typography system is **not** TBD:

```txt
Inter, guided by the supplied Macan-based Woset reference and tuned to the approved Paper Tiger mockups.
```

The active color system is **not** TBD:

```txt
Warm paper background from the approved mockups and paper texture asset,
with Ink Black / Muted Ash / Graphite / highly restrained Crayon Yellow as the practical UI palette.
```

The spacing and interface grammar are **not** freeform:

```txt
Use the Woset comfortable-density logic, spacing scale, simple borders, and soft UI geometry,
while allowing the approved Paper Tiger mockups to determine exact final proportions.
```

---

## 16. Immediate next step

Use:

```txt
docs/ASSET_MAP.md
docs/EXPORT_CHECKLIST.md
```

to prepare:

- flattened section layout guides for composition fidelity;
- separate production-ready artwork elements for responsive implementation;
- cleanly named assets placed into the correct project folders.
