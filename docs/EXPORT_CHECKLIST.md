# Paper Tiger Landing Page — Export Checklist

This checklist translates the approved section mockups into an exact export plan.

The working rule for this project:

- For visually complex sections, prepare **one full layout guide** showing all elements in their approved desktop placement.
- Also prepare **separate transparent assets** so the section can be coded responsively and animated without losing the original art direction.
- The full layout guide is a **reference only**.
- The separate assets are what will be used in the live site.

---

# Global export rules

## File locations

### Layout guides

```txt
design/layout-guides/
```

### Production assets

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

## Format rules

### For full section guides

- Preferred: `.webp`
- Can also use `.png` during preparation if convenient.
- Keep the guide in the exact approved desktop composition.
- Include all visible elements exactly as intended.
- Text may remain visible in the guide because the file is only a reference mockup.

### For production website assets

- Preferred final format: `.webp`
- Transparent background wherever the asset is meant to layer over the page.
- Do not include the paper background unless the file is explicitly the background texture.
- Keep edges clean and avoid unnecessary empty canvas, while leaving a small safe margin around delicate strokes.

---

## Text rule

Render in code as HTML:

- all major headlines;
- all CTA copy;
- all card text;
- all form labels and placeholder text;
- navigation and footer text.

Can remain inside artwork:

- hand-written bubble copy;
- tiny sign text that is part of an illustration;
- decorative labels that function as an illustrated object rather than core website copy.

---

# Section-by-section export checklist

# 01. Hero — Paper Tiger

## Approved mockup

The hero includes:

- top mini-navigation;
- centered title `Paper Tiger`;
- centered subtitle `Make your brand impossible to scroll past`;
- left standing Tiger;
- left speech bubble;
- dental mini-scene;
- shoe-box mini-scene;
- cash / money mini-scene;
- right speech bubble.

## Layout guide export

Export the entire approved desktop hero mockup as:

```txt
design/layout-guides/01-hero-layout-guide.webp
```

This file should show **the exact intended arrangement of every element**.

## Separate production assets

Export individually to:

```txt
public/images/hero/
```

Required:

```txt
hero-tiger-left.webp
hero-thought-left.webp
hero-dental-scene.webp
hero-shoes-scene.webp
hero-cash-scene.webp
hero-thought-right.webp
```

### Notes

- All six should have transparent backgrounds.
- Do not include the large `Paper Tiger` title inside any production asset.
- Do not include the subtitle inside any production asset.
- If the top mini-navigation uses any custom graphic marks, export them separately only if they are not plain text/icons.
- The hero is a priority adaptive section: **separate assets are mandatory**.

---

# 02. Sponsored episodes / brand integrations / custom animated ads

## Approved mockup

The section includes:

- centered large headline;
- pencil paw mark at top;
- Tiger thinking near the lower center-left;
- thought bubble on the right side of Tiger.

## Layout guide export

```txt
design/layout-guides/02-services-layout-guide.webp
```

## Separate production assets

Export individually to:

```txt
public/images/services/
```

Required:

```txt
services-tiger-thinking.webp
services-thought-bubble.webp
paw-pencil-top.webp
```

### Notes

- Transparent background for every asset.
- The big headline stays in HTML.
- The handwritten word `and` currently appears visually in the mockup. If it remains in the final design as a handwritten graphic rather than typed text, export it separately as:

```txt
public/images/services/services-handwritten-and.webp
```

If the handwritten `and` will instead be recreated with font/text styling, no extra export is needed.

---

# 03. Ads people actually watch

## Approved mockup

The section includes:

- giant centered headline;
- four surrounding lifestyle scenes:
  - woman with stroller, top left;
  - seated man with phone and coffee, top right;
  - two women at café table, bottom left;
  - relaxed man on couch, bottom right;
- pencil paw mark at the top center.

## Layout guide export

```txt
design/layout-guides/03-watching-layout-guide.webp
```

## Production assets — preferred package

Export individually to:

