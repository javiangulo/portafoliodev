import { MinimalAbout } from '@/components/portfolio/MinimalAbout'
import { MinimalExperience } from '@/components/portfolio/MinimalExperience'
import { MinimalHeader } from '@/components/portfolio/MinimalHeader'
import { MinimalProjects } from '@/components/portfolio/MinimalProjects'
import { MinimalTech } from '@/components/portfolio/MinimalTech'

export default function IndexPage() {
  return (
    <div className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 space-y-6 lg:space-y-8 transition-all">
      {/* Profile Header: Avatar, Name, Subtitle, Location, Green Email Pill & Socials */}
      <MinimalHeader />

      {/* Sobre mí */}
      <MinimalAbout />

      {/* Tecnologías */}
      <MinimalTech />

      {/* Experiencia */}
      <MinimalExperience />

      {/* Proyectos */}
      <MinimalProjects />
    </div>
  )
}
