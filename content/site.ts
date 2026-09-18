import type { SiteContent } from "./types";

/**
 * PROVENANCE
 *
 * - Contact details, the Zain KSA / TheLOCTech / PaySky entries and the
 *   AI-Assisted Design & Delivery card come from AbdelRahman's written brief.
 * - AMANAH, BL80 and Vnu Mngr descriptions, the stats, results and expertise
 *   copy are transcribed verbatim from the previous site.
 * - Section framing ("Selected Work", "What I Design", …) follows the reference
 *   design. Items marked AUTHORED below were written for this build because the
 *   reference has a slot the previous site had no copy for.
 */

export const site: SiteContent = {
  meta: {
    name: "AbdelRahman Samy",
    role: "Senior Product Designer",
    title: "AbdelRahman Samy — Senior Product Designer | Fintech & Enterprise",
    description:
      "Senior Product Designer with 8+ years designing fintech, government and enterprise products across MENA and global markets.",
  },

  nav: [
    { label: "Home", href: "#top" },
    { label: "Work", href: "#work" },
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  navCta: { label: "Let's work together", href: "#contact" },

  hero: {
    eyebrow: ["Product Design", "Fintech", "Government", "Enterprise", "MENA"],
    headline: "Designing enterprise-grade digital products that scale.",
    intro:
      "I'm AbdelRahman Samy, a Senior Product Designer with 8+ years of experience designing digital products for fintech, government and enterprise companies across MENA and global markets.",
    primaryCta: { label: "View selected work", href: "#work" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
    annotation: "Complex challenges. Simple experiences.",
    image: {
      src: "/work/hero-devices.webp",
      alt: "Government Collection System dashboards across desktop and mobile",
      width: 1215,
      height: 842,
    },
    stats: [
      { value: "8+", label: "Years of experience" },
      { value: "30+", label: "Products shipped" },
      { value: "20+", label: "Clients across MENA & global markets" },
      { value: "90%", label: "Client satisfaction" },
    ],
  },

  // Three featured projects, matching the reference layout. The
  // Cryptocurrency Wallet asset (/work/cryptocurrency-wallet.avif) is in the
  // repo and ready to add as a fourth case study.
  work: {
    label: "Featured work",
    heading: "Selected Work",
    items: [
      {
        tags: ["Government", "Payments"],
        title: "Government Collection System",
        description:
          "National-scale platform for managing government services, fees and digital payments across African markets.",
        image: "/work/government-collection-system.avif",
      },
      {
        tags: ["Fintech", "Merchants"],
        title: "Merchant Super App",
        description:
          "Payments, commerce, disbursements and financial management for merchants across MENA.",
        image: "/work/merchant-super-app.avif",
      },
      {
        tags: ["Fintech", "SDK"],
        title: "Digital Wallet & SDK",
        description:
          "A modular SDK-first wallet ecosystem for secure transactions, bill payments and multi-market financial services.",
        image: "/work/digital-wallet-sdk.avif",
      },
    ],
  },

  expertise: {
    label: "Expertise",
    heading: "What I Design",
    body: "I help companies turn complex business requirements into simple, scalable and human-centered experiences.",
    items: [
      {
        title: "Product Strategy",
        description:
          "Defining product vision, aligning stakeholders, and translating business goals into clear design direction.",
        icon: "strategy",
      },
      {
        title: "UX/UI Design",
        description:
          "Designing intuitive, accessible interfaces for complex systems used daily by large user bases.",
        icon: "design",
      },
      {
        title: "Enterprise Systems",
        description:
          "Building scalable design solutions for multi-role, multi-permission, regulation-heavy platforms.",
        icon: "systems",
      },
      {
        title: "Design Systems",
        description:
          "Creating and evolving design systems that support speed, consistency, and cross-team collaboration.",
        icon: "tokens",
      },
      {
        title: "Innovation",
        description:
          "Exploring new interaction patterns and emerging technologies to solve real user and business problems.",
        icon: "spark",
      },
      {
        title: "Fintech Platforms",
        description:
          "Payments, wallets, merchant tools, and financial workflows designed for accuracy, trust, and scale.",
        icon: "wallet",
      },
      {
        title: "AI-Assisted Design & Delivery",
        description:
          "Using Figma AI, Lovable, Midjourney, ChatGPT, and Claude to speed up ideation, prototyping, and parts of the front-end build.",
        icon: "ai",
      },
    ],
  },

  career: {
    label: "Experience",
    heading: "Career Journey",
    body: "A journey across fintech, telecom, government and enterprise products.",
    entries: [
      {
        dates: "Nov 2024 — Present",
        role: "Senior Product Designer",
        company: "Zain KSA",
        location: "Saudi Arabia",
        description:
          "Lead product design for Zain Direct, an enterprise digital workplace unifying communication, ticketing, and operations for 1,000+ employees across Web, Android, iOS, and PWA. Also contribute to the redesign of Zain's main corporate website — starting with the B2B experience before extending to B2C — using AI image-generation and design tools (Midjourney, Figma AI, Figma Make, Lovable) to speed up visuals and early concepts.",
      },
      {
        dates: "Jan 2024 — Present",
        role: "Product Design Lead",
        company: "TheLOCTech",
        location: "Saudi Arabia",
        employmentType: "Freelance",
        logo: "/logos/loctech.avif",
        description:
          "Own product design strategy across a portfolio of 5+ enterprise and platform products for clients in the GCC and Turkey, leading initiatives from discovery to production and mentoring designers. Embed AI tools (ChatGPT, Claude, Midjourney, Lovable) into research, moodboarding, and prototyping — and use Claude for AI-assisted front-end coding to turn concepts into functional prototypes faster.",
      },
      {
        dates: "Sep 2022 — Nov 2024",
        role: "Senior Product Designer",
        company: "PaySky Inc.",
        location: "Egypt",
        logo: "/logos/paysky.avif",
        description:
          "Designed fintech and payment solutions used across multiple countries, including the Government Collection System (GCS) for African markets. Led UI/UX for the Yalla Super App across Egypt, UAE, KSA, and Pakistan, delivering merchant and consumer experiences through user-centered design and cross-functional collaboration.",
      },
      {
        dates: "Feb 2022 — Feb 2023",
        role: "UI/UX Designer",
        company: "AMANAH TEKNOLOGIA",
        location: "Kuwait",
        logo: "/logos/amanah.avif",
        description:
          "Designed healthcare software with a strong focus on accessibility, inclusivity, and interoperability with existing EHR systems. Worked directly with doctors and technical teams to ensure real-world usability.",
      },
      {
        dates: "Nov 2021 — Jun 2022",
        role: "UI/UX Designer",
        company: "BL80 Production LLC",
        location: "United States",
        logo: "/logos/bl80.avif",
        description:
          "Led UI/UX for a crypto wallet and NFT marketplace, balancing usability with security constraints such as authentication and key management.",
      },
      {
        dates: "Mar 2017 — May 2021",
        role: "Web Designer",
        company: "Vnu Mngr",
        location: "United States",
        logo: "/logos/vnumngr.avif",
        description:
          "Leading the design of brand-driven management and CRM software for restaurants, bars, and nightlife venues, delivering cohesive brand identities, motion-enhanced interfaces, and user-centered tools for sales, marketing, and operations.",
      },
    ],
  },

  philosophy: {
    label: "Design philosophy",
    heading: "Design is a decision-making discipline.",
    principles: [
      "User-centered.",
      "Business-driven.",
      "Built for scale.",
      "Continuously evolving.",
    ],
    // AUTHORED — the reference has a paragraph slot; built from the previous
    // site's philosophy pillars.
    body: "Design is not about visuals, it's about making informed decisions under constraints. I combine user behaviour, business goals and technical realities to build systems that stay usable as products and organisations grow.",
  },

  results: {
    label: "Proven results",
    heading: "Turning complex challenges into measurable impact.",
    body: "Selected results from recent projects.",
    items: [
      { value: "+38%", label: "Operational efficiency" },
      { value: "50%", label: "Reduction in critical user errors" },
      { value: "10k+", label: "Daily active users" },
      { value: "90%", label: "Client satisfaction" },
    ],
  },

  tools: {
    label: "Tools & technologies",
    heading: "Tools I Work With",
    body: "From design to development, I work across the full product lifecycle.",
    // AUTHORED — drawn from the tools named in AbdelRahman's brief.
    items: [
      { name: "Figma", abbr: "Fig" },
      { name: "Figma AI", abbr: "AI" },
      { name: "Figma Make", abbr: "Mk" },
      { name: "Midjourney", abbr: "MJ" },
      { name: "ChatGPT", abbr: "GPT" },
      { name: "Claude", abbr: "Cl" },
      { name: "Lovable", abbr: "Lv" },
      { name: "Webflow", abbr: "Wf" },
      { name: "Next.js", abbr: "N" },
      { name: "React", abbr: "Re" },
    ],
  },

  cta: {
    label: "Let's build together",
    heading: "Have a project in mind?",
    body: "I'm always open to discussing new opportunities, interesting projects or just a friendly chat about product design.",
    primary: { label: "Let's talk", href: "mailto:nesta.samy@live.com" },
  },

  cv: { href: "", label: "Download CV" },

  contact: {
    email: "nesta.samy@live.com",
    phone: "+20 106 001 9016",
    linkedin: "https://linkedin.com/in/abdelrahman-samy",
    linkedinLabel: "linkedin.com/in/abdelrahman-samy",
  },

  footer: {
    tagline: "Designing a better digital tomorrow.",
    copyright: "© 2026 AbdelRahman Samy. All rights reserved.",
  },
};