```txt
public/images/watching/
```

Required:

```txt
watching-woman-stroller.webp
watching-man-coffee.webp
watching-cafe-friends.webp
watching-man-couch.webp
watching-paw-top.webp
```

## Production assets — optional fallback

If you also want a single full visual frame for reference or emergency implementation, export:

```txt
watching-people-scene.webp
```

### Notes

- Separate assets are better here than one locked composition, because this section may need the most intelligent rearrangement on mobile.
- The central headline must stay as HTML text.
- Keep each person/group cleanly cropped with transparency.

---

# 04. Your audience scrolls before most ads even begin

## Approved mockup

The section includes:

- centered large headline;
- small Tiger at lower left;
- thought bubble beside him;
- faint paw mark at top center.

## Layout guide export

```txt
design/layout-guides/04-scrolling-layout-guide.webp
```

## Separate production assets

Export individually to:

```txt
public/images/scrolling/
```

Required:

```txt
scrolls-tiger.webp
scrolls-thought-bubble.webp
paw-pencil-top-small.webp
```

### Notes

- Transparent backgrounds.
- The section is compositionally simple, but asset separation still matters for responsive placement.

---

# 05. This attention could belong to your brand — red carpet version

## Approved mockup

The section includes:

- headline on the left;
- Tiger on red carpet, holding a can;
- red carpet and stanchions;
- cameras and microphones pointing inward from the edges.

## Layout guide export

```txt
design/layout-guides/05-attention-red-carpet-layout-guide.webp
```

## Separate production assets — recommended

Export individually to:

```txt
public/images/attention/
```

Required:

```txt
attention-tiger-red-carpet.webp
attention-camera-left-bottom.webp
attention-camera-right-upper.webp
attention-camera-right-lower.webp
attention-microphone-left.webp
attention-microphone-right.webp
```

Optional if separate in the art:

```txt
attention-red-carpet-base.webp
attention-stanchions.webp
```

## Optional single composition

Also export a flattened production-safe composition if you want the exact desktop arrangement available as one file:

```txt
attention-red-carpet-composition.webp
```

### Notes

- Because cameras and microphones create the surrounding pressure/attention effect, separate exports are valuable for subtle motion and mobile control.
- If isolating the carpet and stanchions makes the package too fragmented, keep them combined with the Tiger in `attention-tiger-red-carpet.webp`.

---

# 06. This attention could belong to your brand — dental clinic version

## Approved mockup

The section includes:

- same headline on left;
- queue of clients pushing toward the reception;
- Tiger dentist behind the counter;
- signboard `Tiger Dental`;
- appointment cards in some hands;
- `Appointments full` sign on desk.

## Status

This appears to be a **variant / alternative proof scene**, not necessarily a mandatory final page section unless we decide to use it.

## Layout guide export

Prepare anyway, because it may be useful for future use or if we decide to include both proof scenes:

```txt
design/layout-guides/06-attention-dental-layout-guide.webp
```

## Production assets — export only if this scene is confirmed for the live page

Potential folder:

```txt
public/images/attention/
```

Suggested split:

```txt
attention-dental-full-scene.webp
```

Optional further split only if needed later:

```txt
attention-dental-client-queue.webp
attention-dental-tiger-reception.webp
attention-dental-signboard.webp
attention-dental-desk-details.webp
```

### Notes

- For now, a single full transparent scene is enough if we keep this as an optional alternative block.
- Do not spend extra time fragmenting it unless we decide it enters the final site.

---

# 07. Paper Tiger knows what to do

## Approved mockup

The section includes:

- small category icons and labels at top left: Clinics, Sneakers, Apps;
- large left headline;
- Tiger seated in chair on the right.

## Layout guide export

```txt
design/layout-guides/07-knows-layout-guide.webp
```

## Separate production assets

Export to:

```txt
public/images/statements/
```

Required:

```txt
knows-icons.webp
knows-what-to-do-tiger-chair.webp
```

Optional:

