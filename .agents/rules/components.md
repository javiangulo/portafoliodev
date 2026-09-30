# React 19 & Component Architecture Rules

## 1. Component Design
- **Functional Components**: Use standard functional components with TypeScript props interfaces.
- **Location**:
  - `src/components/layout/`: Shared shell components (Header, Footer, Navbar).
  - `src/components/portfolio/`: Section-specific UI components (MinimalHeader, MinimalAbout, MinimalExperience, MinimalProjects, MinimalTech).
  - `src/components/icons/`: Reusable SVG icons.
- **Props**: Define an interface `ComponentNameProps` for any component accepting props. Prefer optional props with sensible defaults.

## 2. Server vs Client Execution (SSR Safety)
- Modern.js runs in SSR mode by default.
- Never directly access `window`, `document`, or `navigator` in the module body or initial render pass.
- Use `useEffect` or check `typeof window !== 'undefined'` before accessing browser APIs.

## 3. Styling with Tailwind CSS v4
- Use semantic utility classes.
- Maintain consistent padding, margin, border-radius, and font sizes matching existing minimalist aesthetic.
- Color scheme: Monochromatic / dark-mode friendly palette with subtle borders (`border-neutral-200`, `dark:border-neutral-800`), muted texts (`text-neutral-500`, `dark:text-neutral-400`), and clean typography.
