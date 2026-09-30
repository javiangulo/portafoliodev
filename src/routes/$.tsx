import { Link } from '@modern-js/runtime/router'

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
      <div className="text-8xl font-black text-blue-500/20 tracking-widest">404</div>
      <h1 className="text-3xl sm:text-4xl font-bold text-heading">Página no encontrada</h1>
      <p className="text-body max-w-md">
        Lo sentimos, la página que buscas no existe o ha sido movida temporalmente.
      </p>
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-md"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  )
}
