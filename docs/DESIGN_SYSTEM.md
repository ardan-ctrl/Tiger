# Paper Tiger Landing Page — Design System

This document defines the **active visual system** for the Paper Tiger landing page.

It is the project’s own implementation system. It contains only the rules that are relevant to **Paper Tiger** and should be used directly during coding.

The **approved Paper Tiger mockups and layout guides are the visual authority**. When a token or guideline needs interpretation, match the approved screens.

---

## 1. Typography

### 1.1 Live implementation font

The live coded site uses:

```txt
Inter
```

Use **Inter** for all live HTML typography:

- hero title;
- major section headlines;
- supporting subheads;
- offer card headings;
- body copy;
- navigation;
- form labels, field text, buttons, and utility copy;
- footer utility text.

Do not introduce unrelated live web fonts unless explicitly directed.

### 1.2 Mockup-led weight policy

The approved Paper Tiger mockups are visually strong and headline-led.

Use:

```txt
Inter 800 — default first pass for major headlines and bold hero statements, where this best matches the mockups.
Inter 500 — use where 800 becomes excessive, too dense, or less faithful to a specific approved composition.
Inter 400 — body copy and lighter utility text where appropriate.
```

This is a **designer-led judgment rule**, not a rigid weight matrix. Tune section by section against the approved mockups.

### 1.3 Type scale anchors

Use these as structural anchors, not inflexible production values:

```txt
body-lg:    16px / line-height 1 / letter-spacing -0.3px
subheading: 24px / line-height 1.2 / letter-spacing 1px
display:    95px / line-height 1 / letter-spacing -0.6px
```

Final responsive type sizing should preserve:

- strong headline presence;
- tight, confident display rhythm;
- legibility on tablet and mobile;
- fidelity to the approved Paper Tiger layouts.

### 1.4 Handwritten lettering

Handwritten and pencil-style text remains part of the artwork system, not the coded font system.

This includes:

- speech / thought bubbles;
- sketched reactions;
- decorative handwritten connectors such as the sketched `and`, if retained.

Do not replace these with a generic handwriting web font unless explicitly instructed.

---

## 2. Color system

### 2.1 Core rule

Paper Tiger is a **warm paper-world site**, not a cool grey UI canvas.

The approved Paper Tiger mockups determine the final warmth, restraint, and hierarchy.

### 2.2 Active production palette

```txt
Ink Black      #000000 — primary text, major headings, key borders, black buttons
Muted Ash      #bbbab7 — subtle dividers, quiet borders where black is too strong
Graphite       #8d8c8a — secondary text only where a softer hierarchy is needed
Crayon Yellow  #ecca53 — rare controlled accent only when supported by approved mockups
```

### 2.3 Background

Primary background source:

```txt
public/images/background/paper-texture.webp
```

The CSS fallback background should be chosen to visually match the **warm paper tone** of the approved Paper Tiger mockups.

Do **not** default the whole page to a cooler grey canvas if that makes the site colder or greyer than the approved screens.

### 2.4 UI color behaviour

Forms and interface elements should follow the current Paper Tiger mockup logic:

- text: `Ink Black #000000`;
- input borders: `Ink Black #000000`, or `Muted Ash #bbbab7` where a softer edge is visibly closer to the mockup;
- primary submit button: black fill with light text;
- avoid turning the page into a yellow-button system unless an approved screen explicitly calls for it.

### 2.5 Accent restraint

`Crayon Yellow #ecca53` may be used only as a controlled micro-accent, for example:

- a small selected-state chip;
- a tiny highlighted marker;
- a limited active state.

It should not become a dominant CTA color by default.

### 2.6 Colors not active in this landing page

These colors are **not active** for the current Paper Tiger landing page unless a future approved section explicitly introduces them:

```txt
Deep Violet   #2d5193
Forest Green  #054331
Artisan Red   #a5001b
```

---

## 3. Spacing and density

### 3.1 Density principle

The site should feel:

```txt
comfortable, spacious, composed
```

Use the spacing system to preserve a controlled page rhythm while matching the exact visual logic of the approved Paper Tiger mockups.

### 3.2 Spacing token pool

Keep this scale available in implementation:

```txt
6 / 9 / 10 / 11 / 14 / 15 / 20 / 22 / 30 / 48 / 60 px
```

Useful semantic anchors:

```txt
22px — default internal gap between related UI elements
14px — compact padding / micro-card padding reference
48px — generous horizontal breathing room for strong CTA areas when needed
60px — macro block spacing reference where compatible with the section mockup
```

These values should help systematize implementation, not override approved layout guides.

---

## 4. Shapes, borders, and surfaces

### 4.1 Border discipline

Use simple borders rather than decorative interface noise:

- prefer `1px` borders;
- use `Ink Black #000000` or `Muted Ash #bbbab7`;
- do not introduce extra border colors or arbitrary weights unless a specific approved mockup requires it.

### 4.2 Radius policy

Paper Tiger uses soft, approachable UI geometry.

- use a shared radius system rather than random one-off corners;
- treat `30px` as a useful reference radius for pill-like UI where it matches the approved mockup;
- do **not** blindly force every input, card, or button to `30px` if the Paper Tiger screen uses a different proportion.

### 4.3 Surface treatment

The site should avoid glossy app-like elevation.

Prefer:

- paper-on-paper separation;
- subtle borders;
- spacing hierarchy;
- restrained shadows only if they are already visible in the approved mockup and needed to match it.

---

## 5. Components

### 5.1 Forms

The live forms must be real HTML/CSS, not images.

Guidance:

- fields should stay light and clearly outlined;
- labels and placeholder text should be readable but visually secondary to the section headline;
- submit buttons should be decisive, black, and high-contrast, matching the approved mockups;
- illustrated paw overlays may interact visually with the button, but must not compromise usability.

### 5.2 Offer cards

Apply a simple, readable surface system to the Paper Tiger offer cards:

- calm paper-like panels;
- strong hierarchy;
- no generic SaaS pricing-card language;
- preserve the approved order of title / explanation / `You get` / `We handle`.

### 5.3 Icons and small UI marks

- Interface icons should be simple, outlined, and monochromatic when used.
- Illustrated Paper Tiger marks remain artwork assets, not generic UI icons.
- Avoid glossy icon packs or colored interface decoration.

---

## 6. Implementation discipline

When coding:

- define color and spacing tokens centrally through CSS custom properties or a theme layer;
- use semantic roles instead of scattering raw hex values everywhere;
- use Inter through the project font setup;
- tune final scale, weight, warmth, and spacing against the approved Paper Tiger mockups.

The design system exists to make implementation coherent — **not to erase the art direction already established in the mockups**.
