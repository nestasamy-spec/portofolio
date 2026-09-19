import { site } from "@/content/site";
import { SectionHeading } from "./ui";

export function ProvenResults() {
  const { results } = site;

  return (
    <section className="border-t border-line bg-white py-16 md:py-20">
      <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
        <SectionHeading
          label={results.label}
          heading={results.heading}
          body={results.body}
        />

        <dl className="grid grid-cols-2 gap-y-8 sm:grid-cols-4" data-reveal>
          {results.items.map((item, i) => (
            <div
              key={item.label}
              className={i > 0 ? "sm:border-l sm:border-line sm:pl-6" : ""}
            >
              <dt className="text-[clamp(1.5rem,2.6vw,1.875rem)] font-semibold tracking-[-0.025em] text-ink">
                {item.value}
              </dt>
              <dd className="mt-2 pr-4 text-[0.75rem] leading-snug text-muted text-pretty">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
