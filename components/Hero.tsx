import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "./ui";
import { ArrowRightIcon, DownloadIcon } from "./icons";

export function Hero() {
  const { hero } = site;

  return (
    <section id="top" className="relative overflow-hidden bg-surface-alt">
      {/* soft wash so the section reads lighter towards the foot */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-white"
      />

      <div className="shell relative grid gap-12 pt-14 pb-16 md:pt-20 md:pb-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-10">
        <div data-reveal>
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {hero.eyebrow.map((tag, i) => (
              <li key={tag} className="eyebrow flex items-center gap-2">
                {i > 0 ? <span aria-hidden>&middot;</span> : null}
                {tag}
              </li>
            ))}
          </ul>

          <h1 className="mt-6 text-[clamp(2.25rem,5.4vw,4rem)] font-semibold leading-[1.04] tracking-[-0.032em] text-ink text-balance">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-body text-pretty md:text-base">
            {hero.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-semibold tracking-[-0.02em] text-ink">
                  {stat.value}
                </dt>
                <dd className="mt-1.5 text-[0.75rem] leading-snug text-muted text-pretty">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative" data-reveal data-reveal-delay="120">
          <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_24px_60px_-28px_rgba(17,17,17,0.28)]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="h-auto w-full"
            />
          </div>

          <p
            aria-hidden
            className="mt-5 hidden text-right text-xl leading-tight text-muted lg:block font-[family-name:var(--font-caveat)]"
          >
            {hero.annotation}
          </p>
        </div>
      </div>
    </section>
  );
}
