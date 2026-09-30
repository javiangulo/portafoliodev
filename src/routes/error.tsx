import { isRouteErrorResponse, Link, useRouteError } from '@modern-js/runtime/router'
import { useState } from 'react'

export default function RouteErrorBoundary() {
  const error = useRouteError()
  const [showStack, setShowStack] = useState(false)
  const [copied, setCopied] = useState(false)

  // Extract detailed error information
  let status = 500
  let statusText = 'Runtime Exception'
  let message = 'Se ha producido un error inesperado al procesar la solicitud.'
  let stack = ''

  if (isRouteErrorResponse(error)) {
    status = error.status
    statusText = error.statusText || 'Route Error'
    message =
      typeof error.data === 'string'
        ? error.data
        : error.data?.message || error.statusText || 'Error de enrutamiento o carga'
  } else if (error instanceof Error) {
    status = 500
    statusText = error.name || 'Application Error'
    message = error.message || 'Error en tiempo de ejecución'
    stack = error.stack || ''
  } else if (typeof error === 'string') {
    message = error
  }

  const handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  const handleCopyDiagnostics = async () => {
    if (typeof window === 'undefined') return
    const diagnostics = [
      `Status: ${status} (${statusText})`,
      `Message: ${message}`,
      `URL: ${window.location.href}`,
      `Timestamp: ${new Date().toISOString()}`,
      stack ? `\nStack:\n${stack}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    try {
      await navigator.clipboard.writeText(diagnostics)
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
          <span className="font-mono text-xs text-muted font-medium">
            crash_dump.log — Error {status}
          </span>
          <div className="w-12" />
        </div>

        {/* Terminal Body */}
        <div className="p-6 sm:p-8 space-y-6 font-mono">
          {/* Simulated CLI error output */}
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div className="text-muted flex items-center gap-2">
              <span className="text-amber-500 font-bold">system@portafolio:~$</span>
              <span className="text-heading">diagnose --catch-boundary</span>
            </div>
            <div className="text-rose-400 dark:text-rose-400 font-semibold pl-4">
              [CRITICAL] {status} {statusText}: {message}
            </div>
          </div>

          {/* Graphical Error Status Box */}
          <div className="py-2 text-center">
            <div className="inline-block relative">
              <span className="text-7xl sm:text-9xl font-black tracking-tight text-heading/10 dark:text-white/5 select-none font-mono">
                {status}
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-3.5 py-1 rounded-md text-xs sm:text-sm font-mono font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20 backdrop-blur-sm">
                  {statusText.toUpperCase().replace(/\s+/g, '_')}
                </span>
              </div>
            </div>
          </div>

          {/* User-friendly message */}
          <div className="text-center font-sans space-y-2">
            <h1 className="text-xl sm:text-2xl font-bold text-heading">
              Algo no salió como esperábamos
            </h1>
            <p className="text-sm sm:text-base text-muted max-w-md mx-auto">
              Se ha capturado una excepción en la vista actual. Puedes intentar recargar la página o
              volver a la pantalla principal.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleReload}
              className="hover-lift w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 text-emerald-800 dark:bg-[#133823] dark:hover:bg-[#18482d] dark:border-[#1f5c38] dark:text-emerald-400 text-sm font-semibold transition-all shadow-sm cursor-pointer"
            >
              <span>🔄</span>
              <span>Reintentar</span>
            </button>

            <Link
              to="/"
              className="hover-lift w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface-card hover:bg-surface-hover border border-border text-heading text-sm font-medium transition-all shadow-sm"
            >
              <span>←</span>
              <span>Volver al Inicio</span>
            </Link>

            <button
              type="button"
              onClick={handleCopyDiagnostics}
              className="hover-lift w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface-card hover:bg-surface-hover border border-border text-muted hover:text-heading text-sm font-medium transition-all shadow-sm cursor-pointer"
            >
              <span>📋</span>
              <span>{copied ? '¡Copiado!' : 'Copiar Diagnóstico'}</span>
            </button>
          </div>

          {/* Collapsible Stack Trace for Developers */}
          {stack && (
            <div className="pt-4 border-t border-border/60">
              <button
                type="button"
                onClick={() => setShowStack(!showStack)}
                className="text-xs text-muted hover:text-heading flex items-center gap-1 font-mono transition-colors cursor-pointer"
              >
                <span>{showStack ? '▼' : '▶'}</span>
                <span>
                  {showStack ? 'Ocultar detalles técnicos' : 'Ver detalles técnicos (Stack Trace)'}
                </span>
              </button>

              {showStack && (
                <pre className="mt-3 p-3.5 rounded-lg bg-surface-card text-rose-300/90 text-xs font-mono overflow-x-auto max-h-48 border border-border/80 whitespace-pre-wrap leading-relaxed">
                  {stack}
                </pre>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer Diagnostic Note */}
      <div className="mt-8 text-xs font-mono text-muted flex items-center gap-2">
        <span>portafolio.dev</span>
        <span>•</span>
        <span className="text-amber-500">status: {status}</span>
        <span>•</span>
        <span>safe-mode: active</span>
      </div>
    </div>
  )
}
