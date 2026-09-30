# Portfolio Content Management Rules

All textual and data content for this portfolio is centralized in `src/config/portfolio.config.ts`.

## 1. Golden Rule
- **Never hardcode personal or portfolio text directly in presentation components** (`src/components/portfolio/*`).
- Always update or extend `PORTFOLIO_DATA` in `src/config/portfolio.config.ts`.

## 2. Data Structure Guidelines
- **Meta (`meta`)**: Contains `siteName`, `version`, `title`, and `description`. Used for SEO and head tags.
- **Profile (`profile`)**: Contains personal identity, avatar link, contact email, CV URL, and social profiles (GitHub, LinkedIn).
- **About (`about`)**: Paragraph describing personal trajectory and philosophy.
- **Technologies (`technologies`)**: Array of `TechBadge` (`name`, optional `icon`).
- **Experience (`experience`)**: Array of `ExperienceItem` (`company`, `role`, `period`, `description`, optional `iconType`).
- **Projects (`projects`)**: Array of `ProjectItem` (`title`, `subtitle`, `description`, `image`, `tags`, optional `githubUrl`, optional `liveUrl`).

## 3. Adding New Fields
If new data fields are needed:
1. First update the TypeScript interface (`PortfolioConfig` or corresponding item interface in `portfolio.config.ts`).
2. Update the default `PORTFOLIO_DATA` object.
3. Consume the new field in the respective component in `src/components/portfolio/`.
