import Link from "next/link";
import { site } from "@/content/site";
import { LinkedInIcon, MailIcon } from "./icons";

export function Footer() {
  const { footer, contact } = site;

  return (
    <footer className="border-t border-line bg-white">
      <div className="shell flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <Link href="#top" className="flex items-center gap-3" aria-label="Back to top">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-line text-[0.8125rem] font-semibold tracking-tight text-ink">
            AS
          </span>
          <span className="leading-tight">
            <span className="block text-[0.875rem] font-semibold text-ink">
              {site.meta.name}
            </span>
            <span className="block text-[0.75rem] text-muted">
              {site.meta.role}
            </span>
          </span>
        </Link>

        <nav
          className="flex flex-wrap gap-x-7 gap-y-2"
          aria-label="Footer"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.8125rem] text-body transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-body transition-colors hover:border-ink hover:text-ink"
          >
            <LinkedInIcon className="h-[15px] w-[15px]" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label={`Email ${site.meta.name}`}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-body transition-colors hover:border-ink hover:text-ink"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-5 text-[0.75rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <p>{footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
