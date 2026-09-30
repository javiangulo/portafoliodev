import { Component, type ErrorInfo, type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public override state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  private handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  public override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="w-full max-w-xl mx-auto my-8 p-6 terminal-card rounded-2xl border border-rose-500/30 font-mono text-left animate-fade-in">
          <div className="flex items-center gap-2 pb-3 mb-4 border-b border-border/80">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="text-xs text-rose-400 font-medium ml-2">error_boundary.tsx</span>
          </div>

          <p className="text-xs text-rose-400 font-bold mb-2">
            [FATAL] Error al renderizar esta sección
          </p>
          <p className="text-sm text-heading mb-4 bg-surface-card p-3 rounded-lg border border-border">
            {this.state.error?.message || 'Error inesperado'}
          </p>

          <div className="flex items-center gap-3 font-sans">
            <button
              type="button"
              onClick={this.handleReset}
              className="px-3.5 py-1.5 rounded-lg bg-surface-card hover:bg-surface-hover border border-border text-heading text-xs font-medium cursor-pointer"
            >
              Reintentar render
            </button>
            <button
              type="button"
              onClick={this.handleReload}
              className="px-3.5 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 text-xs font-medium cursor-pointer"
            >
              Recargar página
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
