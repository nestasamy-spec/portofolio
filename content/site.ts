import type { SiteContent } from "./types";

/**
 * PROVENANCE
 *
 * - `contact`, `career` entries a–c, `expertise` and the AI-Assisted card are
 *   authored from AbdelRahman's written spec and are final.
 * - Everything else (hero, stats, projects, philosophy, capabilities, results,
 *   and career entries d–f) is transcribed from a text-only fetch of the live
 *   site, which summarises rather than reproducing the DOM verbatim. These are
 *   marked `NEEDS VERBATIM CHECK` and must be re-confirmed against the live
 *   site before launch.
 */

export const site: SiteContent = {
  nav: [
    { label: "Expertise", href: "#expertise" },
    { label: "Career Journey", href: "#career" },
    { label: "Projects", href: "#projects" },
    { label: "Design Philosophy", href: "#philosophy" },
    { label: "Get in touch", href: "#contact" },
  ],

  // NEEDS VERBATIM CHECK
  hero: {
    headline: "Designing enterprise-grade digital products that scale.",
    subheadline:
      "Senior Product Designer helping organizations turn complex systems into usable, measurable business outcomes.",
    ctaLabel: "Get in touch",
    ctaHref: "#contact",
  },

  // NEEDS VERBATIM CHECK
  stats: [
    { value: "8+", label: "Years Experience", caption: "Enterprise & SaaS products" },
    { value: "30+", label: "Products Shipped", caption: "across regulated industries" },
    { value: "20+", label: "Clients", caption: "across MENA & global markets" },
    { value: "90%", label: "Client satisfaction", caption: "internal NPS & feedback" },
  ],

  // Rewritten per spec: the live site repeats one generic bullet list under
  // every card. Each card now carries bullets specific to its own heading.
  expertise: {
    heading: "Areas of Expertise",
    cards: [
      {
        title: "Product Strategy",
        bullets: [
          "Product vision and roadmap definition",
          "Stakeholder alignment workshops",
          "Translating business goals into design direction",
          "Opportunity sizing and prioritisation",
          "Success metrics and measurement plans",
        ],
      },
      {
        title: "UX/UI Design",
        bullets: [
          "User research and journey mapping",
          "Information architecture",
          "Interaction and interface design",
          "Prototyping and usability testing",
          "Accessibility and inclusive design",
        ],
      },
      {
        title: "Enterprise Systems",
        bullets: [
          "Multi-role, multi-permission platforms",
          "Admin consoles and back-office tooling",
          "Complex data tables and dashboards",
          "Workflow and approval-chain design",
          "Migration from legacy interfaces",
        ],
      },
      {
        title: "Innovation",
        bullets: [
          "Emerging interaction patterns",
          "Concept exploration and rapid prototyping",
          "Design sprints and discovery workshops",
          "Proof-of-concept validation",
          "Technology scouting for product fit",
        ],
      },
      {
        title: "Design Systems",
        bullets: [
          "Component library architecture",
          "Design tokens and theming",
          "Documentation and adoption guidelines",
          "Cross-team governance and contribution",
          "Design-to-code handoff pipelines",
        ],
      },
      {
        title: "Fintech Platforms",
        bullets: [
          "Payments and transaction flows",
          "Digital wallets and merchant tools",
          "KYC, onboarding and compliance journeys",
          "Financial dashboards and reconciliation",
          "Regulated, multi-market rollouts",
        ],
      },
      {
        title: "AI-Assisted Design & Delivery",
        bullets: [
          "Using Figma AI, Lovable, Midjourney, ChatGPT, and Claude to speed up ideation, prototyping, and parts of the front-end build.",
        ],
      },
    ],
  },

  career: {
    heading: "Career Journey",
    entries: [
      {
        company: "Zain KSA",
        role: "Senior Product Designer",
        dates: "Nov 2024 – Present",
        location: "Saudi Arabia",
        description:
          "Lead product design for Zain Direct, an enterprise digital workplace unifying communication, ticketing, and operations for 1,000+ employees across Web, Android, iOS, and PWA. Also contribute to the redesign of Zain's main corporate website — starting with the B2B experience before extending to B2C — using AI image-generation and design tools (Midjourney, Figma AI, Figma Make, Lovable) to speed up visuals and early concepts.",
      },
      {
        company: "TheLOCTech",
        role: "Product Design Lead",
        dates: "Jan 2024 – Present",
        location: "Saudi Arabia",
        employmentType: "Freelance",
        description:
          "Own product design strategy across a portfolio of 5+ enterprise and platform products for clients in the GCC and Turkey, leading initiatives from discovery to production and mentoring designers. Embed AI tools (ChatGPT, Claude, Midjourney, Lovable) into research, moodboarding, and prototyping — and use Claude for AI-assisted front-end coding to turn concepts into functional prototypes faster.",
      },
      {
        company: "PaySky Inc.",
        role: "Senior Product Designer",
        dates: "Sep 2022 – Nov 2024",
        location: "Egypt",
        description:
          "Designed fintech and payment solutions used across multiple countries, including the Government Collection System (GCS) for African markets. Led UI/UX for the Yalla Super App across Egypt, UAE, KSA, and Pakistan, delivering merchant and consumer experiences through user-centered design and cross-functional collaboration.",
      },
      {
        company: "AMANAH TEKNOLOGIA",
        role: "UI/UX Designer",
        dates: "Feb 2022 – Feb 2023",
        location: "Kuwait",
        // NEEDS VERBATIM CHECK — keep as on the live site
        description:
          "Designed healthcare software focusing on accessibility and EHR interoperability.",
      },
      {
        company: "BL80 Production LLC",
        role: "UI/UX Designer",
        dates: "Nov 2021 – Jun 2022",
        location: "United States",
        // NEEDS VERBATIM CHECK — keep as on the live site
        description: "Led UI/UX for crypto wallet and NFT marketplace.",
      },
      {
        company: "Vnu Mngr",
        role: "Web Designer",
        dates: "Mar 2017 – May 2021",
        location: "United States",
        // NEEDS VERBATIM CHECK — keep as on the live site
        description: "Led design for restaurant/venue management software.",
      },
    ],
  },

  // NEEDS VERBATIM CHECK
  projects: {
    heading: "Flagship Projects",
    items: [
      {
        title: "Government Collection System",
        description: "National-scale platform for public revenue collection",
      },
      {
        title: "Merchant Super App",
        description: "Multi-service merchant platform for payments and operations",
      },
      {
        title: "Digital Wallet App (SDK)",
        description: "Secure transactions and financial services across MENA",
      },
    ],
  },

  // NEEDS VERBATIM CHECK
  philosophy: {
    heading: "Design Philosophy",
    quote: "Design is a decision-making discipline.",
    pillars: [
      {
        title: "User-Centered",
        description:
          "Understanding behavior and pain points in high-stakes environments",
      },
      {
        title: "Business-Driven",
        description: "Connecting design to business goals and measurable outcomes",
      },
      {
        title: "Built for Scale",
        description: "Prioritizing systems that grow and adapt",
      },
      {
        title: "Continuous Innovation",
        description: "Exploring new patterns and technologies",
      },
    ],
  },

  // NEEDS VERBATIM CHECK
  capabilities: {
    heading: "Capabilities",
    items: [
      "Product Strategy & UX Architecture",
      "Enterprise & Fintech Product Design",
      "Design Systems & Scalable Components",
      "Complex Workflows & Dashboards",
      "Cross-functional Collaboration",
      "Usability Testing & Iteration",
    ],
  },

  // NEEDS VERBATIM CHECK
  results: {
    heading: "Proven Results",
    items: [
      { value: "+38%", label: "improvement in operational efficiency" },
      { value: "50%", label: "reduction in critical user errors" },
      { value: "10k+", label: "daily active users across systems" },
    ],
  },

  contact: {
    heading: "Start a project",
    details: {
      email: "nesta.samy@live.com",
      phone: "+20 106 001 9016",
      linkedin: "https://linkedin.com/in/abdelrahman-samy",
      linkedinLabel: "linkedin.com/in/abdelrahman-samy",
    },
  },
};
