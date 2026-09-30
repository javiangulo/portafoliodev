// src/config/environment.ts

/**
 * Configuración de entorno compatible con SSR (servidor) y cliente (navegador).
 */
const isServer = typeof window === 'undefined'

export const config = {
  apiBaseUrl: process.env.MODERN_APP_API_BASE_URL || 'http://localhost:3000',
  environment: process.env.MODERN_APP_ENVIRONMENT || 'development',
  isProduction: isServer
    ? process.env.NODE_ENV === 'production'
    : typeof window !== 'undefined' &&
      window.location.hostname !== 'localhost' &&
      !window.location.hostname.includes('127.0.0.1'),
  isDevelopment: isServer
    ? process.env.NODE_ENV !== 'production'
    : typeof window !== 'undefined' &&
      (window.location.hostname === 'localhost' || window.location.hostname.includes('127.0.0.1')),
  environmentInfo: {
    isServer,
    isClient: !isServer,
    timestamp: new Date().toISOString(),
  },
} as const

export const getEnvVar = (key: string, defaultValue = ''): string => {
  if (isServer && typeof process !== 'undefined' && process.env) {
    return process.env[key] || defaultValue
  }
  return defaultValue
}

export default config
