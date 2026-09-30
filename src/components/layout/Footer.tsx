import { PORTFOLIO_DATA } from '@/config/portfolio.config'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { meta, profile } = PORTFOLIO_DATA

  return (
    <footer className="w-full border-t border-border/60 py-10 lg:py-12 px-4 sm:px-6 lg:px-8 mt-20 text-xs sm:text-sm lg:text-base text-muted font-mono transition-colors">
      <div className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="text-heading font-semibold">{meta.siteName}</span> • Plantilla
          Minimalista para Developers
        </div>

        <div className="flex items-center gap-5">
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-heading transition-colors"
            >
              GitHub
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-heading transition-colors"
            >
              LinkedIn
            </a>
          )}
          <span>© {currentYear}</span>
        </div>
      </div>
    </footer>
  )
}
