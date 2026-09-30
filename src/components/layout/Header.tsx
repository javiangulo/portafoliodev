import { Link } from '@modern-js/runtime/router'
import { PORTFOLIO_DATA } from '@/config/portfolio.config'
import { useTheme } from '@/hooks/useTheme'

export const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const { meta } = PORTFOLIO_DATA

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-border/60 backdrop-blur-md transition-colors">
      <div className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-18 flex items-center justify-between transition-all">
        {/* Brand: portafolio.dev */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-emerald-100 dark:bg-[#133823] border border-emerald-300 dark:border-[#1f5c38] flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-mono font-bold text-xs lg:text-sm shadow-sm group-hover:scale-105 transition-transform">
            &lt;&gt;
          </div>
          <span className="font-mono font-bold text-base lg:text-lg tracking-tight text-heading">
            {meta.siteName}
          </span>
          <span className="text-[11px] lg:text-xs font-mono px-2 py-0.5 rounded-md bg-surface-card border border-border text-muted hidden sm:inline font-medium">
            template
          </span>
        </Link>

        {/* Right Actions: Improved Light/Dark Theme Switcher */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
            className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-surface-card hover:bg-surface-hover border border-border flex items-center justify-center text-heading transition-all shadow-sm cursor-pointer hover:scale-105"
          >
            {theme === 'dark' ? (
              /* Sun Icon (Dark Mode active, click for light) */
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-amber-400 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              /* Moon Icon (Light Mode active, click for dark) */
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-600 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
