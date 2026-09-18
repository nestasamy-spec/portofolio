/**
 * Content model for the portfolio.
 *
 * All copy lives in `content/site.ts` behind these interfaces so a CMS or
 * Supabase layer can replace the static export later without touching a single
 * component: swap the export for an async loader returning the same shapes.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Hero {
  eyebrow: string[];
  headline: string;
  intro: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
  annotation: string;
  /** Lead visual, shown alongside the copy. */
  image: { src: string; alt: string; width: number; height: number };
  stats: Stat[];
}

export interface WorkItem {
  /** Small categorisation eyebrow, e.g. ["Government", "Payments"]. */
  tags: string[];
  title: string;
  description: string;
  image: string;
  href?: string;
}

export interface ExpertiseItem {
  title: string;
  description: string;
  /** Key into the icon map in `components/icons.tsx`. */
  icon: string;
}

export interface CareerEntry {
  dates: string;
  role: string;
  company: string;
  location: string;
  /** "Full-time" | "Freelance" | "Part-time", as stated on the CV. */
  employmentType: string;
  /** "Remote" | "Hybrid" | "On-site". */
  workMode: string;
  /** Sector and company size, as stated on the CV. */
  industry?: string;
  description: string;
  /** "Key contributions" from the CV, rendered as a list. */
  contributions: string[];
  logo?: string;
}

export interface Result {
  value: string;
  label: string;
}

export interface Tool {
  name: string;
  /** Short form used inside the tile mark. */
  abbr: string;
}

export interface Education {
  qualification: string;
  institution: string;
  year: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface SectionIntro {
  label: string;
  heading: string;
  body?: string;
  cta?: NavLink;
}

/** One contact row on the back of the lanyard badge. */
export interface BadgeLink {
  /** Small caps label above the value, e.g. "Email". */
  label: string;
  /** What the reader sees, e.g. "in/abdelrahman-samy". */
  value: string;
  /** Empty hides the row, so a profile can be listed before its URL is known. */
  href: string;
  icon: "mail" | "phone" | "linkedin" | "behance";
}

/**
 * The hanging ID badge in the hero. It flips on click, so it carries two
 * faces: the front introduces, the back is the contact card.
 */
export interface Badge {
  /** Printed down the lanyard strap; repeated to fill it. */
  strap: string;
  name: string;
  /** One or two short sentences on the front. */
  bio: string;
  /** Circular portrait. Omit and the badge falls back to `initials`. */
  photo?: { src: string; alt: string };
  initials: string;
  /** The two lines at the foot of the front face. */
  role: string;
  experience: string;
  backHeading: string;
  links: BadgeLink[];
  /** Foot of the back face, e.g. "Egypt · Open to remote". */
  availability: string;
  /** Labels the flip control, so the action is announced either way round. */
  flip: { toBack: string; toFront: string };
}

export interface SiteContent {
  meta: { name: string; role: string; title: string; description: string };
  nav: NavLink[];
  navCta: NavLink;
  hero: Hero;
  badge: Badge;
  work: SectionIntro & { items: WorkItem[] };
  expertise: SectionIntro & { items: ExpertiseItem[] };
  career: SectionIntro & { entries: CareerEntry[] };
  philosophy: {
    label: string;
    heading: string;
    principles: string[];
    body: string;
  };
  results: SectionIntro & { items: Result[] };
  tools: SectionIntro & { items: Tool[] };
  cta: { label: string; heading: string; body: string; primary: NavLink };
  /**
   * CV download. `href` is empty until a PDF is added — every Download CV
   * button is hidden while it is, so the site never links to a missing file.
   * To enable: drop the file at `public/cv.pdf` and set href to "/cv.pdf".
   */
  cv: { href: string; label: string };
  about: {
    label: string;
    heading: string;
    summary: string;
    skills: string[];
    education: Education;
    languages: Language[];
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    linkedinLabel: string;
  };
  footer: { tagline: string; copyright: string };
}
