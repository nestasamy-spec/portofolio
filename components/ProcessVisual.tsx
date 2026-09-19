import { site } from "@/content/site";

/**
 * The dashboard that sits beside "How I work".
 *
 * It is drawn rather than photographed: glass sheets stacked behind a product
 * panel, turned a few degrees so the stack reads as depth. That keeps it
 * crisp at any resolution, lets it move with the scroll, and keeps it in the
 * page's own design tokens instead of importing a second visual language in
 * an image.
 *
 * Everything in it is decorative — the whole subtree is `aria-hidden`, so
 * none of the figures are announced or read as claims. Its labels live in
 * `content/site.ts` with the rest of the copy all the same, so the
 * composition can be retuned without opening this file.
 *
 * The argument it makes is the section's: a complicated system, given a
 * structure, arriving at something measurable.
 */
export function ProcessVisual() {
  const { visual } = site.process;

  return (
    <div className="pv" aria-hidden>
      <div className="pv-deck">
        <span className="pv-sheet pv-sheet-back" />
        <span className="pv-sheet pv-sheet-mid" />

        <div className="pv-panel">
          <div className="pv-side">
            <span className="pv-mark" />
            <ul className="pv-nav">
              {visual.nav.map((item, i) => (
                <li key={item} className={i === 0 ? "is-current" : undefined}>
                  <span className="pv-nav-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="pv-main">
            <div className="pv-head">
              <div>
                <p className="pv-title">{visual.title}</p>
                <p className="pv-sub">{visual.subtitle}</p>
              </div>
              <span className="pv-range">{visual.range}</span>
            </div>

            <ul className="pv-tiles">
              {visual.tiles.map((tile) => (
                <li key={tile.label} className="pv-tile">
                  <span className="pv-tile-label">{tile.label}</span>
                  <span className="pv-tile-value">{tile.value}</span>
                  {tile.delta ? (
                    <span className="pv-tile-delta">{tile.delta}</span>
                  ) : null}
                </li>
              ))}
            </ul>

            <div className="pv-chart">
              <svg viewBox="0 0 320 104" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="pv-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="var(--color-accent)"
                      stopOpacity="0.22"
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--color-accent)"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                {/* the three gridlines the figures are read against */}
                <g stroke="currentColor" strokeOpacity="0.07">
                  <path d="M0 26h320M0 60h320M0 94h320" />
                </g>

                <path
                  d="M0 84 44 70 88 76 132 48 176 34 220 56 264 40 320 18 320 104 0 104Z"
                  fill="url(#pv-fill)"
                />
                <path
                  d="M0 84 44 70 88 76 132 48 176 34 220 56 264 40 320 18"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/*
                The chart is stretched to its box, so the point on the line
                and the pill above it are drawn in the layout rather than in
                the SVG, where the same stretch would turn a circle into an
                ellipse.
              */}
              <span className="pv-dot" />
              <span className="pv-marker">{visual.marker}</span>
            </div>

            <ul className="pv-axis">
              {visual.months.map((month) => (
                <li key={month}>{month}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
