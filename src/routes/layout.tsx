import { Outlet } from '@modern-js/runtime/router'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { ErrorBoundary } from '@/components/layout/ErrorBoundary'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

import '@/styles/tailwind.css'
import '@/styles/global.scss'

export default function Layout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-app text-body selection:bg-emerald-500/20 selection:text-emerald-400">
        <Header />
        <main className="flex-1 w-full flex flex-col items-center">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
