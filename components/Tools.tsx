import { site } from "@/content/site";
import { SectionHeading } from "./ui";

export function Tools() {
  const { tools } = site;

  return (
    <section className="border-t border-line bg-surface-alt py-16 md:py-20">
      <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-center lg:gap-16">
        <SectionHeading
          label={tools.label}
          heading={tools.heading}
          body={tools.body}
        />

        <ul className="grid grid-cols-3 gap-3 sm:grid-cols-5" data-reveal>
          {tools.items.map((tool) => (
            <li
              key={tool.name}
              className="flex flex-col items-center gap-2.5 rounded-xl border border-line bg-white px-2 py-4 text-center transition-colors duration-200 hover:border-ink/25"
            >
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-lg bg-surface-alt text-[0.75rem] font-semibold tracking-tight text-ink"
              >
                {tool.abbr}
              </span>
              <span className="text-[0.6875rem] leading-tight text-body">
                {tool.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
