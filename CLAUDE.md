# Claude Code Instructions

This project follows the unified agent guidance documented in [AGENTS.md](AGENTS.md).

## Quick Reference
- **Package Manager**: `pnpm`
- **Dev Server**: `pnpm dev`
- **Build**: `pnpm build`
- **Lint & Format**: `pnpm lint:fix` (Uses Biome, not ESLint/Prettier)
- **Data Source**: Modify `src/config/portfolio.config.ts` for all portfolio items and personal details.
- **Code Style**: 2 spaces, single quotes in JS/TS, no trailing semicolons, path alias `@/*`.

For full details, please refer to [AGENTS.md](AGENTS.md) and `.agents/rules/`.
