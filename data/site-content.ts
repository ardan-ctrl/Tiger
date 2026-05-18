export const navLinks = [
  { href: "#offers", label: "What we do" },
  { href: "#formats", label: "Formats" },
  { href: "#contact", label: "Enquire" },
];

export const socialLinks = {
  instagram: "https://www.instagram.com/papertiger.animation",
  email: "papertigercollabs@gmail.com",
};

export const offerCards = [
  {
    number: "1",
    title: "Put your brand inside Paper Tiger.",
    body: "Your product, place, or service becomes part of a Paper Tiger episode: written into the world, staged with character, and built to feel watchable before it feels like an ad.",
    youGet: ["A sponsored Paper Tiger story", "Brand presence inside the universe", "Social-first animated delivery"],
    weHandle: ["Concept", "Script", "Direction", "Animation", "Final export"],
    asset: "/images/formats/offer-card-tiger.webp",
    assetClassName: "offer-card__art--tiger",
  },
  {
    number: "2",
    title: "Get a custom animated ad made just for you.",
    body: "A standalone Paper Tiger-style animated ad for launches, campaigns, offers, or a brand moment that needs to stop the scroll without becoming another forgettable ad.",
    youGet: ["A custom animated advert", "Commercial message shaped for attention", "A ready-to-post campaign asset"],
    weHandle: ["Idea", "Storyboard", "Voice and pacing", "Animation", "Delivery files"],
    asset: "/images/formats/offer-card-director-chair.webp",
    assetClassName: "offer-card__art--chair",
  },
];

export const inquiryFields = [
  { name: "name", label: "Your name", placeholder: "Jane from Brand Co." },
  { name: "brand", label: "Brand link", placeholder: "https://yourbrand.com" },
  { name: "email", label: "Email", placeholder: "jane@yourbrand.com" },
] as const;
