# Spilling Web — Portfolio

Personal portfolio for Spilling Web, a React web development studio. Built with Astro 5, React, Tailwind CSS v4, and TinaCMS for visual content editing.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro 5](https://astro.build) with SSR |
| UI | [React 18](https://react.dev) islands |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| CMS | [TinaCMS](https://tina.io) with Tina Cloud |
| Deployment | [Vercel](https://vercel.com) |
| i18n | Astro built-in i18n routing (EN / ES / NO) |

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [Tina Cloud](https://app.tina.io) account with a project connected to this repo

### Install dependencies

\`\`\`bash
npm install
\`\`\`

### Environment variables

Create a `.env` file in the project root:

\`\`\`
TINA_CLIENT_ID=your-tina-client-id
TINA_TOKEN=your-tina-token
GITHUB_BRANCH=main
\`\`\`

Get these from your project on [app.tina.io](https://app.tina.io).

### Run the dev server

\`\`\`bash
npm run dev
\`\`\`

This starts both the Astro dev server and the TinaCMS local server simultaneously. The site is available at `http://localhost:4321` and the CMS admin at `http://localhost:4321/admin`.

---

## Content Editing

Content lives in the `content/` directory as JSON files and is managed through TinaCMS.

### Local editing (dev)

Run `npm run dev` and open `http://localhost:4321/admin` to edit content visually with live preview.

### Production editing

Navigate to `https://your-domain.com/admin` and log in with your Tina Cloud account. Changes are committed directly to GitHub and trigger an automatic Vercel redeploy.

### Content structure

\`\`\`
content/
├── settings.json          # Studio name, email, social URLs, availability
├── skills.json            # Skill tags and service card copy (all languages)
├── projects/
│   ├── luminary-dashboard.json
│   ├── threadly.json
│   ├── nocturne.json
│   └── voxify.json
└── about/
    ├── en.json
    ├── es.json
    └── no.json
\`\`\`

### Editable fields

| Section | Editable via CMS |
|---|---|
| Projects | Title, year, description (per language), tags, accent colour |
| About | All paragraph text and CTA label (per language) |
| Skills | Skill tag names and categories |
| Services | Service card titles and descriptions (per language) |
| Settings | Studio name, email, GitHub URL, LinkedIn URL, availability status |

---

## Project Structure

\`\`\`
src/
├── components/
│   ├── Page.astro              # Main page template
│   ├── AboutSection.astro      # Editable about section (TinaCMS island)
│   ├── SkillsSection.astro     # Editable skills section (TinaCMS island)
│   ├── ProjectListStatic.astro # Static project list (used by island registry)
│   ├── ProjectList.tsx         # Interactive project list (React island)
│   ├── HeroNav.tsx             # Full-screen hero navigation (React island)
│   └── FloatingMenu.tsx        # Floating hamburger + overlay menu (React island)
├── layouts/
│   └── Layout.astro            # HTML shell with fonts and favicon
├── lib/
│   ├── data.ts                 # TinaCMS data fetchers (requestWithMetadata)
│   └── islands.ts              # TinaCMS island registry
├── pages/
│   ├── index.astro             # Redirects to /en
│   ├── en/index.astro
│   ├── es/index.astro
│   ├── no/index.astro
│   └── tina-island/[name].ts   # Island endpoint for visual editing
├── i18n/
│   └── translations.ts         # UI strings for all three languages
├── data/
│   └── skills.ts               # Tailwind colour tokens for skill groups
└── styles/
    └── global.css              # Tailwind v4 theme tokens + Google Fonts
\`\`\`

---

## Internationalisation

The site is available in three languages with URL-based routing:

| Language | URL |
|---|---|
| English | `/en` |
| Spanish | `/es` |
| Norwegian | `/no` |

UI strings (nav labels, section headings, availability text) live in `src/i18n/translations.ts`. Editorial content (about text, project descriptions, service cards) is stored per language in the CMS content files.

---

## Deployment

The project is deployed on Vercel. Push to `main` to trigger a redeploy.

### Environment variables on Vercel

Set these in your Vercel project settings under **Environment Variables**:

\`\`\`
TINA_CLIENT_ID
TINA_TOKEN
GITHUB_BRANCH
\`\`\`

### Build command

\`\`\`bash
npm run build
\`\`\`

### Output directory

`dist/` (handled automatically by the Vercel adapter)

---

## Design

- **Fonts:** Bricolage Grotesque (headings) · Plus Jakarta Sans (body) · JetBrains Mono (labels)
- **Palette:** Violet `#8B1FFF` · Raspberry `#FF3B6B` · Amber `#F59A00` · Teal `#00B896` · Deep plum `#1A0A2E`
- **Accessibility:** Amber on dark background passes WCAG AAA (8.51:1 contrast ratio)
- **Touch support:** Colour indicators replace hover effects on touch devices