```txt
knows-paw-bottom-left.webp
```

### Notes

- If the tiny paw mark at bottom left is part of the final page language, export it either here or as a reusable decorative asset in `public/images/decor/`.
- The heading is HTML.

---

# 08. I give people a reason to watch

## Approved mockup

The section includes:

- headline on left;
- close-up Tiger leaning on chair on the right;
- small paw mark bottom left.

## Layout guide export

```txt
design/layout-guides/08-reason-to-watch-layout-guide.webp
```

## Separate production assets

Export to:

```txt
public/images/statements/
```

Required:

```txt
reason-to-watch-tiger-chair-close.webp
```

Optional:

```txt
reason-to-watch-paw-bottom-left.webp
```

### Notes

- Tiger asset should be cleanly isolated and usable at large scale.
- The section is intentionally simple; do not over-fragment.

---

# 09. So they want what you sell

## Approved mockup

The section includes:

- large elegant statement on the left;
- Tiger standing centre-right;
- sketch objects around him:
  - perfume bottle / product-like object left of Tiger;
  - venue / club-like building sketch right-top;
  - phone-like object lower right;
  - delicate sparkles and hand accents.

## Layout guide export

```txt
design/layout-guides/09-desire-layout-guide.webp
```

## Production assets — recommended

Export to:

```txt
public/images/statements/
```

Required:

```txt
desire-tiger-standing.webp
desire-product-sketch-left.webp
desire-building-sketch-right.webp
desire-phone-sketch-right.webp
```

Optional if visually separate:

```txt
desire-hand-left.webp
desire-hand-right.webp
desire-sparkles.webp
```

## Optional single composition

Also export:

```txt
want-what-you-sell-composition.webp
```

### Notes

- This section benefits from **both**: separate elements for responsive layout and one full reference composition to protect the poetic spacing.
- The main statement must remain HTML text.

---

# 10. Choose what you want Paper Tiger to do

## Approved mockup

The section includes:

- bold headline on the left;
- Tiger peeking from lower right corner.

## Layout guide export

```txt
design/layout-guides/10-formats-intro-layout-guide.webp
```

## Separate production assets

Export to:

```txt
public/images/formats/
```

Required:

```txt
formats-tiger-peeking-right.webp
```

### Notes

- Earlier planning mentioned a director chair, but the approved mockup shown here uses a **peeking Tiger composition** instead.
- The live asset plan should follow the latest visual mockup.

---

# 11. Two offer cards

## Approved mockup

The section includes:

- two large side-by-side editorial offer cards;
- title, descriptive text, `You get`, `We handle` areas;
- small round numeric markers `1` and `2`;
- small Tiger pose on card 1;
- director chair illustration on card 2.

## Layout guide export

```txt
design/layout-guides/11-offer-cards-layout-guide.webp
```

## Production assets

The cards themselves must be coded in HTML/CSS.

Export decorative / illustrative assets to:

```txt
public/images/formats/
```

Required:

```txt
offer-card-tiger.webp
offer-card-director-chair.webp
```

### Notes

- Do **not** export the full cards as production images.
- Card layout guide is important to preserve spacing, softness, and visual hierarchy.

---

# 12. Not sure which one fits? — pigeon composition

## Approved mockup

The section includes:

- large left headline;
- smaller supporting line;
- pigeon messenger with envelope on the right;
- large rounded soft card container.

## Status

This appears to be an earlier / alternative version of the mid-page form section.

The later form version with the Tiger paw is stronger for direct conversion.

## Layout guide export

Still export if you want to retain this option:

```txt
design/layout-guides/12-mid-form-pigeon-layout-guide.webp
```

## Production assets — optional only

If we might use it later:

```txt
public/images/forms/form-pigeon-messenger.webp
```

### Notes

- This is not required for the initial build if the paw-form variant is final.

---

# 13. Not sure which one fits? — form with Tiger paw

## Approved mockup

The section includes:

- headline on left;
- supporting copy;
- form card on right;
- Tiger paw pushing the submit button.

