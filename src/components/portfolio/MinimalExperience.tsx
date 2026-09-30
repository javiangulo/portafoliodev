import { PORTFOLIO_DATA } from '@/config/portfolio.config'

export const MinimalExperience = () => {
  const { experience } = PORTFOLIO_DATA

  return (
    <section className="text-left space-y-5 lg:space-y-6 animate-fade-in">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-heading tracking-tight flex items-center gap-2">
        <span>Experiencia</span>
      </h2>

      <div className="space-y-6 lg:space-y-7">
        {experience.map(item => (
          <div
            key={`${item.company}-${item.role}`}
            className="hover-lift p-4 lg:p-5 rounded-2xl bg-surface-card/30 hover:bg-surface-card/80 border border-transparent hover:border-border transition-all duration-300 group flex items-start justify-between gap-4 lg:gap-6"
          >
            {/* Left: Icon + Content */}
            <div className="flex items-start gap-4 lg:gap-5">
              {/* Circular Company Icon with light/dark support & hover spin */}
              <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 dark:bg-[#112a1d] dark:border-[#1b4831] dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-base lg:text-lg shrink-0 shadow-sm mt-0.5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {item.iconType === 'terminal' ? (
                  <span>&gt;_</span>
                ) : item.iconType === 'rabbit' ? (
                  <span>🐇</span>
                ) : (
                  <span>💻</span>
                )}
              </div>

              {/* Text Info */}
              <div className="space-y-1 lg:space-y-1.5">
                <div className="font-bold text-base sm:text-lg lg:text-xl text-heading leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.company}
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-medium text-body">
                  {item.role}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-muted leading-relaxed pt-0.5 max-w-2xl">
                  {item.description}
                </div>
              </div>
            </div>

            {/* Right: Date Badge with high contrast */}
            <div className="shrink-0 pt-0.5">
              <span className="inline-block text-xs lg:text-sm font-mono px-3 py-1 lg:px-3.5 lg:py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 dark:bg-[#112a1d] dark:text-emerald-400 dark:border-[#1b4831] font-medium shadow-sm group-hover:shadow transition-shadow">
                {item.period}
              </span>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-border my-8 lg:my-10" />
    </section>
  )
}
