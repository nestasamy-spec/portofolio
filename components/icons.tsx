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
