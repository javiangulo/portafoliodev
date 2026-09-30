import { createContext, type ReactNode, useContext, useEffect, useState } from 'react'
import type { Theme } from '@/types'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const THEME_STORAGE_KEY = 'portafoliodev_theme'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setThemeState(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
      document.body.className = savedTheme === 'dark' ? 'dark-theme' : 'light-theme'
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initial = prefersDark ? 'dark' : 'light'
      setThemeState(initial)
      document.documentElement.setAttribute('data-theme', initial)
      document.body.className = initial === 'dark' ? 'dark-theme' : 'light-theme'
    }
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem(THEME_STORAGE_KEY, newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    document.body.className = newTheme === 'dark' ? 'dark-theme' : 'light-theme'
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
