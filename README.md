# AbdelRahman Samy — Portfolio

Personal portfolio site for AbdelRahman Samy, Senior Product Designer.

Built with Next.js 16 (App Router), React 19 and Tailwind CSS v4, exported as a
static site (`output: "export"`) for deployment to Vercel on a custom domain.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```

## Structure

```
app/                 route, layout, global styles and design tokens
components/          one component per page section, plus shared ui/icons
content/
  types.ts           interfaces for every piece of page copy
  site.ts            all copy and content, in one place
public/work/         project imagery
public/logos/        company logos used in the career timeline
docs/design-references/  target design and current QA screenshots
```

### Editing content

All copy lives in `content/site.ts` behind the interfaces in `content/types.ts`,
and is sourced from AbdelRahman's CV — roles, dates, employment type, per-role
contributions, skills, tools, education and languages.
No component contains hard-coded text, so a CMS or Supabase layer can be added
later by replacing that single export with an async loader returning the same
shapes — components stay untouched.

### Design tokens

Colours, type scale and easing are defined once as Tailwind v4 `@theme` tokens
in `app/globals.css`. The palette is deliberately monochrome; colour comes from
project imagery only.

### Adding a CV

`site.cv.href` is empty, and every "Download CV" button is hidden while it is.
To enable: add the file at `public/cv.pdf` and set `cv.href` to `"/cv.pdf"`.

### Scroll reveal

Sections fade in via a single `IntersectionObserver` (`components/ScrollReveal.tsx`)
so the sections themselves stay server components. The hidden state is scoped to
a `.reveal-ready` class set by an inline script before first paint, so content
renders normally if JavaScript never runs.
