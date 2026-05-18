# Paper Tiger Landing Page — Implementation Asset Checklist

This checklist translates the approved Paper Tiger source mockups into an implementation-safe asset plan.

The visual authority is:

```txt
design/source-mockups/
```

The live website should be reconstructed from those mockups using:

- HTML/CSS for text, layout, cards, buttons, and forms;
- only the artwork assets that genuinely help preserve the approved composition;
- grouped compositions where that is more faithful than over-fragmented cut-outs.

---

# Global rules

## Keep as real HTML/CSS

- all major headlines;
- all CTA copy;
- body copy;
- card structure and card text;
- forms;
- buttons;
- navigation;
- footer text.

## Keep as artwork

- characters;
- illustrated scenes;
- speech / thought bubbles;
- handwritten text inside speech bubbles;
- paper-world decorative accents;
- products/props that function as part of a drawing.

## Do not do this

- Do not paste full mockups as entire page sections.
- Do not blindly crop dozens of fragments from a mockup by coordinates and scatter them around.
- Do not split an illustration unless the split improves fidelity, responsiveness, or meaningful motion.
- Do not choose technical fragmentation over visual accuracy.

---

# File locations

## Source mockups

```txt
design/source-mockups/
```

## Production artwork

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

# Recommended section-by-section approach

# 01. Hero — Paper Tiger

Source:

```txt
design/source-mockups/01-hero.png
```

Live HTML:

```txt
Paper Tiger
Make your brand impossible to scroll past
```

Recommended artwork package:

```txt
public/images/hero/hero-composition-left.webp
public/images/hero/hero-composition-right.webp
```

or, if one crop is clearly cleaner:

```txt
public/images/hero/hero-art-composition.webp
```

The goal is to preserve the approved balance of:
- standing Tiger;
- bubbles;
- dental / shoe / cash mini-scenes.

Do not split into many micro-assets unless a later animation pass truly requires it.

---

# 02. Offer statement

Source:

```txt
design/source-mockups/02-offer-statement.png
```

Live HTML:

```txt
Sponsored episodes,
brand integrations
and custom animated ads.
```

Recommended artwork package:

```txt
public/images/services/services-supporting-composition.webp
```

This composition should preserve:
- Tiger thinking;
- bubble;
- top paw/sketch accent.

---

# 03. Ads people actually watch

Source:

```txt
design/source-mockups/03-ads-people-watch.png
```

Live HTML:

```txt
Ads people
actually watch
```

Recommended artwork package:

```txt
public/images/watching/watching-left-cluster.webp
public/images/watching/watching-right-cluster.webp
```

or one carefully bounded overall composition if that best protects the mockup.

Avoid scattering four independent clusters unless their placement is carefully art-directed and visually checked.

---

# 04. Scroll problem

Source:

```txt
design/source-mockups/04-scroll-problem.png
```

Live HTML:

```txt
Your audience scrolls
before most ads even begin.
```

Recommended artwork package:

```txt
public/images/scrolling/scrolling-supporting-composition.webp
```

This should preserve Tiger + bubble + top accent as a coherent design unit.

---

# 05. Attention / red carpet

Source:

```txt
design/source-mockups/05-attention-red-carpet.png
```

Live HTML:

```txt
This attention
could belong
to your brand
```

Recommended artwork package:

```txt
public/images/attention/attention-red-carpet-scene.webp
```

This should preserve the full glamour/commercial impact of the scene in one coherent composition.

Optional later, only if motion benefits materially:

```txt
public/images/attention/attention-camera-flashes.webp
public/images/attention/attention-microphones.webp
```

Alternative source:

```txt
design/source-mockups/05-attention-dental-alt.png
```

This remains reference-only unless chosen later.

---

# 06. Capability statement

Source:

```txt
design/source-mockups/06-capability.png
```

Live HTML:

```txt
Paper Tiger
knows what to do.
```

Recommended artwork package:

```txt
public/images/statements/capability-tiger-chair.webp
```

Optional:

```txt
public/images/statements/capability-category-row.webp
```

The category row may also be reproduced in HTML/CSS if that visually matches the mockup well.

---

# 07. Reason to watch

Source:

```txt
design/source-mockups/07-reason-to-watch.png
```

Live HTML:

```txt
I give people
a reason
to watch.
```

Recommended artwork package:

```txt
public/images/statements/reason-to-watch-tiger.webp
```

---

# 08. Desire statement

Source:

```txt
design/source-mockups/08-desire.png
```

Live HTML:

```txt
So they want
what you sell.
```

Recommended artwork package:

```txt
public/images/statements/desire-composition.webp
```

or at most:

```txt
public/images/statements/desire-main-tiger.webp
public/images/statements/desire-surrounding-sketches.webp
```

Keep the surrounding objects visually composed. Do not break this into too many loose objects.

---

# 09. Format choice intro

Source:

```txt
design/source-mockups/09-format-choice.png
```

Live HTML:

```txt
Choose
what you want
Paper Tiger to do.
```

Recommended artwork package:

```txt
public/images/formats/formats-peeking-tiger.webp
```

---

# 10. Offer cards

Source:

```txt
design/source-mockups/10-offer-cards.png
```

Live HTML/CSS:
- both cards;
- titles;
- body text;
- `You get` blocks;
- `We handle` blocks;
- card dividers and structure.

Recommended artwork package:

```txt
public/images/formats/offer-card-tiger.webp
public/images/formats/offer-card-chair.webp
```

Do not rasterize the cards as images.

---

# 11. Mid-page form

Source:

```txt
design/source-mockups/11-mid-form.png
```

Live HTML/CSS:
- headline;
- supporting copy;
- full form.

Recommended artwork package:

```txt
public/images/forms/form-paw.webp
```

Alternative source:

```txt
design/source-mockups/11-mid-form-pigeon-alt.png
```

Reference-only unless chosen later.

---

# 12. Price / FOMO section

Source:

```txt
design/source-mockups/12-price.png
```

Live HTML:

```txt
The reach is
already big.

The price is not.
```

Supporting line:

```txt
Paper Tiger collaborations currently start from £400.
```

Recommended artwork package:

```txt
public/images/price/price-tiger-and-phone.webp
public/images/price/price-notifications-group.webp
```

Splitting the notifications individually is only useful if a later animation pass requires staggered entrances.

---

# 13. Final CTA

Source:

```txt
design/source-mockups/13-final-cta.png
```

Live HTML/CSS:
- CTA copy;
- form.

Recommended artwork package:

```txt
public/images/forms/final-form-paw.webp
```

---

# 14. Background and shared decor

Production background:

```txt
public/images/background/paper-texture.webp
```

Only add shared decorative files when they are visibly required by an approved mockup.

Possible examples:

```txt
public/images/decor/paw-print.webp
public/images/decor/scribble-underline.webp
```

---

# Naming rule

Use meaningful, section-aware filenames.

Good:

```txt
attention-red-carpet-scene.webp
price-notifications-group.webp
hero-art-composition.webp
final-form-paw.webp
```

Avoid:

```txt
crop1.webp
piece2.webp
asset-final-new.webp
```

---

# The anti-chaos test

Before keeping any production asset, ask:

1. Does this preserve the approved composition more faithfully?
2. Does it simplify responsive implementation?
3. Does it enable a meaningful animation?
4. Would fewer grouped assets produce a better result?

If the answer to 4 is yes, use fewer grouped assets.
