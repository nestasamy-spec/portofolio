import Image from "next/image";
import { site } from "@/content/site";

export function SelectedWork() {
  const { work } = site;

  return (
    <section id="work" className="border-t border-line bg-white py-16 md:py-24">
      <div className="shell">
        <div data-reveal>
          <p className="eyebrow">{work.label}</p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.25rem)] font-semibold leading-[1.12] tracking-[-0.022em] text-ink">
            {work.heading}
          </h2>
        </div>

        <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {work.items.map((item, i) => (
            <li
              key={item.title}
              className="group flex flex-col"
              data-reveal
              data-reveal-delay={i * 90}
            >
              <div className="overflow-hidden rounded-xl border border-line bg-surface-alt">
                <Image
                  src={item.image}
                  alt={`${item.title} interface`}
                  width={2292}
                  height={1404}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
              </div>

              <p className="eyebrow mt-5 flex flex-wrap items-center gap-2">
                {item.tags.map((tag, t) => (
                  <span key={tag} className="flex items-center gap-2">
                    {t > 0 ? <span aria-hidden>&middot;</span> : null}
                    {tag}
                  </span>
                ))}
              </p>

              <h3 className="mt-3 text-lg font-semibold tracking-[-0.015em] text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-body text-pretty">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
