import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paper Tiger — Brand Collaborations",
  description: "Sponsored Paper Tiger episodes, brand integrations and custom animated ads.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
