import { site } from "@/content/site";

export function Philosophy() {
  const { philosophy } = site;

  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="shell">
        <div
          className="relative overflow-hidden rounded-2xl bg-surface-dark px-6 py-12 text-white md:px-12 md:py-16"
          data-reveal
        >
          <span
            aria-hidden
            className="absolute right-6 top-6 text-[0.6875rem] tracking-[0.14em] text-white/30"
          >
            # 01
          </span>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)_minmax(0,1fr)] lg:gap-12">
            <div>
              <p className="eyebrow !text-white/45">{philosophy.label}</p>
              <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.028em] text-balance">
                {philosophy.heading}
              </h2>
            </div>

            <ul className="space-y-2 self-center">
              {philosophy.principles.map((line) => (
                <li
                  key={line}
                  className="text-[1.0625rem] leading-snug text-white/80 md:text-xl"
                >
                  {line}
                </li>
              ))}
            </ul>

            <p className="self-center text-[0.875rem] leading-relaxed text-white/65 text-pretty lg:border-l lg:border-line-dark lg:pl-12">
              {philosophy.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
