# Code Style & Linting Rules

These rules apply to all code generated or modified in this repository.

## 1. Biome as Sole Authority

- Do **not** install or configure ESLint or Prettier. Biome handles linting and formatting.
- Before concluding any task, verify with:
  ```bash
  pnpm lint
  ```
  Or auto-fix with:
  ```bash
  pnpm lint:fix
  ```

## 2. Formatting Specifics
- **Quotes**: Single quotes `'string'` for TypeScript/JavaScript, double quotes `="attribute"` for JSX attributes.
- **Semicolons**: Never add trailing semicolons unless necessary for syntax disambiguation.
- **Indentation**: 2 spaces. Never use tabs.
- **Line Length**: Max 100 characters per line where reasonable.
- **Trailing Commas**: ES5 style (trailing comma in multi-line object/array literals, but not in single-line or function params).

## 3. TypeScript Rules
- Strict typing: Avoid `any`. Use properly defined interfaces from `@/types` or `portfolio.config.ts`.
- Path aliases: Always use `@/` to import from `./src` instead of relative paths with multiple `../../`.
- Explicit return types are encouraged on exported helper functions.
