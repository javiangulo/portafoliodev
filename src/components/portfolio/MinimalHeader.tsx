import { useState } from 'react'
import { PORTFOLIO_DATA } from '@/config/portfolio.config'

export const MinimalHeader = () => {
  const [copied, setCopied] = useState(false)
  const { profile } = PORTFOLIO_DATA

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
    }
  }

  return (
    <section className="text-left space-y-5 lg:space-y-6 pt-2 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-10">
        {/* Circular Avatar with hover micro-animation */}
        <div className="relative shrink-0 group">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full object-cover border-2 border-border shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300"
            loading="eager"
          />
        </div>

        {/* Profile Info */}
        <div className="space-y-2 lg:space-y-2.5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading tracking-tight">
            {profile.name}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl font-medium text-body">{profile.role}</p>

          <div className="flex items-center gap-1.5 text-xs sm:text-sm lg:text-base text-muted">
            <span className="text-muted">📍</span>
            <span>{profile.location}</span>
          </div>

          {/* Action Pills Row */}
          <div className="flex flex-wrap items-center gap-2.5 lg:gap-3 pt-2">
            {/* Green Email Pill with micro-animation */}
            <a
              href={`mailto:${profile.email}`}
              onClick={handleCopyEmail}
              title="Click para copiar o enviar correo"
              className="hover-lift inline-flex items-center gap-2 px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-lg bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 text-emerald-800 dark:bg-[#133823] dark:hover:bg-[#18482d] dark:border-[#1f5c38] dark:text-emerald-400 text-xs sm:text-sm lg:text-base font-medium transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>✉️</span>
              <span>{copied ? '¡Copiado!' : profile.email}</span>
            </a>

            {/* CV Button */}
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Descargar o ver Curriculum Vitae"
                className="hover-lift inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-lg bg-surface-card hover:bg-surface-hover border border-border text-heading text-sm lg:text-base transition-all shadow-sm hover:shadow-md hover:scale-105"
              >
                <span>📄</span>
              </a>
            )}

            {/* GitHub */}
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Perfil de GitHub"
                className="hover-lift inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-lg bg-surface-card hover:bg-surface-hover border border-border text-heading text-sm lg:text-base transition-all shadow-sm hover:shadow-md hover:scale-105"
              >
                <svg
                  className="w-4 h-4 lg:w-5 lg:h-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
            )}

            {/* LinkedIn */}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Perfil de LinkedIn"
                className="hover-lift inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-lg bg-surface-card hover:bg-surface-hover border border-border text-heading text-sm lg:text-base transition-all shadow-sm hover:shadow-md hover:scale-105"
              >
                <svg
                  className="w-4 h-4 lg:w-5 lg:h-5 fill-current text-[#0077b5] dark:text-[#4ade80]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
