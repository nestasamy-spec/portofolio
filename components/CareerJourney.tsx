import Image from "next/image";
import { site } from "@/content/site";
import { SectionHeading, Button } from "./ui";
import { ArrowUpRightIcon } from "./icons";

export function CareerJourney() {
  const { career } = site;

  return (
    <section
      id="experience"
      className="border-t border-line bg-white py-16 md:py-24"
    >
      <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1.5fr)] lg:gap-16">
        <SectionHeading
          label={career.label}
          heading={career.heading}
          body={career.body}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <div className="mt-7">
            <Button href={site.contact.linkedin} variant="outline">
              View full experience
              <ArrowUpRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </SectionHeading>

        <ol className="relative">
          {/* the spine: hidden on mobile where rows stack */}
          <span
            aria-hidden
            className="absolute left-[5px] top-2 bottom-2 hidden w-px bg-line sm:block"
          />

          {career.entries.map((entry, i) => (
            <li
              key={`${entry.company}-${entry.dates}`}
              className="relative border-b border-line py-7 first:pt-0 last:border-b-0 last:pb-0 sm:pl-8"
              data-reveal
              data-reveal-delay={i * 60}
            >
              <span
                aria-hidden
                className="absolute left-0 top-[calc(1.75rem+0.4rem)] hidden h-[11px] w-[11px] rounded-full border-2 border-white bg-ink ring-1 ring-line sm:block"
                style={i === 0 ? { top: "0.4rem" } : undefined}
              />

              <div className="grid gap-x-8 gap-y-3 md:grid-cols-[150px_minmax(0,1fr)] lg:grid-cols-[150px_minmax(0,0.85fr)_minmax(0,1.15fr)]">
                <p className="text-[0.8125rem] text-muted tabular-nums">
                  {entry.dates}
                </p>

                <div>
                  <h3 className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink">
                    {entry.role}
                    {entry.employmentType ? (
                      <span className="ml-1.5 font-normal text-muted">
                        ({entry.employmentType})
                      </span>
                    ) : null}
                  </h3>
                  <p className="mt-1.5 flex items-center gap-2 text-[0.875rem] text-body">
                    {entry.logo ? (
                      <Image
                        src={entry.logo}
                        alt=""
                        width={40}
                        height={40}
                        className="h-4 w-4 shrink-0 rounded-[3px] object-contain"
                      />
                    ) : null}
                    {entry.company}
                  </p>
                  <p className="mt-1 text-[0.75rem] text-muted">
                    {entry.location}
                  </p>
                </div>

                <p className="text-[0.8125rem] leading-relaxed text-body text-pretty lg:pt-0">
                  {entry.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
