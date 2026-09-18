import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AbdelRahman Samy | Senior Product & UI/UX Designer | Fintech & SaaS",
  description:
    "Senior Product Designer helping organizations turn complex systems into usable, measurable business outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
