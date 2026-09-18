import { site } from "@/content/site";
import { SectionHeading } from "./ui";

export function About() {
  const { about } = site;

  return (
    <section id="about" className="border-t border-line bg-surface-alt py-16 md:py-24">
      <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
        <SectionHeading
          label={about.label}
          heading={about.heading}
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <div data-reveal>
          <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-body text-pretty">
            {about.summary}
          </p>

          <h3 className="eyebrow mt-10">Skills</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {about.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-line bg-white px-3 py-1.5 text-[0.75rem] text-body"
              >
                {skill}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <h3 className="eyebrow">Education</h3>
              <p className="mt-3 text-[0.875rem] font-medium text-ink text-pretty">
                {about.education.qualification}
              </p>
              <p className="mt-1 text-[0.8125rem] text-muted">
                {about.education.institution} &middot; {about.education.year}
              </p>
            </div>

            <div>
              <h3 className="eyebrow">Languages</h3>
              <ul className="mt-3 space-y-1.5">
                {about.languages.map((lang) => (
                  <li key={lang.name} className="text-[0.8125rem] text-body">
                    {lang.name}{" "}
                    <span className="text-muted">— {lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
