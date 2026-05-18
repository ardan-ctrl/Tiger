# Paper Tiger Landing Page — Asset Map

This document defines the artwork package required for implementation of the Paper Tiger landing page.

It is written for a workflow where **each visually important section may be supplied in two parallel forms**:

1. **A full layout guide** showing all visual elements placed together in their intended desktop composition.
2. **Separate production-ready elements** exported individually for real responsive implementation, animation, and layout adaptation.

This is the preferred workflow for this project.

---

## 1. Asset workflow principle

For sections with complex art direction, the best production package is:

### A. Layout guide image
A flattened visual reference showing the whole section exactly as intended.

Purpose:
- communicates final desktop composition;
- gives Cursor / the implementer a strong reference for spacing and placement;
- protects against the section being reinterpreted into a generic layout;
- helps us verify whether the coded result remains faithful to the approved visual idea.

These layout guides belong in:

```txt
design/layout-guides/
```

They are **not production website assets** by default. They are references for implementation.

### B. Separate production assets
Each image element exported separately so it can:
- be positioned independently;
- move or reveal with motion;
- be rearranged for tablet and mobile;
- preserve sharpness and responsive flexibility.

These production assets belong in:

```txt
public/images/... 
```

They **are** used in the live website.

---

## 2. When to export a full layout guide, separate assets, or both

### Use both a layout guide and separate assets when:
- the section contains multiple illustrated objects around text;
- the visual rhythm depends on exact placement;
- the desktop composition is already approved and should be preserved;
- elements may need to move independently on smaller screens;
- motion is likely.

### A single locked production composition may be acceptable when:
- the scene is one dense illustration that should not be reassembled in code;
- separating elements would create unnecessary complexity;
- the image can scale cleanly as one composition without harming mobile adaptation.

Even then, if the composition is important, a separate layout guide is still useful.

---

## 3. Folder policy

### Reference-only layout guides

```txt
design/layout-guides/
```

Suggested naming:

```txt
01-hero-layout-guide.webp
02-services-layout-guide.webp
03-watching-layout-guide.webp
04-scrolling-layout-guide.webp
05-attention-layout-guide.webp
06-knows-layout-guide.webp
07-watch-layout-guide.webp
08-desire-layout-guide.webp
09-formats-layout-guide.webp
10-offer-cards-layout-guide.webp
11-mid-form-layout-guide.webp
12-price-layout-guide.webp
13-final-cta-layout-guide.webp
```

### Production image assets

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

---

## 4. Export conventions

### Preferred file formats

- `.webp` — default for site imagery;
- `.png` — acceptable for transparency if needed during preparation, but final optimized `.webp` is preferred when practical;
- `.svg` — only for simple vector-like line art, icons, or graphic marks that genuinely benefit from vector scaling.

### Transparency

Use transparent background for:
- characters;
- isolated objects;
- speech bubbles;
- phones, notification clusters, props;
- decorative pencil marks and hand-drawn accents.

Do **not** include the paper page background inside such separate assets.

### Text inside artwork

General rule:
- major site copy must be rendered as HTML text;
- speech bubbles, handwritten snippets, and tiny illustrated labels may remain part of their own artwork when they are decorative and composition-specific.

### Safe margins

Where possible, leave a little room around isolated transparent assets so they do not feel tightly clipped when placed in responsive layouts.

---

## 5. Required asset map by section

# Section 01 — Hero

## Section purpose
The opening scene establishes Paper Tiger as a star and immediately communicates that this is a charismatic, high-desire creative world.

## Live site text

```txt
Paper Tiger
Make your brand impossible to scroll past
```

## Layout guide

Place in:

```txt
design/layout-guides/01-hero-layout-guide.webp
```

The guide should show:
- giant centered “Paper Tiger” headline position;
- subtitle placement;
- left-standing Tiger placement;
- nearby left speech/thought bubble;
- surrounding mini-scenes / vignettes;
- right speech/thought bubble;
- final desktop balance of the whole hero.

## Production assets

Place in:

```txt
public/images/hero/
```

Suggested files:

```txt
hero-tiger-left.webp
hero-thought-left.webp
hero-dental-scene.webp
hero-shoes-scene.webp
hero-cash-scene.webp
hero-thought-right.webp
```

## Recommended export logic

Export **each element separately**.

The hero is the most important section for responsive flexibility and motion. Separate elements will allow:
- exact desktop placement;
- better rearrangement on mobile;
- letter animation around a flexible composition;
- individual stagger reveals for surrounding scenes.

---

# Section 02 — Offer statement

## Live site text

```txt
Sponsored episodes,
brand integrations
and custom animated ads.
```

## Layout guide

```txt
design/layout-guides/02-services-layout-guide.webp
```

