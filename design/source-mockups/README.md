# Source Mockups

Place approved full-section Paper Tiger mockups in this folder before running asset extraction.

Recommended filenames match the export checklist, for example:

```txt
01-hero-layout-guide.webp
02-services-layout-guide.webp
03-watching-layout-guide.webp
04-scrolling-layout-guide.webp
05-attention-red-carpet-layout-guide.webp
10-formats-intro-layout-guide.webp
11-offer-cards-layout-guide.webp
13-mid-form-paw-layout-guide.webp
14-price-layout-guide.webp
15-final-cta-layout-guide.webp
```

These files are source references. Do not render them directly on the live site. Use:

```bash
npm run extract:mockups
```

to cut transparent production assets into `public/images/...` and generate exact CSS placement metadata in `styles/generated-art-layout.css`.
