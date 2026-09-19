import { site } from "@/content/site";
import { Button } from "./ui";
import {
  ArrowRightIcon,
  DownloadIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "./icons";

export function CallToAction() {
  const { cta, contact } = site;

  return (
    <section id="contact" className="bg-surface-alt pt-16 pb-16 md:pt-20">
      <div className="shell">
        <div
          className="overflow-hidden rounded-2xl bg-surface-dark px-6 py-12 text-white md:px-12 md:py-14"
          data-reveal
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-12">
            <div>
              <p className="eyebrow !text-white/45">{cta.label}</p>
              <h2 className="mt-5 text-[clamp(1.625rem,3.2vw,2.25rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-balance">
                {cta.heading}
              </h2>
              <p className="mt-4 max-w-lg text-[0.9375rem] leading-relaxed text-white/65 text-pretty">
                {cta.body}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href={cta.primary.href} variant="invert">
                {cta.primary.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              {site.cv.href ? (
                <Button href={site.cv.href} variant="ghost">
                  {site.cv.label}
                  <DownloadIcon className="h-4 w-4" />
                </Button>
              ) : null}
            </div>
          </div>

          <ul className="mt-10 grid gap-4 border-t border-line-dark pt-8 sm:grid-cols-3">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-3 text-[0.875rem] text-white/70 transition-colors hover:text-white"
              >
                <MailIcon className="h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-white" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-3 text-[0.875rem] text-white/70 transition-colors hover:text-white"
              >
                <PhoneIcon className="h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-white" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-3 text-[0.875rem] text-white/70 transition-colors hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-white" />
                {contact.linkedinLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
