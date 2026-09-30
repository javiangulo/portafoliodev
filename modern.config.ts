import fs from 'node:fs'
import path from 'node:path'
import { appTools, defineConfig } from '@modern-js/app-tools'

// Cargar .env manualmente para asegurar que process.env esté poblado en tiempo de compilación
try {
  const envPath = path.resolve(__dirname, '.env')
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8')
    for (const line of envContent.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const firstEqual = trimmed.indexOf('=')
      if (firstEqual !== -1) {
        const key = trimmed.slice(0, firstEqual).trim()
        let value = trimmed.slice(firstEqual + 1).trim()
        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1)
        }
        if (!process.env[key]) {
          process.env[key] = value
        }
      }
    }
  }
} catch (e) {
  console.error('No se pudo leer el archivo .env:', e)
}

const renderingMode = process.env.MODERN_APP_RENDERING_MODE?.toUpperCase()

export default defineConfig({
  server: {
    ssr: renderingMode === 'SSR',
    port: Number(process.env.PORT) || 3000,
  },
  plugins: [appTools()],
  source: {
    alias: {
      '@': './src',
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.MODERN_APP_API_BASE_URL': JSON.stringify(
        process.env.MODERN_APP_API_BASE_URL || ''
      ),
      'process.env.MODERN_APP_ENVIRONMENT': JSON.stringify(
        process.env.MODERN_APP_ENVIRONMENT || 'development'
      ),
      'process.env.MODERN_APP_RENDERING_MODE': JSON.stringify(
        process.env.MODERN_APP_RENDERING_MODE || 'SSR'
      ),
    },
  },
  output: {
    assetPrefix: '/',
    copy: [
      {
        from: './public',
        to: './',
      },
    ],
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [require('@tailwindcss/postcss'), require('autoprefixer')],
      },
    },
  },
})
