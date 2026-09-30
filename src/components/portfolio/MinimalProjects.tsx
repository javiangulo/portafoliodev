import { TechIcon } from '@/components/icons/TechIcon'
import { PORTFOLIO_DATA } from '@/config/portfolio.config'

export const MinimalProjects = () => {
  const { projects } = PORTFOLIO_DATA

  return (
    <section className="text-left space-y-6 lg:space-y-7 animate-fade-in">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-heading tracking-tight flex items-center gap-2">
        <span>Proyectos</span>
      </h2>

      <div className="space-y-6 lg:space-y-7">
        {projects.map(project => (
          <article
            key={project.title}
            className="hover-lift flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-5 sm:p-6 lg:p-7 rounded-2xl bg-surface-card/60 hover:bg-surface-card border border-border hover:border-emerald-500/60 transition-all duration-300 group shadow-sm hover:shadow-xl"
          >
            {/* Left Content */}
            <div className="flex items-start gap-4 lg:gap-5 flex-1">
              {/* Project Category Icon with pulse animation on hover */}
              <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 dark:bg-[#112a1d] dark:border-[#1b4831] dark:text-emerald-400 flex items-center justify-center text-lg lg:text-xl shrink-0 mt-0.5 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                📊
              </div>

              {/* Details */}
              <div className="space-y-1.5 lg:space-y-2">
                <h3 className="font-bold text-base sm:text-lg lg:text-xl text-heading group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <div className="text-sm sm:text-base font-medium text-body">{project.subtitle}</div>
                <p className="text-xs sm:text-sm lg:text-base text-muted leading-relaxed max-w-lg pt-0.5">
                  {project.description}
                </p>

                {/* Teclas / Tags con iconos oficiales y animación táctil */}
                <div className="flex flex-wrap items-center gap-2 pt-2.5 text-xs lg:text-sm">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-lg text-xs lg:text-sm font-mono font-medium bg-slate-100 hover:bg-slate-200 dark:bg-[#181d27] dark:hover:bg-[#202735] text-slate-800 dark:text-neutral-200 border border-slate-300 dark:border-neutral-700 shadow-sm transition-transform hover:-translate-y-0.5 cursor-default"
                    >
                      <TechIcon name={tag} className="w-3.5 h-3.5 shrink-0" />
                      <span>{tag}</span>
                    </span>
                  ))}

                  <div className="flex items-center gap-3.5 pl-1.5 font-mono text-xs lg:text-sm">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted hover:text-heading transition-colors hover:underline inline-flex items-center gap-1"
                      >
                        <span>código</span>
                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline font-semibold inline-flex items-center gap-1"
                      >
                        <span>demo</span>
                        <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          ↗
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Thumbnail Image with smooth zoom animation */}
            {project.image && (
              <div className="w-full sm:w-56 md:w-64 lg:w-72 xl:w-80 h-36 sm:h-36 lg:h-44 rounded-xl overflow-hidden border border-border shrink-0 bg-surface-card shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                  loading="lazy"
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
