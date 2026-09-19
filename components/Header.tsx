import { site } from "@/content/site";
import { ArrowRightIcon } from "./icons";

/**
 * The navigation bar.
 *
 * It stays out of the way while the reader is at the top — the hero introduces
 * the site, so a bar repeating the name over it earns nothing — and slides in
 * as the badge leaves. That is a CSS scroll timeline rather than a scroll
 * listener, so the header needs no JavaScript and no client boundary; where the
 * timeline is unsupported the bar is simply always there.
 *
 * It runs the full width of the screen, but its contents sit in the same
 * measure as every section below, so the brand lines up with the page rather
 * than with the corner of the window.
 *
 * There is no burger and no sheet. At small widths the bar drops the name and
 * the call to action and carries the section links alone, scrolling sideways if
 * they outrun the screen, which is both slimmer than a menu and one tap shorter.
 *
 * The links carry no Home and no Contact: the brand beside them already returns
 * to the top, and the call to action beside them already opens contact.
 */
export function Header() {
  return (
    <header className="site-header">
      <div className="nav-bar">
        <div className="shell nav-inner">
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
      </div>
    </header>
  );
}
