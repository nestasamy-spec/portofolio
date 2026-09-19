import { site } from "@/content/site";
import { ArrowRightIcon } from "./icons";

/**
 * A floating navigation pill.
 *
 * It stays out of the way while the reader is at the top — the hero introduces
 * the site, so a bar repeating the name over it earns nothing — and slides in
 * once they start scrolling. That is a CSS scroll timeline rather than a scroll
 * listener, so the header needs no JavaScript and no client boundary; where the
 * timeline is unsupported the pill is simply always there.
 *
 * There is no burger and no sheet. At small widths the pill drops the name and
 * the call to action and carries the section links alone, scrolling sideways if
 * they outrun the screen, which is both slimmer than a menu and one tap shorter.
 *
 * The links carry no Home and no Contact: the brand beside them already returns
 * to the top, and the call to action beside them already opens contact.
 */
export function Header() {
  return (
    <header className="site-header">
      <div className="nav-pill">
        <a href="#top" className="nav-brand" aria-label="Home">
          <span aria-hidden className="nav-mark">
            AS
          </span>
          <span className="nav-brand-name">{site.meta.name}</span>
        </a>

        <nav className="nav-links" aria-label="Sections">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href={site.navCta.href} className="nav-cta">
          {site.navCta.label}
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}
