import Image from "next/image";
import { site } from "@/content/site";
import type { BadgeLink } from "@/content/types";
import { BehanceIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./icons";

const linkIcons = {
  mail: MailIcon,
  phone: PhoneIcon,
  linkedin: LinkedInIcon,
  behance: BehanceIcon,
} as const;

function LinkRow({ link }: { link: BadgeLink }) {
  const Icon = linkIcons[link.icon];
  return (
    <li>
      <a href={link.href} className="badge-row">
        <span aria-hidden className="badge-row-icon">
          <Icon className="h-[15px] w-[15px]" />
        </span>
        <span className="min-w-0">
          <span className="badge-row-label">{link.label}</span>
          <span className="badge-row-value">{link.value}</span>
        </span>
      </a>
    </li>
  );
}

/**
 * The hero's hanging ID badge: a lanyard strap, a clip, and a card that swings
 * and turns over to its contact side.
 *
 * The flip is a checkbox and two labels rather than React state, so this stays
 * a server component and the badge works with no JavaScript at all — which
 * also means it survives any host that serves the export without hydrating it.
 *
 * Both faces are always in the DOM. `backface-visibility` hides the one turned
 * away, and `visibility` — switched at the halfway point of the turn — takes
 * its links out of the tab order to match.
 *
 * Each face's label covers the whole card, so a click anywhere turns it while
 * the contact links on the back, which sit above the label, keep their own.
 */
export function LanyardBadge({ asHeading = false }: { asHeading?: boolean }) {
  const { badge } = site;
  /*
   * When the hero's copy is switched off the badge is the first thing on the
   * page, so its name becomes the document's h1. Otherwise the hero's own
   * headline holds that and this stays a paragraph.
   */
  const Name = asHeading ? "h1" : "p";

  return (
    <div className="badge-stage">
      <div className="badge-swing">
        <span aria-hidden className="badge-strap">
          <span className="badge-strap-text">
            {`${badge.strap} · `.repeat(6)}
          </span>
        </span>
        <span aria-hidden className="badge-clip" />

        <input
          type="checkbox"
          id="badge-flip"
          className="badge-toggle"
          aria-label={badge.flip.toBack}
        />

        <div className="badge-card">
          <div className="badge-face badge-front">
            <label htmlFor="badge-flip" className="badge-hit" />

            {/*
              Photo first, the way a pass you wear reads: the face identifies,
              the name confirms it.
            */}
            <span className="badge-portrait">
              {badge.photo ? (
                <Image
                  src={badge.photo.src}
                  alt={badge.photo.alt}
                  width={320}
                  height={320}
                  priority
                  className="h-full w-full object-cover"
                />
              ) : (
                <span aria-hidden className="badge-initials">
                  {badge.initials}
                </span>
              )}
            </span>

            <Name className="badge-name">{badge.name}</Name>
            <p className="badge-role">{badge.role}</p>
            <p className="badge-tagline">{badge.tagline}</p>

            <p className="badge-foot">
              <span>{badge.band}</span>
            </p>
          </div>

          <div className="badge-face badge-back">
            <label htmlFor="badge-flip" className="badge-hit" />

            <span aria-hidden className="badge-back-icon">
              <MailIcon className="h-5 w-5" />
            </span>
            <p className="badge-back-heading">{badge.backHeading}</p>
            <span aria-hidden className="badge-rule" />

            <ul className="badge-rows">
              {badge.links
                .filter((link) => link.href)
                .map((link) => (
                  <LinkRow key={link.href} link={link} />
                ))}
            </ul>

            <p className="badge-foot">
              <span>{badge.availability}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
