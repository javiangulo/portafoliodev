import { PORTFOLIO_DATA } from '@/config/portfolio.config'

export const MinimalAbout = () => {
  const { about } = PORTFOLIO_DATA

  return (
    <section className="text-left space-y-3.5 lg:space-y-4">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-heading tracking-tight">
        Sobre mí
      </h2>

      <p className="text-base sm:text-lg lg:text-xl text-body leading-relaxed max-w-4xl">{about}</p>

      <hr className="border-border my-8 lg:my-10" />
    </section>
  )
}
