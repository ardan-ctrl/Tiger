# Paper Tiger Landing Page — Asset Strategy

This document defines the **production artwork strategy** for the Paper Tiger landing page.

The primary visual authority is:

```txt
design/source-mockups/
```

The approved mockups show the exact composition, proportions, scale relationships, and visual rhythm of each section. The website should be reconstructed from them with real HTML/CSS, using image assets only where they help preserve the design faithfully.

---

## 1. Core rule

Do **not** default to over-fragmenting each mockup into many tiny cut-out assets.

That approach is allowed only when it genuinely improves responsive control or motion. In most sections, a **bounded composition image** or a **small number of grouped assets** will be more faithful and more stable than dozens of loosely positioned fragments.

Preferred implementation priority:

1. Study the approved section mockup.
2. Keep headline, body copy, forms, and cards as real HTML/CSS.
3. Decide the **smallest sensible artwork package** that reproduces the composition accurately.
4. Use one bounded visual composition where possible.
5. Split artwork only when a specific object truly needs independent movement or responsive rearrangement.

---

## 2. Asset categories

### A. Source mockups

Location:

```txt
design/source-mockups/
```

Purpose:
- visual authority;
- composition reference;
- layout fidelity check;
- source for manually prepared production artwork when needed.

These files are **not** pasted into the live site as full section screenshots.

### B. Production artwork

Location:

```txt
public/images/
```

Purpose:
- live website visuals;
- section compositions;
- grouped illustrations;
- rare isolated elements for motion or responsive placement.

### C. Optional layout guides

Location:

```txt
design/layout-guides/
```

This folder is optional. It is only useful if a separate layout guide is later created for a particular technical reason. The main source of truth remains `design/source-mockups/`.

---

## 3. Image preparation principles

### Keep as HTML/CSS

These should generally remain real interface/content elements:

- all major headlines;
- subtitles and supporting text;
- navigation;
- cards;
- forms;
- buttons;
- pricing copy;
- CTA copy.

### Keep as artwork

These may remain inside images:

- character illustrations;
- illustrated scenes;
- speech / thought bubbles;
- handwritten sketch text inside bubbles;
- visual flourishes and pencil accents;
- objects that are part of an illustration rather than a UI element.

### Format

Preferred production format:

```txt
.webp
```

Use transparency when an asset must sit independently on the page. Use a bounded composition with its natural canvas only when that produces a cleaner, more stable result.

---

## 4. Recommended asset approach by section

# 01. Hero

Mockup:

```txt
design/source-mockups/01-hero.png
```

Recommended production approach:
- Keep title and subtitle as HTML.
- Use **one or two carefully prepared grouped hero compositions**, not a pile of micro-assets scattered by guesswork.
- The grouped visual package should preserve the exact spatial feeling of:
  - standing Tiger;
  - side bubbles;
  - mini-scenes around the title.

Use individual isolates only if a specific hero element needs meaningful motion.

---

# 02. Offer statement

Mockup:

```txt
design/source-mockups/02-offer-statement.png
```

Recommended approach:
- Headline stays HTML.
- Treat Tiger + bubble + small paw accent as a **single bounded illustration group** unless a subtle reveal animation truly needs separation.

---

# 03. Ads people actually watch

Mockup:

```txt
design/source-mockups/03-ads-people-watch.png
```

Recommended approach:
- Headline stays HTML.
- The surrounding audience figures should usually be prepared as **one composition or a small number of meaningful grouped clusters**, preserving balance around the headline.
- Avoid scattering four separate people groups without careful composition control.

---

# 04. Scroll problem

Mockup:

```txt
design/source-mockups/04-scroll-problem.png
```

Recommended approach:
- Headline stays HTML.
- Tiger + bubble + top paw can be one bounded composition, or paw can remain separate if useful.

---

# 05. Attention / red carpet

Mockup:

```txt
design/source-mockups/05-attention-red-carpet.png
```

Recommended approach:
- Headline stays HTML.
- Red carpet scene should be treated primarily as **one carefully preserved composition**.
- Cameras / microphones may be split only if the design explicitly benefits from a restrained flash or reveal motion.
- Do not blindly separate every prop.

Alternative mockup:

```txt
design/source-mockups/05-attention-dental-alt.png
```

This is reference-only unless explicitly promoted into the live page.

---

# 06. Capability statement

Mockup:

```txt
design/source-mockups/06-capability.png
```

Recommended approach:
- Text remains HTML.
- Seated Tiger can be one composition.
- Category icons / labels can be HTML or artwork depending on which produces the closest result to the mockup.

---

# 07. Reason to watch

Mockup:

```txt
design/source-mockups/07-reason-to-watch.png
```

Recommended approach:
- Text remains HTML.
- Use one close-up Tiger composition.

---

# 08. Desire statement

Mockup:

```txt
design/source-mockups/08-desire.png
```

Recommended approach:
- Main statement remains HTML.
- Tiger plus surrounding sketch objects may be preserved as one composition or split into only two or three grouped assets if responsive layout demands it.

---

# 09. Format choice intro

Mockup:

```txt
design/source-mockups/09-format-choice.png
```

Recommended approach:
- Headline remains HTML.
- Peeking Tiger can be one isolated artwork asset.

---

# 10. Offer cards

Mockup:

```txt
design/source-mockups/10-offer-cards.png
```

Recommended approach:
- Cards must be real HTML/CSS.
- Decorative illustrations inside the cards may be separate assets.
- Do not rasterize the cards as images.

---

# 11. Mid-page form

Mockup:

```txt
design/source-mockups/11-mid-form.png
```

Recommended approach:
- Form must be real HTML/CSS.
- Tiger paw is the only likely separate visual asset.

Alternative mockup:

```txt
design/source-mockups/11-mid-form-pigeon-alt.png
```

Reference-only unless explicitly selected later.

---

# 12. Price section

Mockup:

```txt
design/source-mockups/12-price.png
```

Recommended approach:
- Text remains HTML.
- Lounging Tiger can be one composition.
- Notification cluster may be grouped or split if staggered motion is worth it.

---

# 13. Final CTA

Mockup:

```txt
design/source-mockups/13-final-cta.png
```

Recommended approach:
- CTA text and form remain real HTML/CSS.
- Tiger paw can be one separate artwork asset.

---

## 5. Naming rules

Use descriptive, section-aware names.

Good:

```txt
hero-composition.webp
attention-red-carpet-scene.webp
price-tiger-notifications.webp
final-form-paw.webp
```

Avoid:

```txt
crop1.webp
piece-final.webp
new-image.webp
```

---

## 6. The rule that prevents chaos

A production asset is justified only if it improves one of these:

- fidelity to the approved mockup;
- responsive behaviour;
- meaningful motion;
- cleaner implementation.

If splitting an illustration into many files makes the final section less accurate, **do not split it**.
