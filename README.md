# Rubem Dias — Portfolio

A modern, bilingual (EN / PT-BR) developer portfolio built as an **interactive BI dashboard** —
because the clearest way to show what I do is to do it.

**Live:** https://rubem-dias.github.io

Senior Full Stack Engineer · C#/.NET · React · performance & data platforms.

---

## Highlights

- **Analytics-as-portfolio** — career data visualized with real charts: a dramatic
  12 min → 3 s (240×) performance win, a skills radar, a focus breakdown, and an
  experience-over-time area chart.
- **Bilingual** — full English / Portuguese toggle, defaulting to English, persisted across visits.
- **Dark & light themes** — a token-driven design system; dark by default.
- **Motion with restraint** — scroll-reveal, count-ups and chart draw-ins that respect
  `prefers-reduced-motion`.
- **Accessible & responsive** — semantic HTML, keyboard-friendly, fluid from mobile to desktop.

## Tech stack

| Area      | Choice                                        |
| --------- | --------------------------------------------- |
| Framework | React 19 + TypeScript + Vite                  |
| Charts    | Recharts (+ hand-rolled SVG for custom bits)  |
| Motion    | Framer Motion                                 |
| Icons     | Lucide                                        |
| Fonts     | Space Grotesk · Inter · JetBrains Mono        |
| Styling   | Hand-written CSS design system (custom props) |
| Deploy    | GitHub Pages (gh-pages branch)                |

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run deploy   # build + publish to the gh-pages branch
```

## Project structure

```
src/
  components/      # sections (Hero, Dashboard, Experience, …) + ui primitives
  data/resume.ts   # all résumé content + chart datasets (bilingual)
  i18n/            # typed EN/PT dictionary + context
  lib/hooks.ts     # count-up, theme, scroll-spy helpers
  styles/          # design tokens + per-section CSS
```

## Deployment

```bash
npm run deploy
```

This builds the site and publishes `dist/` to the `gh-pages` branch, which GitHub Pages
serves at the live URL above.

---

Designed & built by Rubem Dias.
