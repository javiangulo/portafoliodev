interface TechIconProps {
  name: string
  className?: string
}

export const TechIcon = ({ name, className = 'w-4 h-4' }: TechIconProps) => {
  const normalized = name.toLowerCase().trim()

  switch (normalized) {
    case 'python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>Python</title>
          <path
            d="M11.91 2c-5.06 0-4.73 2.19-4.73 2.19l.01 2.27h4.82v.68H5.21S2 6.77 2 11.87c0 5.1 2.8 4.93 2.8 4.93h1.67v-2.34s-.09-2.8 2.75-2.8h4.72s2.65.04 2.65-2.58V4.58S16.98 2 11.91 2zm-2.6 1.48c.5 0 .91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91z"
            fill="#3776AB"
          />
          <path
            d="M12.09 22c5.06 0 4.73-2.19 4.73-2.19l-.01-2.27h-4.82v-.68h6.8s3.21.37 3.21-4.73c0-5.1-2.8-4.93-2.8-4.93h-1.67v2.34s.09 2.8-2.75 2.8H10.06s-2.65-.04-2.65 2.58v4.5s-.41 2.58 4.68 2.58zm2.6-1.48c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91z"
            fill="#FFD43B"
          />
        </svg>
      )

    case 'c':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>C</title>
          <path
            d="M12 2L2 7.75v11.5L12 25l10-5.75V7.75L12 2z"
            fill="#00599C"
            transform="scale(0.85) translate(2, 0)"
          />
          <path
            d="M12 5.5c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c2.47 0 4.63-1.38 5.74-3.42l-2.48-1.43c-.64 1.18-1.89 1.99-3.26 1.99-2.14 0-3.87-1.73-3.87-3.87s1.73-3.87 3.87-3.87c1.37 0 2.62.81 3.26 1.99l2.48-1.43C16.63 6.88 14.47 5.5 12 5.5z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case 'c++':
    case 'cpp':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>C++</title>
          <path
            d="M12 2L2 7.75v11.5L12 25l10-5.75V7.75L12 2z"
            fill="#004482"
            transform="scale(0.85) translate(2, 0)"
          />
          <path
            d="M10 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c1.9 0 3.56-1.06 4.41-2.63l-1.91-1.1C12.01 14.18 11.08 14.8 10 14.8c-1.55 0-2.8-1.25-2.8-2.8s1.25-2.8 2.8-2.8c1.08 0 2.01.62 2.5 1.53l1.91-1.1C13.56 8.06 11.9 7 10 7zm5.5 3.5v1.5h-1.5v1h1.5v1.5h1V13H18v-1h-1.5v-1.5h-1zm4 0v1.5h-1.5v1h1.5v1.5h1V13H22v-1h-1.5v-1.5h-1z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case 'typescript':
    case 'ts':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>TypeScript</title>
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M12.5 12.8v-1.9H7.2v1.9h1.7v7.2h2V12.8h1.6zm2.3 3.6c.4.6.9 1 1.7 1 .8 0 1.2-.4 1.2-.9 0-.6-.5-.8-1.4-1.2-1.3-.5-2.2-1.1-2.2-2.3 0-1.4 1.1-2.4 2.7-2.4 1.3 0 2.2.5 2.7 1.4l-1.4 1c-.3-.5-.7-.7-1.3-.7-.5 0-.9.3-.9.7 0 .5.4.7 1.3 1 1.4.5 2.3 1.1 2.3 2.4 0 1.6-1.2 2.5-3 2.5-1.5 0-2.6-.6-3.1-1.7l1.4-.8z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case 'react':
    case 'react 19':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>React</title>
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            stroke="#61DAFB"
            strokeWidth="1.5"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            stroke="#61DAFB"
            strokeWidth="1.5"
            transform="rotate(120 12 12)"
          />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      )

    case 'modern.js':
    case 'modernjs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <title>Modern.js</title>
          <circle cx="12" cy="12" r="11" fill="#0066FF" />
          <path
            d="M6.5 16.5L10 7.5L13.5 16.5L17.5 7.5"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'docker':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#2496ED" aria-hidden="true">
          <title>Docker</title>
          <path d="M13.98 11.08h1.86v1.86h-1.86v-1.86zm-2.4 0h1.86v1.86h-1.86v-1.86zm-2.4 0h1.86v1.86H9.18v-1.86zm-2.4 0h1.86v1.86H6.78v-1.86zm7.2-2.39h1.86v1.86h-1.86V8.69zm-2.4 0h1.86v1.86h-1.86V8.69zm-2.4 0h1.86v1.86H9.18V8.69zm4.8-2.39h1.86v1.86h-1.86V6.3zm10.74 7.21c-.48-.35-1.57-.45-2.43-.37-.14-.77-.52-1.46-1.07-2.02l-.52.41c.42.44.72.98.85 1.57-.61.18-1.5.58-1.92 1.15-.36-.08-.75-.12-1.15-.12H1.94c-.45 1.77.06 3.65 1.34 4.96C4.8 20.61 7.25 21 11.23 21c4.95 0 8.91-1.98 10.96-5.83.69-.13 1.48-.48 1.93-1.08l-.66-.58z" />
        </svg>
      )

    case 'tailwind':
    case 'tailwind css':
    case 'tailwindcss':
    case 'tailwind v4':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#06B6D4" aria-hidden="true">
          <title>Tailwind CSS</title>
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      )

    case 'node.js':
    case 'nodejs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#5FA04E" aria-hidden="true">
          <title>Node.js</title>
          <path d="M12 2L2 7.75v11.5L12 25l10-5.75V7.75L12 2zm0 2.3l7.98 4.6v9.2L12 22.7l-7.98-4.6v-9.2L12 4.3z" />
          <path d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" />
        </svg>
      )

    case 'rust':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#DEA584" aria-hidden="true">
          <title>Rust</title>
          <circle cx="12" cy="12" r="10" stroke="#DEA584" strokeWidth="2" fill="none" />
          <path
            d="M8.5 7h4a3 3 0 010 6h-4V7zm0 6h4.5l3.5 5h-2.5l-3-4.5H8.5V13zm2-4v2h2a1 1 0 000-2h-2z"
            fill="#DEA584"
          />
        </svg>
      )

    case 'binario':
    case 'binary':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <title>Binario</title>
          <path d="M4 6h3v12H4" />
          <path d="M10 6h4v12h-4z" />
          <path d="M17 6h3v12h-3" />
        </svg>
      )

    case 'ensamblador':
    case 'assembly':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <title>Ensamblador</title>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
        </svg>
      )

    case 'cobol':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <title>COBOL</title>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4M6 8h4M6 12h2" />
        </svg>
      )

    case 'neural':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <title>Redes Neuronales</title>
          <circle cx="12" cy="12" r="3" />
          <circle cx="4" cy="6" r="2" />
          <circle cx="20" cy="6" r="2" />
          <circle cx="4" cy="18" r="2" />
          <circle cx="20" cy="18" r="2" />
          <path d="M6 7l4 3.5M14 10.5l4-3.5M6 17l4-3.5M14 13.5l4 3.5" />
        </svg>
      )

    case 'windows':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#0078D4" aria-hidden="true">
          <title>Windows</title>
          <path d="M2.5 4.5l8-1.1v8.1H2.5V4.5zm0 8.8h8v8.1l-8-1.1v-7zm9.8-10.1l9.2-1.3v9.5h-9.2V3.2zm0 10.1h9.2v9.5l-9.2-1.3v-8.2z" />
        </svg>
      )

    case 'realtime':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <title>Tiempo Real</title>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" />
        </svg>
      )

    default:
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <title>{name}</title>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
  }
}