## Layout guide export

```txt
design/layout-guides/13-mid-form-paw-layout-guide.webp
```

## Production assets

Export to:

```txt
public/images/forms/
```

Required:

```txt
form-tiger-paw.webp
```

Optional:

```txt
form-box-paper-reference.webp
```

Only export the form box as an image reference if you want to preserve its exact hand-drawn look for comparison. The **live form itself must be coded**, not inserted as one raster image.

### Notes

- This is the likely live mid-page enquiry section.
- The paw should be isolated with transparent background and positioned so it can visually touch the button.

---

# 14. The reach is already big. The price is not.

## Approved mockup

The section includes:

- large text block on left;
- smaller price line below;
- Tiger lounging in armchair with phone on right;
- cluster of incoming message notifications floating above / around him.

## Layout guide export

```txt
design/layout-guides/14-price-layout-guide.webp
```

## Production assets

Export to:

```txt
public/images/price/
```

Required:

```txt
price-tiger-phone.webp
```

Recommended individual notification assets:

```txt
price-notification-brand-collab.webp
price-notification-available.webp
price-notification-cafe.webp
price-notification-new-inquiry.webp
price-notification-work-together.webp
```

Optional grouped fallback:

```txt
price-notifications-group.webp
```

### Notes

- Separate notification exports are strongly recommended because this section can benefit from a restrained staggered animation.
- The Tiger-in-chair visual should be one clean isolated asset.

---

# 15. Final CTA — Drop your link

## Approved mockup

The section includes:

- large CTA text on left;
- coded form on right;
- Tiger paw touching / pressing the Send button.

## Layout guide export

```txt
design/layout-guides/15-final-cta-layout-guide.webp
```

## Production assets

### Reuse if identical

```txt
public/images/forms/form-tiger-paw.webp
```

### Export separately if the final CTA paw differs in crop, angle, or placement

```txt
public/images/forms/final-form-tiger-paw.webp
```

### Notes

- Reuse is fine only if it truly matches the final composition.
- If the paw needs a slightly different crop or angle to work with the final layout, make a separate asset.

---

# Shared background and decor

## Background

Export to:

```txt
public/images/background/paper-texture.webp
```

This should be the clean paper-like site background.

## Decor

Only export these if they are used in the actual mockups or future motion language:

```txt
public/images/decor/paw-print.webp
public/images/decor/scribble-underline.webp
public/images/decor/small-sparkles.webp
public/images/decor/thin-rays.webp
```

---

# Recommended export priority

To begin coding efficiently, prepare in this order:

## Phase 1 — essential for the first build

1. `01-hero-layout-guide.webp`
2. Hero separate assets
3. `02-services-layout-guide.webp`
4. Services separate assets
5. `03-watching-layout-guide.webp`
6. Watching separate assets
7. `04-scrolling-layout-guide.webp`
8. Scrolling separate assets
9. `05-attention-red-carpet-layout-guide.webp`
10. Red-carpet separate assets or composition
11. `10-formats-intro-layout-guide.webp`
12. `11-offer-cards-layout-guide.webp`
13. Offer-card decorative assets
14. `13-mid-form-paw-layout-guide.webp`
15. `14-price-layout-guide.webp`
16. `15-final-cta-layout-guide.webp`
17. Form paw asset
18. Price Tiger + notification assets
19. Background texture

## Phase 2 — after the main first pass

1. `07-knows-layout-guide.webp`
2. `08-reason-to-watch-layout-guide.webp`
3. `09-desire-layout-guide.webp`
4. Statement assets
5. Optional dental attention variation
6. Optional pigeon form variation
7. Additional shared decor

---

# Important production instruction

When the coded version is built:

- the **layout guide** tells the implementer how the final section should look;
- the **separate assets** are used to recreate that section responsively;
- the implementation should match the guide on desktop as closely as possible;
- the layout may restack on mobile, but it should still feel designed, not mechanically collapsed.