## Production assets

```txt
public/images/services/services-tiger-thinking.webp
public/images/services/services-thought-bubble.webp
public/images/services/paw-pencil-top.webp
```

## Recommended export logic

Export separately:
- Tiger;
- bubble;
- top decorative paw / accent.

This will preserve the exact section feel while allowing repositioning at smaller widths.

---

# Section 03 — “Ads people actually watch”

## Live site text

```txt
Ads people
actually watch
```

## Layout guide

```txt
design/layout-guides/03-watching-layout-guide.webp
```

## Production asset options

### Preferred simpler option

```txt
public/images/watching/watching-people-scene.webp
```

A single transparent composition of the surrounding people scene, leaving room for HTML text.

### Optional split version if needed later

```txt
public/images/watching/watching-woman-stroller.webp
public/images/watching/watching-standing-person.webp
public/images/watching/watching-sofa-group.webp
```

## Recommended export logic

At the first implementation stage, one clean scene composition is enough if it frames the text beautifully. If we later discover mobile needs more control, the split exports can be added.

---

# Section 04 — Scrolling problem

## Live site text

```txt
Your audience scrolls
before most ads even begin.
```

## Layout guide

```txt
design/layout-guides/04-scrolling-layout-guide.webp
```

## Production assets

```txt
public/images/scrolling/scrolls-tiger.webp
public/images/scrolling/scrolls-thought-bubble.webp
public/images/scrolling/paw-pencil-top-small.webp
```

## Recommended export logic

Export separately.

The section is visually simple, so separate assets give enough freedom for precise desktop placement and graceful mobile restacking.

---

# Section 05 — Attention could belong to your brand

## Live site text

```txt
This attention
could belong
to your brand
```

## Layout guide

```txt
design/layout-guides/05-attention-layout-guide.webp
```

## Production assets

### Preferred first implementation

```txt
public/images/attention/attention-red-carpet-composition.webp
```

A single transparent or neatly bounded composition of the red-carpet Tiger scene.

### Optional split exports if you want finer animation later

```txt
public/images/attention/attention-tiger-red-carpet.webp
public/images/attention/attention-cameras-left.webp
public/images/attention/attention-cameras-right.webp
public/images/attention/attention-microphones.webp
```

## Recommended export logic

Start with **one locked composition** for the live implementation if the scene is already perfectly balanced. This protects the glamour and exact energy of the arrangement.

If later we want camera flash motion or more aggressive mobile adaptation, split exports can be added.

---

# Section 06 — Paper Tiger knows what to do

## Live site text

```txt
Paper Tiger
knows what to do.
```

## Layout guide

```txt
design/layout-guides/06-knows-layout-guide.webp
```

## Production assets

```txt
public/images/statements/knows-what-to-do-tiger-chair.webp
public/images/statements/knows-icons.webp
```

## Recommended export logic

Export separately.

Tiger and the supporting visual marks / icon cluster should remain independently placeable.

---

# Section 07 — I give people a reason to watch

## Live site text

```txt
I give people
a reason
to watch.
```

## Layout guide

```txt
design/layout-guides/07-watch-layout-guide.webp
```

## Production assets

```txt
public/images/statements/reason-to-watch-tiger-chair-close.webp
```

## Recommended export logic

A single isolated Tiger asset is enough. This section is intentionally cleaner and text-led.

---

# Section 08 — So they want what you sell

## Live site text

```txt
So they want
what you sell.
```

## Layout guide

```txt
design/layout-guides/08-desire-layout-guide.webp
```

## Production assets

### Preferred first implementation

```txt
public/images/statements/want-what-you-sell-composition.webp
```

### Optional split exports if you already have them cleanly

```txt
public/images/statements/desire-tiger.webp
public/images/statements/desire-product-left.webp
public/images/statements/desire-product-right.webp
public/images/statements/desire-decor.webp
```

## Recommended export logic

If the composition is beautifully tuned as a single illustrated statement, export it as one locked composition. If the individual object placements matter for responsive restacking, supply both the locked composition and separate layers.

---

# Section 09 — Choose what Paper Tiger should do

## Live site text

```txt
Choose
what you want
Paper Tiger to do.
```

## Layout guide

```txt
design/layout-guides/09-formats-layout-guide.webp
```

## Production assets

```txt
public/images/formats/formats-tiger-standing.webp
public/images/formats/formats-director-chair.webp
```

## Recommended export logic

Export separately.

This allows the chair and Tiger to support desktop composition without becoming awkward on mobile.

---

# Section 10 — Offer cards

## Layout guide

```txt
design/layout-guides/10-offer-cards-layout-guide.webp
```

