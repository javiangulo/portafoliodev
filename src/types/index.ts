export type Theme = 'dark' | 'light'

export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'backend'

export interface ProjectItem {
  id: string
  title: string
  tagline: string
  description: string
  category: ProjectCategory
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  stars?: number
  metrics?: string
  highlights?: string[]
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  current?: boolean
  description: string
  achievements: string[]
  technologies: string[]
}

export interface TechItem {
  name: string
  level: 'Daily Driver' | 'Production Ready' | 'Advanced'
  category: string
  iconName?: string
}

export interface SkillCategory {
  title: string
  description?: string
  skills: string[]
}
