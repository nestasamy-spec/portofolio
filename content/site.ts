import type { SiteContent } from "./types";

/**
 * PROVENANCE
 *
 * - Contact details, the Zain KSA / TheLOCTech / PaySky entries and the
 *   AI-Assisted Design & Delivery card come from AbdelRahman's written brief.
 * - AMANAH, BL80 and Vnu Mngr descriptions, the hero stats and the expertise
 *   copy are transcribed verbatim from the previous site, except the fourth
 *   hero stat: the previous site's "90% client satisfaction" had no source, so
 *   it is replaced with a count of the industries the career section below
 *   actually covers (telecom, fintech, government, healthcare, SaaS).
 * - The Proven Results figures come from the CV.
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

  /*
   * Home and Contact are deliberately absent. Both the nav pill and the footer
   * carry a brand mark that already links to the top, and both already carry a
   * way to get in touch — the pill's call to action, the footer's mail icon.
   */
  nav: [
    { label: "Work", href: "#work" },
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
  ],
  navCta: { label: "Let's work together", href: "#contact" },

  hero: {
    eyebrow: ["Product Design", "Fintech", "Government", "Enterprise", "MENA"],
    headline: "Designing enterprise-grade digital products that scale.",
    intro:
      "I'm AbdelRahman Samy, a Senior Product Designer with 8+ years leading end-to-end design for enterprise and consumer products across telecom, fintech, government, healthcare and SaaS — for teams in the GCC, Turkey, Africa and the US.",
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
      { value: "5", label: "Industries designed for" },
    ],
  },

  // Three featured projects, matching the reference layout. The
  // Cryptocurrency Wallet asset (/work/cryptocurrency-wallet.avif) is in the
  // repo and ready to add as a fourth case study.
  /**
   * AUTHORED for the hanging badge, except `tagline`, which is his own line
   * from the hero annotation. `initials` is the fallback mark, drawn only if
   * `photo` is ever removed.
   *
   * The front deliberately carries no years, sectors or disciplines: the
   * eyebrow and the stat row directly beneath it already say all three, and
   * the reader takes in the badge and those in one glance.
   */
  badge: {
    strap: "AbdelRahman Samy",
    name: "AbdelRahman Samy",
    role: "Senior Product Designer",
    tagline: "Complex challenges. Simple experiences.",
    band: "Product Design · AI",
    photo: {
      src: "/portrait.webp",
      alt: "AbdelRahman Samy at his desk",
    },
    initials: "AS",
    backHeading: "Get in touch",
    links: [
      {
        label: "Email",
        value: "nesta.samy@live.com",
        href: "mailto:nesta.samy@live.com",
        icon: "mail",
      },
      {
        label: "Phone",
        value: "+20 106 001 9016",
        href: "tel:+201060019016",
        icon: "phone",
      },
      {
        label: "LinkedIn",
        value: "in/abdelrahman-samy",
        href: "https://linkedin.com/in/abdelrahman-samy",
        icon: "linkedin",
      },
      {
        label: "Behance",
        value: "AbdelRahmanSamy",
        href: "https://www.behance.net/AbdelRahmanSamy",
        icon: "behance",
      },
    ],
    availability: "Egypt · Open to remote",
    flip: {
      toBack: "Show contact details",
      toFront: "Show profile",
    },
  },

  process: {
    label: "01 — How I work",
    heading: "I turn messy requirements into clear product decisions.",
    body: "I bring business goals, user needs and technical constraints together to create experiences that are clear, practical and ready to ship.",
    cta: { label: "See how I work", href: "#work" },
    steps: [
      {
        number: "01",
        name: "Understand",
        title: "Start with the problem.",
        description:
          "Break down business goals, user needs and constraints before jumping into solutions.",
        icon: "understand",
      },
      {
        number: "02",
        name: "Structure",
        title: "Make complexity easier to navigate.",
        description:
          "Map flows, information and decisions into a product structure that makes sense.",
        icon: "structure",
      },
      {
        number: "03",
        name: "Validate",
        title: "Test the thinking, not just the pixels.",
        description:
          "Use prototypes, feedback and iteration to challenge assumptions and improve the experience.",
        icon: "validate",
      },
      {
        number: "04",
        name: "Deliver",
        title: "Turn decisions into real products.",
        description:
          "Work closely with engineering and stakeholders to make sure the final product holds up beyond the design file.",
        icon: "deliver",
      },
    ],
    /*
     * The render he supplied. It says what the words beside it say — a
     * complicated system, given a structure, arriving at something
     * measurable — and it is the reason the intro is only five columns wide.
     */
    visual: {
      src: "/work/process-dashboard.webp",
      width: 1536,
      height: 1024,
    },
  },

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
    body: "A journey across telecom, fintech, government, healthcare and SaaS products.",
    entries: [
      {
        dates: "Nov 2024 — Present",
        role: "Senior Product Designer",
        company: "Zain KSA",
        location: "Saudi Arabia",
        employmentType: "Full-time",
        workMode: "Remote",
        industry:
          "Telecom operator & digital service provider · 1,000–5,000 employees",
        description:
          "Lead product design for Zain Direct, an enterprise digital workplace unifying communication, ticketing, workflows, and business operations into a single product ecosystem across Web, Android, iOS, and PWA.",
        contributions: [
          "Lead product design for Zain Direct, serving an organization of 1,000+ employees across Web, Android, iOS, and PWA.",
          "Designed the UX architecture for 5 distinct user personas with tailored permissions and workflows, covering 8 core modules including Ticketing, Chat, Threads, Actions, Logs, and Account Management.",
          "Built and scaled a design system adopted across the platform's modules, cutting new-screen design turnaround by an estimated 25–30% and improving front-end consistency for the engineering team.",
          "Ran UX audits and usability evaluations that informed iterative improvements to platform adoption among internal teams.",
          "Designed sales pipeline experiences and customer-facing product presentations supporting new business demos.",
          "Contributed to the ongoing redesign of Zain's main corporate website, starting with the B2B experience before transitioning scope to B2C-facing pages — using Midjourney for visual assets and Figma AI, Figma Make and Lovable to rapidly test layout and interaction concepts, cutting early-stage concept turnaround by an estimated 40–50%.",
        ],
      },
      {
        dates: "Jan 2024 — Present",
        role: "Product Design Lead",
        company: "TheLOCTech",
        location: "Saudi Arabia",
        employmentType: "Freelance",
        workMode: "Remote",
        industry: "Software house · 11–50 employees",
        logo: "/logos/loctech.avif",
        description:
          "Provide strategic product design leadership across enterprise and platform products for regional markets, driving initiatives from product discovery to production while establishing scalable design practices and mentoring design teams.",
        contributions: [
          "Lead product design strategy across a portfolio of 5+ enterprise and platform products for clients across the GCC and Turkey, balancing localization with a unified product vision.",
          "Mentor a design team of 2–4 product designers through structured reviews, raising design QA pass rate on first handoff.",
          "Established shared design systems and reusable component libraries reused across multiple client engagements, reducing design ramp-up time for new projects.",
          "Embedded AI tools (ChatGPT, Claude, Midjourney, Lovable) into the design and prototyping process across client projects — for research synthesis, concept moodboards, and clickable AI-built prototypes — cutting time spent on research, exploration, and early prototyping by an estimated 50–60%.",
          "Used Claude for AI-assisted front-end coding, turning design concepts into functional prototypes faster for client reviews.",
        ],
      },
      {
        dates: "Sep 2022 — Nov 2024",
        role: "Senior Product Designer",
        company: "PaySky Inc.",
        location: "Egypt",
        employmentType: "Full-time",
        workMode: "Hybrid",
        industry: "Fintech & financial services · 51–200 employees",
        logo: "/logos/paysky.avif",
        description:
          "Led product design across a portfolio of fintech, government, and merchant platforms, shaping digital experiences that supported payment modernization, enterprise operations, and public digital transformation initiatives throughout Africa and the Middle East.",
        contributions: [
          "Led product design across a portfolio of 6+ fintech, government, and merchant platforms serving markets across Africa and the Middle East.",
          "Designed the Government Collection System (GCS), a national-scale digital payment collection platform for government entities across African markets.",
          "Designed the Yalla Super App experience across 4 markets (Egypt, UAE, KSA, and Pakistan), aligning a single product vision with local market needs.",
          "Built a reusable design system adopted across the product portfolio, reducing design-to-development handoff time by an estimated 20–25%.",
          "Conducted UX research and usability testing that directly shaped merchant dashboard and payment flow improvements.",
        ],
      },
      {
        dates: "Feb 2022 — Feb 2023",
        role: "UI/UX Designer",
        company: "AMANAH TEKNOLOGIA",
        location: "Kuwait",
        employmentType: "Part-time",
        workMode: "Remote",
        industry: "Software house · 51–200 employees",
        logo: "/logos/amanah.avif",
        description:
          "Designed digital products across healthcare, enterprise, and business domains, transforming complex operational requirements into intuitive user experiences while collaborating with multidisciplinary teams throughout the product development lifecycle.",
        contributions: [
          "Designed end-to-end product experiences across 3+ healthcare, enterprise, and business solutions, simplifying complex clinical and operational workflows into intuitive interfaces.",
          "Delivered responsive web and mobile interfaces with accessibility as a core requirement, working directly with healthcare professionals to validate flows.",
        ],
      },
      {
        dates: "Jan 2022 — Jul 2022",
        role: "UI/UX Designer",
        company: "Fork N Knife",
        location: "Turkey",
        employmentType: "Part-time",
        workMode: "Remote",
        industry: "Food & beverage manufacturing · 11–50 employees",
        description:
          "Designed digital products for startups across the foodtech, cloud kitchen, health & nutrition, and consumer brands sectors, helping transform early-stage ideas into scalable digital experiences.",
        contributions: [
          "Designed a cloud kitchen management platform and customer-facing ordering journey, plus a nutrition and calorie-tracking mobile app, for an early-stage foodtech startup.",
        ],
      },
      {
        dates: "Nov 2021 — Jun 2022",
        role: "UI/UX Designer",
        company: "BL80 Production LLC.",
        location: "United States",
        employmentType: "Freelance",
        workMode: "Remote",
        industry: "Production · 11–50 employees",
        logo: "/logos/bl80.avif",
        description:
          "Designed digital products and brand experiences across fintech, blockchain, and business solutions.",
        contributions: [
          "Designed fintech products including Bitcoin, cryptocurrency, and digital wallet platforms, plus 5+ responsive websites for clients across industries.",
        ],
      },
      {
        dates: "Mar 2017 — May 2021",
        role: "Web Designer",
        company: "Vnu Mngr",
        location: "United States",
        employmentType: "Full-time",
        workMode: "Remote",
        industry: "Software house · 11–50 employees",
        logo: "/logos/vnumngr.avif",
        description:
          "Started as a front-end developer before moving into UI/UX design, where I designed a SaaS platform for restaurants, bars, and nightlife businesses, covering operations, CRM, marketing, and customer engagement.",
        contributions: [
          "Designed a SaaS platform for restaurants, bars, and nightlife venues covering CRM, booking, staff management, and loyalty workflows, supporting white-label deployments across multiple client brands.",
        ],
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
    body: "Estimated impact from recent enterprise and fintech projects.",
    items: [
      { value: "50–60%", label: "Less time on research and early prototyping" },
      { value: "40–50%", label: "Faster early-stage concept turnaround" },
      { value: "25–30%", label: "Faster new-screen design turnaround" },
      { value: "20–25%", label: "Less design-to-development handoff time" },
    ],
  },

  tools: {
    label: "Tools & technologies",
    heading: "Tools I Work With",
    body: "From design to development, I work across the full product lifecycle.",
    items: [
      { name: "Figma", abbr: "Fig" },
      { name: "Sketch", abbr: "Sk" },
      { name: "Adobe CC", abbr: "Ai" },
      { name: "Figma AI", abbr: "AI" },
      { name: "Figma Make", abbr: "Mk" },
      { name: "Lovable", abbr: "Lv" },
      { name: "Midjourney", abbr: "MJ" },
      { name: "ChatGPT", abbr: "GPT" },
      { name: "Claude", abbr: "Cl" },
      { name: "JavaScript", abbr: "JS" },
      { name: "Flutter", abbr: "Fl" },
    ],
  },

  cta: {
    label: "Let's build together",
    heading: "Have a project in mind?",
    body: "I'm always open to discussing new opportunities, interesting projects or just a friendly chat about product design.",
    primary: { label: "Let's talk", href: "mailto:nesta.samy@live.com" },
  },

  cv: { href: "/AbdelRahman-Samy-CV.pdf", label: "Download CV" },

  about: {
    label: "About",
    heading: "Designing for complexity, end to end.",
    summary:
      "Senior Product Designer with 8+ years leading end-to-end design for enterprise and consumer digital products across telecom, fintech, government, healthcare, and SaaS. Track record of building scalable design systems, leading multi-persona enterprise platforms, and mentoring design teams across the GCC, Turkey, Africa, and the US. Comfortable owning a product from discovery through pixel-perfect delivery, and translating complex operational workflows into interfaces engineering teams can build without friction.",
    skills: [
      "User Experience (UX) Design",
      "User Interface (UI) Design",
      "Design Systems",
      "Prototyping & Interaction Design",
      "Information Architecture",
      "Design Thinking & UX Strategy",
      "Cross-functional Collaboration",
      "Design Team Mentorship",
      "AI-Assisted Product Design",
      "Rapid Prototyping with AI Tools",
      "AI-Assisted Development",
    ],
    education: {
      qualification: "Bachelor's Degree in Languages & Translation",
      institution: "October 6 University",
      year: "2012",
    },
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Advanced" },
      { name: "Spanish", level: "Beginner" },
    ],
  },

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
