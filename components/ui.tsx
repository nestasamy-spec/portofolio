import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "invert" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-white px-5 py-3 hover:bg-ink-soft",
  outline:
    "border border-line bg-white text-ink px-5 py-3 hover:border-ink hover:bg-surface-alt",
  invert: "bg-white text-ink px-5 py-3 hover:bg-white/90",
  ghost:
    "border border-white/25 text-white px-5 py-3 hover:border-white/60 hover:bg-white/5",
};

export function Button({
  href,
  variant = "solid",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  const isMail = href.startsWith("mailto:") || href.startsWith("tel:");
  const isPdf = href.endsWith(".pdf");
  const external = href.startsWith("http");
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external || isMail || isPdf) {
    // PDFs and external destinations open in a new tab so the page is not lost.
    const newTab = external || isPdf;
    return (
      <a
        href={href}
        className={cls}
        {...(newTab ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/**
 * The left-hand heading block used by most sections: small label, large
 * heading, optional supporting line and call to action.
 */
export function SectionHeading({
  label,
  heading,
  body,
  children,
  className = "",
}: {
  label: string;
  heading: string;
  body?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="eyebrow">{label}</p>
      <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.25rem)] font-semibold tracking-[-0.022em] leading-[1.12] text-ink text-balance">
        {heading}
      </h2>
      {body ? (
        <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-body text-pretty">
          {body}
        </p>
      ) : null}
      {children}
    </div>
  );
}

/** Full-bleed hairline used to separate stacked sections. */
export function Rule() {
  return <div className="h-px w-full bg-line" />;
}
