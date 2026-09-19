import { site } from "@/content/site";
import Image from "next/image";
import { Button } from "./ui";
import { ArrowRightIcon, ProcessIcon } from "./icons";

/**
 * "How I work", between the hero and the case studies.
 *
 * The hero answers who; this answers how, so it deliberately repeats none of
 * it — no years, no industries, no title. Its job is to give the reader the
 * frame they will read the case studies through, and then hand them over.
 *
 * The words come first in the source and the render second, which is the
 * order a phone wants; on a wide screen the grid lifts the render out into
 * the right-hand columns beside them, so neither layout has to reorder the
 * other.
 */
export function Process() {
  const { process } = site;

  return (
    <section id="process" className="process">
      <div className="shell">
        <div className="process-intro">
          <div className="process-copy">
            <p className="eyebrow" data-reveal>
              {process.label}
            </p>

            <h2 className="process-headline" data-reveal data-reveal-delay="60">
              {process.heading}
            </h2>

            {process.body ? (
              <p className="process-body" data-reveal data-reveal-delay="100">
                {process.body}
              </p>
            ) : null}

            {process.cta ? (
              <div className="process-cta" data-reveal data-reveal-delay="140">
                <Button href={process.cta.href}>
                  {process.cta.label}
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>
            ) : null}
          </div>

          {/*
            Decorative: an empty `alt` keeps it out of the accessibility tree,
            because everything it says is said in the words beside it and in
            the four steps below.
          */}
          <div className="process-visual">
            <Image
              src={process.visual.src}
              alt=""
              width={process.visual.width}
              height={process.visual.height}
              className="process-visual-img"
            />
          </div>
        </div>

        {/*
          An ordered list, because they are steps rather than services: the
          order is the point, and the numbers are read as well as seen.
        */}
        <ol className="process-steps">
          {process.steps.map((step, i) => (
            <li key={step.number} data-reveal data-reveal-delay={i * 90}>
              <div className="process-step">
                <span aria-hidden className="process-step-number">
                  {step.number}
                </span>

                <span aria-hidden className="process-step-icon">
                  <ProcessIcon name={step.icon} className="h-[18px] w-[18px]" />
                </span>

                <p className="process-step-name">{step.name}</p>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-body">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
