export interface TechBadge {
  name: string
  icon?: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
  iconType?: 'terminal' | 'rabbit' | 'code' | 'server'
}

export interface ProjectItem {
  title: string
  subtitle: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface PortfolioConfig {
  meta: {
    siteName: string
    version: string
    title: string
    description: string
  }
  profile: {
    name: string
    role: string
    location: string
    avatar: string
    email: string
    cvUrl: string
    github: string
    linkedin: string
  }
  about: string
  technologies: TechBadge[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
}

export const PORTFOLIO_DATA: PortfolioConfig = {
  meta: {
    siteName: 'portafolio.dev',
    version: '1.0.0',
    title: 'portafolio.dev — Template Minimalista para Developers (v1.0)',
    description:
      'Plantilla minimalista, centrada y optimizada para desarrolladores de software construida con Modern.js, React 19 y Tailwind CSS v4.',
  },
  profile: {
    name: 'Thomas A. Anderson (Neo)',
    role: 'Programador, hacker y el Elegido',
    location: 'Matrix y el mundo real',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
    email: 'neo@metacortex.com',
    cvUrl: '#',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  about:
    'Soy un programador inquieto con una doble vida, ya que trabajo en una prestigiosa empresa de software pero también he cometido todos los crímenes informáticos que existen. Tengo la sensación de que nada es lo que parece ser.',
  technologies: [
    { name: 'Binario', icon: '<>' },
    { name: 'Ensamblador', icon: '<>' },
    { name: 'COBOL', icon: '<>' },
    { name: 'C', icon: '🅒' },
    { name: 'Python', icon: '🐍' },
    { name: 'TypeScript', icon: '⚡' },
    { name: 'React 19', icon: '⚛️' },
    { name: 'Modern.js', icon: '🌐' },
    { name: 'Docker', icon: '🐳' },
  ],
  experience: [
    {
      company: 'Metacortex',
      role: 'Programador',
      period: '1999',
      description: 'Programo software respetable desde un cubículo.',
      iconType: 'terminal',
    },
    {
      company: 'Nebuchadnezzar',
      role: 'El Elegido',
      period: '1999 - Actualidad',
      description: 'Me encargo de salvar el mundo.',
      iconType: 'rabbit',
    },
  ],
  projects: [
    {
      title: 'Software random',
      subtitle: 'Software propiedad de Metacortex',
      description: 'Herramienta para hacer rico a otras personas.',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=350&q=80',
      tags: ['C++', 'Assembly', 'Windows'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Matrix Simulator & Construct',
      subtitle: 'Simulador de entrenamiento neuronal',
      description: 'Carga de programas de combate y artes marciales en memoria en milisegundos.',
      image:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=350&q=80',
      tags: ['Neural', 'C', 'RealTime'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
  ],
}
