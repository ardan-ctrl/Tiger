export type ArtAsset = {
  src: string;
  className: string;
  label?: string;
};

export const heroAssets: ArtAsset[] = [
  { src: "/images/hero/hero-tiger-left.webp", className: "hero__asset hero__asset--tiger", label: "Paper Tiger character" },
  { src: "/images/hero/hero-thought-left.webp", className: "hero__asset hero__asset--thought-left" },
  { src: "/images/hero/hero-dental-scene.webp", className: "hero__asset hero__asset--dental" },
  { src: "/images/hero/hero-shoes-scene.webp", className: "hero__asset hero__asset--shoes" },
  { src: "/images/hero/hero-cash-scene.webp", className: "hero__asset hero__asset--cash" },
  { src: "/images/hero/hero-thought-right.webp", className: "hero__asset hero__asset--thought-right" },
];

export const watchingAssets: ArtAsset[] = [
  { src: "/images/watching/watching-woman-stroller.webp", className: "watching__asset watching__asset--stroller" },
  { src: "/images/watching/watching-man-coffee.webp", className: "watching__asset watching__asset--coffee" },
  { src: "/images/watching/watching-cafe-friends.webp", className: "watching__asset watching__asset--cafe" },
  { src: "/images/watching/watching-man-couch.webp", className: "watching__asset watching__asset--couch" },
  { src: "/images/watching/watching-paw-top.webp", className: "watching__asset watching__asset--paw" },
];

export const attentionAssets: ArtAsset[] = [
  { src: "/images/attention/attention-tiger-red-carpet.webp", className: "attention__asset attention__asset--tiger" },
  { src: "/images/attention/attention-camera-left-bottom.webp", className: "attention__asset attention__asset--camera-left" },
  { src: "/images/attention/attention-camera-right-upper.webp", className: "attention__asset attention__asset--camera-upper" },
  { src: "/images/attention/attention-camera-right-lower.webp", className: "attention__asset attention__asset--camera-lower" },
  { src: "/images/attention/attention-microphone-left.webp", className: "attention__asset attention__asset--mic-left" },
  { src: "/images/attention/attention-microphone-right.webp", className: "attention__asset attention__asset--mic-right" },
];

export const priceNotifications: ArtAsset[] = [
  { src: "/images/price/price-notification-brand-collab.webp", className: "price__note price__note--one" },
  { src: "/images/price/price-notification-available.webp", className: "price__note price__note--two" },
  { src: "/images/price/price-notification-cafe.webp", className: "price__note price__note--three" },
  { src: "/images/price/price-notification-new-inquiry.webp", className: "price__note price__note--four" },
  { src: "/images/price/price-notification-work-together.webp", className: "price__note price__note--five" },
];
