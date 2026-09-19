import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Shared geometry so every icon sits on the same optical grid. */
function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Icon>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 4v11" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M5 19h14" />
    </Icon>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.71h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.68c0-1.35-.03-3.09-1.96-3.09-1.96 0-2.26 1.47-2.26 2.99V21h-4V9Z" />
    </svg>
  );
}

/** Filled like the LinkedIn mark, so the two read as a pair in the badge. */
export function BehanceIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 5c1.2 0 2.1.2 2.72.63.62.42.93 1.1.93 2.03 0 .55-.14 1.02-.41 1.4-.27.38-.66.68-1.18.9.7.2 1.23.55 1.58 1.05.35.5.52 1.1.52 1.8 0 .58-.11 1.08-.33 1.5-.22.42-.53.77-.92 1.03-.39.27-.84.46-1.36.58-.51.12-1.05.18-1.6.18H1V5h5.94ZM6.6 9.9c.47 0 .86-.11 1.17-.34.3-.23.45-.6.45-1.1 0-.29-.05-.52-.15-.7a1.1 1.1 0 0 0-.42-.42 1.7 1.7 0 0 0-.6-.2c-.23-.04-.47-.06-.72-.06H3.6v2.82h3Zm.16 5.15c.28 0 .54-.03.79-.08.25-.06.47-.15.65-.28.19-.13.34-.3.45-.52.11-.22.17-.5.17-.84 0-.66-.19-1.14-.56-1.42-.37-.29-.87-.43-1.48-.43H3.6v3.57h3.16ZM15.9 15c.35.35.87.52 1.54.52.48 0 .9-.12 1.24-.36.35-.24.56-.5.64-.76h2.2c-.36 1.1-.9 1.88-1.63 2.35-.73.47-1.62.7-2.66.7-.72 0-1.37-.11-1.95-.35a4.1 4.1 0 0 1-1.48-1 4.4 4.4 0 0 1-.93-1.55 5.7 5.7 0 0 1-.33-1.98c0-.7.11-1.35.34-1.95a4.5 4.5 0 0 1 2.44-2.6 4.9 4.9 0 0 1 1.91-.37c.79 0 1.48.15 2.07.46.59.3 1.07.72 1.45 1.24.37.52.64 1.11.8 1.78.17.66.23 1.36.18 2.08h-6.65c.04.78.23 1.34.58 1.69l.02.1Zm2.7-4.6c-.28-.31-.75-.48-1.36-.48-.4 0-.74.07-1 .21-.27.14-.48.31-.64.51a1.9 1.9 0 0 0-.34.64c-.06.22-.1.42-.12.6h4.12c-.12-.64-.33-1.12-.66-1.48ZM15 5.9h5.13v1.35H15V5.9Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </Icon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6.5 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
    </Icon>
  );
}

/* ---- Expertise icons, keyed by `ExpertiseItem.icon` ---- */

const expertiseIcons = {
  strategy: (props: IconProps) => (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </Icon>
  ),
  design: (props: IconProps) => (
    <Icon {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M3.5 9.5h17M9.5 9.5v11" />
    </Icon>
  ),
  systems: (props: IconProps) => (
    <Icon {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.6" />
      <rect x="14" y="3" width="7" height="7" rx="1.6" />
      <rect x="3" y="14" width="7" height="7" rx="1.6" />
      <rect x="14" y="14" width="7" height="7" rx="1.6" />
    </Icon>
  ),
  tokens: (props: IconProps) => (
    <Icon {...props}>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M12 12l8-4.5M12 12v9M12 12 4 7.5" />
    </Icon>
  ),
  spark: (props: IconProps) => (
    <Icon {...props}>
      <path d="M12 3v6M12 15v6M4.9 7.1l4.2 4.2M14.9 12.7l4.2 4.2M3 12h6M15 12h6M4.9 16.9l4.2-4.2M14.9 11.3l4.2-4.2" />
    </Icon>
  ),
  wallet: (props: IconProps) => (
    <Icon {...props}>
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <path d="M3 10h18" />
      <circle cx="17" cy="14.5" r="1.2" />
    </Icon>
  ),
  ai: (props: IconProps) => (
    <Icon {...props}>
      <path d="m12 3 1.9 4.9L19 9.8l-4.2 3.3.6 5.2-3.4-2.6-3.4 2.6.6-5.2L5 9.8l5.1-1.9L12 3Z" />
      <path d="M19 17.5v3M17.5 19h3" />
    </Icon>
  ),
} as const;

export type ExpertiseIconName = keyof typeof expertiseIcons;

export function ExpertiseIcon({
  name,
  ...props
}: IconProps & { name: string }) {
  const Cmp = expertiseIcons[name as ExpertiseIconName] ?? expertiseIcons.spark;
  return <Cmp {...props} />;
}

/* ---- Process icons, keyed by `ProcessStep.icon` ---- */

const processIcons = {
  /** A lens over the problem, before anything is drawn. */
  understand: (props: IconProps) => (
    <Icon {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.4 15.4 4.1 4.1" />
      <path d="M7.8 9.4h5.4M7.8 12.4h3.2" />
    </Icon>
  ),
  /** Many things resolved into one order. */
  structure: (props: IconProps) => (
    <Icon {...props}>
      <rect x="8.5" y="3" width="7" height="5" rx="1.4" />
      <rect x="3" y="16" width="6" height="5" rx="1.4" />
      <rect x="15" y="16" width="6" height="5" rx="1.4" />
      <path d="M12 8v4M6 16v-2.5h12V16" />
    </Icon>
  ),
  /** The loop: try it, learn from it, change it. */
  validate: (props: IconProps) => (
    <Icon {...props}>
      <path d="M20 12a8 8 0 1 1-2.6-5.9" />
      <path d="M20.5 4.5V9h-4.5" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </Icon>
  ),
  /** Out of the design file and into the build. */
  deliver: (props: IconProps) => (
    <Icon {...props}>
      <path d="M4 14v4.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V14" />
      <path d="M12 3.5v10" />
      <path d="m8.2 7.3 3.8-3.8 3.8 3.8" />
    </Icon>
  ),
} as const;

export type ProcessIconName = keyof typeof processIcons;

export function ProcessIcon({ name, ...props }: IconProps & { name: string }) {
  const Cmp = processIcons[name as ProcessIconName] ?? processIcons.understand;
  return <Cmp {...props} />;
}
