/**
 * Content model for the portfolio site.
 *
 * All page copy lives in `content/site.ts` behind these interfaces so a CMS or
 * Supabase layer can be dropped in later without touching any component: swap
 * the static export for an async loader returning the same shapes.
 */

export interface Stat {
  value: string;
  label: string;
  caption: string;
}

export interface ExpertiseCard {
  title: string;
  /** Distinct, card-specific capabilities. Rendered as a bullet list. */
  bullets: string[];
}

export interface CareerEntry {
  company: string;
  role: string;
  /** Display string, e.g. "Nov 2024 – Present". */
  dates: string;
  location: string;
  /** e.g. "Freelance". Omitted when the role is a standard full-time position. */
  employmentType?: string;
  description: string;
  /** Company website, as linked on the original site. */
  href?: string;
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  image?: string;
}

export interface PhilosophyPillar {
  title: string;
  description: string;
}

export interface Result {
  value: string;
  label: string;
}

export interface ContactDetails {
  email: string;
  phone: string;
  linkedin: string;
  linkedinLabel: string;
}

export interface SiteContent {
  nav: { label: string; href: string }[];
  hero: { headline: string; subheadline: string; ctaLabel: string; ctaHref: string };
  stats: Stat[];
  expertise: { heading: string; cards: ExpertiseCard[] };
  career: { heading: string; entries: CareerEntry[] };
  projects: { heading: string; items: Project[] };
  philosophy: { heading: string; quote: string; pillars: PhilosophyPillar[] };
  capabilities: { heading: string; items: string[] };
  results: { heading: string; items: Result[] };
  contact: { heading: string; details: ContactDetails };
}
