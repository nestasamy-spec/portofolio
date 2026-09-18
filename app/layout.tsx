import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/** Used only for the handwritten aside in the hero. */
const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    type: "website",
  },
};

/**
 * Arms the scroll-reveal hidden state before first paint, and disarms it if
 * nothing claims it.
 *
 * Hiding content in CSS is only safe while something is guaranteed to unhide
 * it. `ScrollReveal` does that on mount, so the hidden state must not outlive
 * a page where React never mounts — a chunk that fails to load, or a host that
 * serves the export from a path the App Router will not hydrate under. Either
 * way the page would render blank. So the timer drops the class unless
 * `ScrollReveal` has set the flag, and the page falls back to plain content.
 */
const REVEAL_BOOTSTRAP = `(function(){var d=document.documentElement;
d.classList.add('reveal-ready');
setTimeout(function(){if(d.dataset.reveal!=='on')d.classList.remove('reveal-ready')},2000)})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <head>
        {/* Runs before first paint; see the reveal block in globals.css. */}
        <script
          dangerouslySetInnerHTML={{
            __html: REVEAL_BOOTSTRAP,
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
