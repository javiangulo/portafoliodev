import { TechIcon } from '@/components/icons/TechIcon'
import { PORTFOLIO_DATA } from '@/config/portfolio.config'

export const MinimalTech = () => {
  const { technologies } = PORTFOLIO_DATA

  return (
    <section className="text-left space-y-4 lg:space-y-5 animate-fade-in">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-heading tracking-tight flex items-center gap-2">
        <span>Tecnologías</span>
      </h2>

      <div className="flex flex-wrap gap-2.5 lg:gap-3.5 pt-1">
        {technologies.map(tech => (
          <span
            key={tech.name}
            className="group hover-lift inline-flex items-center gap-2.5 px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100/90 text-emerald-900 border border-emerald-300/90 dark:bg-[#112a1d] dark:hover:bg-[#163827] dark:border-[#1b4831] dark:text-emerald-300 text-xs sm:text-sm lg:text-base font-mono font-medium transition-all shadow-sm hover:shadow-md cursor-pointer select-none"
          >
            <span className="shrink-0 transition-transform duration-200 group-hover:scale-125 group-hover:rotate-6">
              <TechIcon name={tech.name} className="w-4 h-4 lg:w-5 lg:h-5" />
            </span>
            <span className="transition-colors group-hover:text-emerald-950 dark:group-hover:text-emerald-200">
              {tech.name}
            </span>
          </span>
        ))}
      </div>

      <hr className="border-border my-8 lg:my-10" />
    </section>
  )
}
