import { Link, useLocation } from '@modern-js/runtime/router'
import { useState } from 'react'

export default function NotFoundPage() {
  const location = useLocation()
  const [copied, setCopied] = useState(false)

  const handleCopyPath = async () => {
    if (typeof window === 'undefined') return
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-16 sm:py-24 flex flex-col items-center justify-center text-center animate-fade-in">
      {/* Terminal Card */}
      <div className="w-full terminal-card rounded-2xl overflow-hidden border border-border shadow-xl text-left transition-all">
        {/* macOS Terminal Header */}
        <div className="bg-surface-card/90 px-4 py-3 border-b border-border/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
          </div>
          <span className="font-mono text-xs text-muted font-medium">bash — 404_not_found</span>
          <div className="w-12" />
        </div>

        {/* Terminal Body */}
        <div className="p-6 sm:p-8 space-y-6 font-mono">
          {/* Simulated CLI Command */}
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div className="text-muted flex items-center gap-2">
              <span className="text-emerald-500 font-bold">visitor@portafolio:~$</span>
              <span className="text-heading">fetch --route &quot;{location.pathname}&quot;</span>
            </div>
            <div className="text-rose-400 dark:text-rose-400 font-semibold pl-4">
              [!] 404: HTTP_NOT_FOUND — Resource not registered in routing table
            </div>
          </div>

          {/* Center Graphic Number */}
          <div className="py-4 text-center">
            <div className="inline-block relative">
              <span className="text-7xl sm:text-9xl font-black tracking-tight text-heading/10 dark:text-white/5 select-none font-mono">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-3.5 py-1 rounded-md text-xs sm:text-sm font-mono font-bold bg-rose-500/10 text-rose-500 border border-rose-500/20 backdrop-blur-sm">
                  ERR_ROUTE_NOT_FOUND
                </span>
              </div>
            </div>
          </div>

          {/* Human Readable Explanation */}
          <div className="text-center font-sans space-y-2">
            <h1 className="text-xl sm:text-2xl font-bold text-heading">Página no encontrada</h1>
            <p className="text-sm sm:text-base text-muted max-w-md mx-auto">
              La dirección que buscas no existe o ha sido movida. Puedes volver al inicio o
              verificar la ruta escrita.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="hover-lift w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 text-emerald-800 dark:bg-[#133823] dark:hover:bg-[#18482d] dark:border-[#1f5c38] dark:text-emerald-400 text-sm font-semibold transition-all shadow-sm"
            >
              <span>←</span>
              <span>Volver al Inicio</span>
            </Link>

            <button
              type="button"
              onClick={handleCopyPath}
              className="hover-lift w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface-card hover:bg-surface-hover border border-border text-heading text-sm font-medium transition-all shadow-sm cursor-pointer"
            >
              <span>📋</span>
              <span>{copied ? '¡URL Copiada!' : 'Copiar URL'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Breadcrumbs / Suggestions */}
      <div className="mt-8 text-xs font-mono text-muted flex items-center gap-2">
        <span>Sugerencia:</span>
        <Link to="/" className="text-emerald-500 hover:underline">
          ~ / inicio
        </Link>
        <span>•</span>
        <span className="text-muted">status: 404</span>
      </div>
    </div>
  )
}
