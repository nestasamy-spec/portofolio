import Image from "next/image";
import { site } from "@/content/site";

/**
 * The strip of companies between the badge and "How I work".
 *
 * It is drawn from `career.entries` rather than a list of its own, so the
 * strip and the work history can never disagree — adding a role adds it here.
 * Two of the companies have no mark; they ride as their name alone, which is
 * better than leaving them off a strip that claims to be where he has worked.
 *
 * The motion is two identical rows side by side, the pair slid left by half
 * its width for ever: at the moment it completes, the second row is sitting
 * exactly where the first began, so the loop has no seam. The second row is
 * `aria-hidden`, since it is the same list twice.
 */
export function Companies() {
  const { companies, career } = site;
  const items = career.entries.map((entry) => ({
    name: entry.company,
    logo: entry.logo,
  }));

  const row = (duplicate: boolean) => (
    <ul className="marquee-row" aria-hidden={duplicate || undefined}>
      {items.map((item) => (
        <li key={item.name} className="marquee-item">
          {item.logo ? (
            <Image
              src={item.logo}
              alt=""
              width={96}
              height={96}
              className="marquee-mark"
            />
          ) : null}
          {item.name}
        </li>
      ))}
    </ul>
  );

  return (
    <section className="marquee">
      <p className="eyebrow marquee-label">{companies.label}</p>

      <div className="marquee-viewport">
        <div className="marquee-track">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
