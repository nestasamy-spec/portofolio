import { site } from "@/content/site";
import { SectionHeading } from "./ui";
import { ExpertiseIcon } from "./icons";

export function Expertise() {
  const { expertise } = site;

  return (
    <section
      id="expertise"
      className="border-t border-line bg-surface-alt py-16 md:py-24"
    >
      <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1.5fr)] lg:gap-16">
        <SectionHeading
          label={expertise.label}
          heading={expertise.heading}
          body={expertise.body}
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <ul className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.items.map((item, i) => (
            <li key={item.title} data-reveal data-reveal-delay={i * 70}>
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white text-ink">
                <ExpertiseIcon name={item.icon} className="h-[18px] w-[18px]" />
              </span>
              <h3 className="mt-4 text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink text-balance">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-body text-pretty">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
