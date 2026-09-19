import { site } from "@/content/site";
import { Button } from "./ui";
import { LanyardBadge } from "./LanyardBadge";
import { ArrowRightIcon, DownloadIcon } from "./icons";

/**
 * The hero: the hanging badge, and under it the eyebrow, headline, intro,
 * buttons and stats.
 *
 * That block under the badge is behind `hero.showIntro`, which is off. With
 * it off the badge carries the page's only h1 — its name — rather than the
 * page losing its top-level heading altogether.
 */
export function Hero() {
  const { hero } = site;

  return (
    <section id="top" className="relative overflow-hidden bg-surface-alt">
      {/* soft wash so the section reads lighter towards the foot */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-white"
      />

      {/*
        No top padding: the badge's strap starts at the section's top edge, so
        it reads as hanging from above rather than floating in the section.
      */}
      <div className="shell relative flex flex-col items-center pb-16 text-center md:pb-20">
        <LanyardBadge asHeading={!hero.showIntro} />

        {hero.showIntro ? (
          <>
            <ul
              className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
              data-reveal
            >
              {hero.eyebrow.map((tag, i) => (
                <li key={tag} className="eyebrow flex items-center gap-2">
                  {i > 0 ? <span aria-hidden>&middot;</span> : null}
                  {tag}
                </li>
              ))}
            </ul>

            <h1
              className="mt-6 max-w-[18ch] text-[clamp(2.25rem,5.4vw,4rem)] font-semibold leading-[1.04] tracking-[-0.032em] text-ink text-balance"
              data-reveal
              data-reveal-delay="60"
            >
              {hero.headline}
            </h1>

            <p
              className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-body text-pretty md:text-base"
              data-reveal
              data-reveal-delay="100"
            >
              {hero.intro}
            </p>

            <div
              className="mt-8 flex flex-wrap justify-center gap-3"
              data-reveal
              data-reveal-delay="140"
            >
              <Button href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </Button>
              {site.cv.href ? (
                <Button href={site.cv.href} variant="outline">
                  {site.cv.label}
                  <DownloadIcon className="h-4 w-4" />
                </Button>
              ) : null}
            </div>

            <dl
              className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4"
              data-reveal
              data-reveal-delay="180"
            >
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-semibold tracking-[-0.02em] text-ink">
                    {stat.value}
                  </dt>
                  <dd className="mx-auto mt-1.5 max-w-[16ch] text-[0.75rem] leading-snug text-muted text-pretty">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </>
        ) : null}
      </div>
    </section>
  );
}
