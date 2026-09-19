"use client";

import { useEffect } from "react";

/**
 * Reveals every `[data-reveal]` element once it enters the viewport.
 *
 * Mounted once at the page root rather than per section, so sections stay
 * server components. Elements are visible by default in CSS when motion is
 * reduced, and the observer is skipped entirely in that case.
 */
export function ScrollReveal() {
  useEffect(() => {
    // Tells the bootstrap script in the document head that the hidden state is
    // claimed, so it stops its fallback from disarming it.
    document.documentElement.dataset.reveal = "on";

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!nodes.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay ?? 0);
          window.setTimeout(() => el.classList.add("is-visible"), delay);
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    nodes.forEach((n) => observer.observe(n));

    // Failsafe: anything at or above the fold once the page has settled is
    // shown regardless, so a missed callback can never strand content.
    const sweep = () => {
      for (const n of nodes) {
        if (n.classList.contains("is-visible")) continue;
        if (n.getBoundingClientRect().top < window.innerHeight) {
          n.classList.add("is-visible");
          observer.unobserve(n);
        }
      }
    };
    const timer = window.setTimeout(sweep, 1200);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}
