import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Paper Tiger — Animated brand collaborations",
  description: "Sponsored Paper Tiger episodes, brand integrations, and custom animated ads that people actually watch.",
  openGraph: {
    title: "Paper Tiger — Make your brand impossible to scroll past",
    description: "Character-led animated brand collaborations from Paper Tiger.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
