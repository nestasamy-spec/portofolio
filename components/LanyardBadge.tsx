"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/content/site";
import type { BadgeLink } from "@/content/types";
import { LinkedInIcon, MailIcon, PhoneIcon } from "./icons";

const linkIcons = {
  mail: MailIcon,
  phone: PhoneIcon,
  linkedin: LinkedInIcon,
} as const;

function LinkRow({ link }: { link: BadgeLink }) {
  const Icon = linkIcons[link.icon];
  return (
    <li>
      <a href={link.href} className="badge-row">
        <span aria-hidden className="badge-row-icon">
          <Icon className="h-[13px] w-[13px]" />
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
 * and flips to its contact side on click.
 *
 * Both faces are always in the DOM so the flip is a CSS transform rather than a
 * re-render. The face turned away is `inert`, which keeps its links out of the
 * tab order and away from screen readers without a second source of truth.
 *
 * Each face carries a full-size button underneath its content, so a click
 * anywhere flips the card while the contact links on the back still take their
 * own clicks. That button is also what makes the badge keyboard-operable.
 */
export function LanyardBadge() {
  const { badge } = site;
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="badge-stage">
      <div className="badge-swing">
        <span aria-hidden className="badge-strap">
          <span className="badge-strap-text">
            {`${badge.strap} · `.repeat(6)}
          </span>
        </span>
        <span aria-hidden className="badge-clip" />

        <div className={`badge-card${flipped ? " is-flipped" : ""}`}>
          <div className="badge-face badge-front" inert={flipped}>
            <button
              type="button"
              className="badge-hit"
              onClick={() => setFlipped(true)}
            >
              <span className="sr-only">{badge.flip.toBack}</span>
            </button>

            <p className="badge-name">{badge.name}</p>
            <p className="badge-bio">{badge.bio}</p>

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

            <p className="badge-foot">
              <span>{badge.role}</span>
              <span>{badge.experience}</span>
            </p>
          </div>

          <div className="badge-face badge-back" inert={!flipped}>
            <button
              type="button"
              className="badge-hit"
              onClick={() => setFlipped(false)}
            >
              <span className="sr-only">{badge.flip.toFront}</span>
            </button>

            <span aria-hidden className="badge-back-icon">
              <MailIcon className="h-4 w-4" />
            </span>
            <p className="badge-back-heading">{badge.backHeading}</p>
            <span aria-hidden className="badge-rule" />

            <ul className="badge-rows">
              {badge.links.map((link) => (
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
