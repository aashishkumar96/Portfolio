# Portfolio

Editorial-style personal portfolio inspired by [azoni.ai](https://azoni.ai/).
Built with React + Vite + Motion.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173 to see it.

## Where to edit things

**All of your content lives in one file: `src/content.js`.**

Don't touch the JSX unless you want to change the layout. The content file has these sections:

| What | Edit |
|---|---|
| Your name, location, bio, tagline, stats | `site` |
| The "live activity" feed at the bottom of the hero | `activity` |
| The project carousel | `projects` + `projectsIntro` |
| The 4 day-job cards | `jobs` + `jobsIntro` |
| Degrees and honors | `degrees`, `honors`, `schoolIntro` |
| The agent-flow colophon | `colophonFlows`, `colophonAgents`, `colophonIntro` |

Links to GitHub, LinkedIn, X, email, and your resume PDF go in `site.socials`.

## Design system

All colors, fonts, and spacing are tokens at the top of `src/styles.css`. Each
section has its own accent color (coral, amber, pink, sage, green) so if you
want to re-theme, change the variables in `:root`.

**Fonts** (loaded from Google Fonts in `index.html`):
- Display: **Fraunces** — high-contrast editorial serif
- Body: **Inter**
- Mono: **JetBrains Mono** — used for eyebrows, timestamps, tech tags, numbers

## Build

```bash
npm run build
```

Outputs a static site to `dist/` that deploys anywhere (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

## File structure

```
src/
├── content.js   ← edit this
├── App.jsx      ← layout + components
├── styles.css   ← design tokens + all styles
└── main.jsx     ← React entry
```
