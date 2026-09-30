# AGENTS.md — Agent & Assistant Guidelines

> Welcome to **portafoliodev**! This file serves as the primary guidance for AI coding agents (Antigravity, Cursor, Claude Code, GitHub Copilot, Codex, etc.). Follow these instructions strictly when inspecting, modifying, or creating code in this repository.

---

## 1. Project Overview & Architecture

- **Description**: A minimalist, high-performance, developer-focused portfolio template built with modern web standards.
- **Rendering Modes**: Configurable SSR or CSR via `MODERN_APP_RENDERING_MODE` (SSR by default).
- **Package Manager**: `pnpm` (version 12.x). Never use `npm` or `yarn` directly.
- **Node Engine**: `>= 22.x` (see `.nvmrc`).

### Tech Stack
- **Framework**: [Modern.js](https://modernjs.dev/) v3 (`@modern-js/app-tools`, `@modern-js/runtime`)
- **UI Library**: React 19 (`react` ^19.3.0, `react-dom` ^19.3.0)
- **Styling**: Tailwind CSS v4 (`tailwindcss` ^4.3.3, `@tailwindcss/postcss`) + PostCSS + Autoprefixer
- **Linter & Formatter**: [Biome](https://biomejs.dev/) v2 (`@biomejs/biome` ^2.5.15) — **No ESLint/Prettier**.
- **Language**: TypeScript 5.9 with path alias `@/*` mapping to `./src/*`.

---

## 2. Essential Commands

Always use `pnpm` from the repository root:

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts local development server (defaults to port 3000 or `$PORT`). |
| `pnpm build` | Generates production build. |
| `pnpm start` / `pnpm serve` | Serves the production build. |
| `pnpm lint` | Runs Biome linter check on all files. |
| `pnpm lint:fix` | Runs Biome linter and automatically applies safe fixes. |
| `pnpm format` | Formats code with Biome. |
| `pnpm clean` | Cleans build artifacts (`dist/`, `.modern.js`, `node_modules`). |

---

## 3. Directory Structure

```text
portafoliodev/
├── .agents/                    # Agent-specific modular rules & workflows
│   └── rules/                  # Modular instructions (code-style, content, tech-stack)
├── public/                     # Static assets served at root
├── src/
│   ├── app/                    # Global app configuration / context
│   ├── components/
│   │   ├── icons/              # SVG icon components
│   │   ├── layout/             # Layout components (Header, Footer, Navbar)
│   │   └── portfolio/          # Portfolio-specific sections (MinimalHeader, MinimalAbout, MinimalExperience, MinimalProjects, MinimalTech)
│   ├── config/
│   │   ├── environment.ts      # Environment variable helpers
│   │   └── portfolio.config.ts # Single Source of Truth for portfolio data & metadata
│   ├── hooks/                  # Custom React hooks
│   ├── routes/                 # Modern.js file-system routing (page.tsx, layout.tsx, error.tsx, $.tsx)
│   ├── styles/                 # Global styles & Tailwind imports
│   ├── types/                  # Shared TypeScript interfaces & definitions
│   ├── utils/                  # Pure utility functions
│   └── modern.runtime.ts       # Runtime plugins configuration
├── biome.json                  # Biome linting & formatting rules
├── modern.config.ts            # Modern.js configuration (SSR, aliases, PostCSS)
└── package.json
```

---

## 4. Code & Formatting Guidelines (Biome)

All agents **must respect the Biome settings** specified in `biome.json`:
- **Indentation**: 2 spaces (`"indentStyle": "space"`, `"indentWidth": 2`).
- **Line Width**: 100 characters.
- **Quotes**: Single quotes (`'`) for JS/TS, double quotes (`"`) for JSX.
- **Semicolons**: As-needed (omitted unless syntactically required).
- **Trailing Commas**: ES5 style.
- **Unused Variables**: Treated as error (`noUnusedVariables: "error"`). Clean up unused imports/vars!
- **Validation**: After modifying files, always run `pnpm lint` or `pnpm lint:fix` to ensure no linting/formatting errors.

---

## 5. Working with Portfolio Content

All portfolio content is decoupled from UI presentation:
- **Location**: `src/config/portfolio.config.ts`.
- **Typing**: Strongly typed with `PortfolioConfig`, `ExperienceItem`, `ProjectItem`, `TechBadge`.
- When updating or adding experiences, projects, personal info, or tech stacks:
  1. Inspect `src/config/portfolio.config.ts`.
  2. Maintain strictly typed structures without bypassing types with `any`.
  3. Keep images optimized (use Unsplash URLs with query params or local assets in `public/`).

---

## 6. Styling Guidelines (Tailwind CSS v4)

- Tailwind v4 is integrated via PostCSS (`@tailwindcss/postcss`).
- Use utility classes directly in JSX `className`.
- Preserve responsive design (`sm:`, `md:`, `lg:`).
- Maintain dark-mode and high-contrast accessibility.
- Avoid introducing ad-hoc arbitrary CSS or inline styles when a Tailwind utility class exists.

---

## 7. SSR & React 19 Considerations

- The project uses React 19. Do not use deprecated React lifecycle methods or outdated patterns.
- Because SSR is enabled by default:
  - Guard browser-only APIs (`window`, `document`, `localStorage`) inside `useEffect` or `typeof window !== 'undefined'` checks to prevent hydration mismatches.
  - Keep client-only interactive states clean and deterministic.