This guide should show:
- final desktop scale of both cards;
- spacing between cards;
- visual relationship between card titles, body copy, numbering, and surrounding empty space.

## Production assets

No image assets are strictly required for this section unless a decorative mark is intentionally added.

If needed:

```txt
public/images/decor/offer-card-accent.webp
```

## Recommended export logic

The offer cards themselves must be real HTML/CSS UI, not images.

---

# Section 11 — Mid-page enquiry form

## Live site text

```txt
Not sure
which one fits?

Send your brand. We’ll tell you.
```

## Layout guide

```txt
design/layout-guides/11-mid-form-layout-guide.webp
```

## Production assets

```txt
public/images/forms/form-tiger-paw.webp
```

Optional, only if present in the approved mockup:

```txt
public/images/forms/form-small-decor.webp
```

## Recommended export logic

- The form is real HTML/CSS.
- The Tiger paw is an isolated transparent asset.
- If the paw visually overlaps the submit button, export it cleanly enough to position with precision.

---

# Section 12 — Price / FOMO

## Live site text

```txt
The reach is
already big.

The price is not.
```

Supporting text:

```txt
Paper Tiger collaborations currently start from £400.
```

## Layout guide

```txt
design/layout-guides/12-price-layout-guide.webp
```

## Production assets

```txt
public/images/price/price-tiger-phone.webp
public/images/price/price-notifications.webp
```

### Optional more flexible notification split

```txt
public/images/price/notification-brand-collab.webp
public/images/price/notification-available.webp
public/images/price/notification-cafe.webp
public/images/price/notification-new-inquiry.webp
public/images/price/notification-work-together.webp
```

## Recommended export logic

Preferred live implementation:
- Tiger with phone as one isolated transparent asset;
- notifications either as one grouped transparent asset or as separate assets if we want sequential animation.

If you can conveniently export the notifications separately, do it. This section benefits from motion.

---

# Section 13 — Final CTA + form

## Live site text

```txt
Drop your link.

Get Paper Tiger
working for your brand
```

## Layout guide

```txt
design/layout-guides/13-final-cta-layout-guide.webp
```

## Production assets

Reuse if appropriate:

```txt
public/images/forms/form-tiger-paw.webp
```

If the final CTA uses a materially different paw placement or illustration, create:

```txt
public/images/forms/final-form-tiger-paw.webp
```

## Recommended export logic

Reuse the same form component in code, but the visual paw asset may be reused or varied depending on the approved composition.

---

# Section 14 — Footer

## Footer content

Footer implementation is primarily typographic and coded.

Expected content:
- animated large footer text line;
- Instagram;
- email / contact reference;
- copyright.

## Layout guide

Optional but recommended:

```txt
design/layout-guides/14-footer-layout-guide.webp
```

Especially useful if the animated footer typography has a specific final scale and spacing.

## Production assets

Potentially none.

If there are tiny decorative marks:

```txt
public/images/decor/footer-accent.webp
```

---

## 6. Global background and shared decor

# Background

```txt
public/images/background/paper-texture.webp
```

This is the shared page background or subtle background treatment.

# Shared decor

```txt
public/images/decor/paw-print.webp
public/images/decor/scribble-underline.webp
public/images/decor/small-sparkles.webp
public/images/decor/thin-rays.webp
```

Only export decor that genuinely appears in the approved visual system. Do not add random decorative filler.

---

## 7. Naming discipline

Use names that state:

```txt
section-role-description.webp
```

Good examples:

```txt
hero-tiger-left.webp
price-tiger-phone.webp
scrolls-thought-bubble.webp
attention-red-carpet-composition.webp
```

Avoid:

```txt
image1.webp
slide-final.png
new-tiger.webp
asset-copy-2.webp
```

---

## 8. What should be prepared first

Priority order:

1. All layout guides for the major sections.
2. Hero separate assets.
3. Form / paw asset.
4. Price section assets, especially notifications if separate animation is planned.
5. Remaining section assets.
6. Global background and decor.

This allows implementation to begin without waiting for every last decorative element.

---

## 9. Implementation rule for Cursor / developer

When coding the landing page:

- use the **layout guide image** to understand the approved desktop composition;
- use the **separate production assets** to build the real responsive section;
- do not simply place the flattened layout guide on the webpage instead of implementing the section properly;
- if a section has both a locked composition and split layers, use the best route for fidelity and responsive behaviour, but preserve the approved visual outcome.

---

## 10. Current open choices inside the asset system

Still flexible:

- whether “watching people” stays as one scene or becomes multiple pieces;
- whether “attention red carpet” stays as one scene or gets split for motion;
- whether “desire” stays as one scene or gets split for responsive restacking;
- whether price notifications are grouped or individually animated.

These can be decided once the final asset exports are available.
