# ⚡ portafolio.dev `v1.0.0`

[![Version](https://img.shields.io/badge/release-v1.0.0-10b981.svg)](https://github.com)
[![Modern.js](https://img.shields.io/badge/Modern.js-v3.9.3-0066ff.svg)](https://modernjs.dev)
[![React](https://img.shields.io/badge/React-v19.3.0-61dafb.svg)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-06b6d4.svg)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.9.3-3178c6.svg)](https://www.typescriptlang.org)
[![Biome](https://img.shields.io/badge/Biome-v2.5.15-60a5fa.svg)](https://biomejs.dev)

> **Template minimalista, moderno y de alto rendimiento para desarrolladores de software — Versión 1.0.0.**  
> Construido con **Modern.js**, **React 19**, **TypeScript**, **Tailwind CSS v4** y **Biome**.

---

## 📖 Tabla de Contenidos

- [Características Principales](#-características-principales)
- [Tecnologías y Stack](#-tecnologías-y-stack)
- [Arquitectura y Construcción del Portafolio](#-arquitectura-y-construcción-del-portafolio)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Cómo Personalizar tu Portafolio](#-cómo-personalizar-tu-portafolio)
- [Scripts Disponibles](#-scripts-disponibles)
- [Ideas de Integración con Inteligencia Artificial (AI Roadmap)](#-ideas-de-integración-con-inteligencia-artificial-ai-roadmap)
- [Buenas Prácticas Aplicadas](#-buenas-prácticas-aplicadas)
- [Licencia](#-licencia)

---

## ✨ Características Principales

- **Diseño Centrado y Proporcional**: Layout simétrico (`max-w-3xl` a `max-w-5xl`) optimizado tanto para móviles como para pantallas ultra-anchas (1920px+).
- **Esquema Validado para Developers**: Inspirado en el estándar de portafolios técnicos (Perfil, Sobre mí, Tecnologías, Experiencia y Proyectos).
- **Iconos Oficiales Vectoriales**: Componente SVG nativo con las marcas oficiales de las principales tecnologías del mercado (Python, C, C++, TypeScript, React, Docker, Tailwind, Node.js, etc.).
- **Modo Oscuro / Claro Nativo**: Alternador con micro-interacciones, variables CSS independientes y alto contraste garantizado para etiquetas y teclas táctiles.
- **Configuración Centralizada**: Toda tu información se edita desde un único archivo tipado con TypeScript ([src/config/portfolio.config.ts](src/config/portfolio.config.ts)).
- **Micro-animaciones Fluidas**: Elevación de tarjetas (`hover-lift`), rotación sutil de iconos y zoom suave en miniaturas.

---

## 🛠️ Tecnologías y Stack

El proyecto utiliza las versiones más recientes y estándares modernos de la industria web:

| Herramienta | Versión | Rol en el Proyecto |
| :--- | :--- | :--- |
| **[Modern.js](https://modernjs.dev/)** | `v3.9.3` | Framework web progresivo para React con Server-Side Rendering (SSR) y optimización de bundles. |
| **[React](https://react.dev/)** | `v19.3.0` | Biblioteca base de interfaz de usuario con arquitectura de concurrencia y rendimiento mejorado. |
| **[TypeScript](https://www.typescriptlang.org/)** | `v5.9.3` | Tipado estático estricto al 100% en todo el código base (cero uso de `any`). |
| **[Tailwind CSS](https://tailwindcss.com/)** | `v4.3.3` | Motor de utilidades CSS-first de última generación con integración nativa `@tailwindcss/postcss`. |
| **[Sass (SCSS)](https://sass-lang.com/)** | `v1.105.0` | Preprocesador para tokens de diseño globales, temas dinámicos y funciones avanzadas. |
| **[Biome](https://biomejs.dev/)** | `v2.5.15` | Herramienta ultrarrápida unificada de formateo y linting que reemplaza a ESLint y Prettier. |
| **[pnpm](https://pnpm.io/)** | `v12.5.1` | Gestor de paquetes rápido y eficiente con soporte para builds nativos en `pnpm-workspace.yaml`. |
| **[Node.js](https://nodejs.org/)** | `>=22.x LTS` | Entorno de ejecución de largo plazo especificado en `.nvmrc` y `package.json`. |

---

## 🏗️ Arquitectura y Construcción del Portafolio

La arquitectura del portafolio se estructuró siguiendo el principio de **"Menos es más"** y una jerarquía visual enfocada en la experiencia del reclutador y del visitante técnico:

### 1. Sistema de Temas (Dark / Light Mode)
El sistema opera mediante variables CSS semánticas en [src/styles/global.scss](src/styles/global.scss) aplicadas en el atributo `[data-theme]` del elemento raíz:
- **Modo Oscuro**: Fondo carbón profundo (`#0c0e12`), tarjetas en `#13171f`, bordes sutiles y acentos verde esmeralda estilo hacker/Matrix.
- **Modo Claro**: Fondo nítido (`#f8fafc`), tarjetas blancas puras, bordes contrastados (`#cbd5e1`) y etiquetas estilo "tecla de teclado" táctil con bordes legibles.

### 2. Contenedor Responsivo Inteligente
A diferencia de los portafolios estáticos tradicionales que se ven minúsculos en monitores Full HD (1920px), este template implementa un contenedor que escala proporcionalmente:
- **Móvil / Tablet**: `max-w-3xl` (768px).
- **Escritorio / Monitores grandes (`lg:` / `xl:`)**: Escala fluidamente a **`1024px` (`max-w-5xl`)**, aumentando las tipografías a `text-5xl`, los avatares a `144px` y las miniaturas de proyectos para aprovechar la pantalla con balance visual perfecto.

### 3. Iconografía Vectorial Nativa ([TechIcon.tsx](src/components/icons/TechIcon.tsx))
En lugar de depender de paquetes de iconos pesados de terceros, se construyó un catálogo vectorial SVG optimizado:
- Iconos oficiales con trazos originales y paletas exactas.
- Cumplimiento de accesibilidad WCAG con atributos `aria-hidden="true"` y elementos semánticos `<title>`.

---

## 📂 Estructura del Proyecto

```text
portafoliodev/
├── .biomeignore                    # Reglas de exclusión para Biome
├── .env                            # Variables de entorno activas
├── .env.default                    # Plantilla de variables de entorno
├── .gitignore                      # Exclusiones de Git
├── .nvmrc                          # Versión de Node (v22.16.0)
├── biome.json                      # Configuración de linter y formateador Biome
├── modern.config.ts                # Configuración de Modern.js (SSR, plugins, PostCSS)
├── package.json                    # Dependencias y scripts
├── pnpm-lock.yaml                  # Lockfile de dependencias
├── pnpm-workspace.yaml             # Configuración de builds nativos pnpm v12
├── postcss.config.js               # Adaptador de Tailwind CSS v4 para Modern.js
├── tsconfig.json                   # Configuración estricta de TypeScript
├── public/                         # Archivos estáticos públicos (favicon, robots.txt)
└── src/
    ├── app/
    │   └── providers/              # ThemeProvider y contexto de modo oscuro/claro
    ├── components/
    │   ├── icons/
    │   │   └── TechIcon.tsx        # Iconos vectoriales oficiales con accesibilidad
    │   ├── layout/
    │   │   ├── Header.tsx          # Barra superior con logo, template badge y theme toggle
    │   │   └── Footer.tsx          # Pie de página centrado con redes y copyright
    │   └── portfolio/
    │       ├── MinimalHeader.tsx   # Perfil: Avatar, nombre, rol, ubicación y píldora de email
    │       ├── MinimalAbout.tsx    # Sección "Sobre mí" con tipografía holgada
    │       ├── MinimalTech.tsx     # Píldoras interactivas de tecnologías con micro-animaciones
    │       ├── MinimalExperience.tsx# Historial laboral con iconos de empresa y badges de fechas
    │       └── MinimalProjects.tsx # Tarjetas de proyectos con tags táctiles y miniaturas
    ├── config/
    │   ├── environment.ts          # Acceso tipado a variables de entorno
    │   └── portfolio.config.ts     # ⭐️ ARCHIVO CENTRAL DE DATOS DEL PORTAFOLIO
    ├── hooks/
    │   └── useTheme.ts             # Hook para alternar temas claro y oscuro
    ├── routes/
    │   ├── layout.tsx              # Layout raíz con centrado flex y carga de estilos
    │   ├── page.tsx                # Página principal que ensambla las secciones
    │   └── $.tsx                   # Vista 404 (catch-all)
    └── styles/
        ├── breakpoints.scss        # Mixins SCSS responsive
        ├── global.scss             # Variables CSS, reset y keyframes de animación
        └── tailwind.css            # Configuración CSS-first de Tailwind CSS v4
```

---

## 🎨 Cómo Personalizar tu Portafolio

Todo el contenido del portafolio se administra desde **un solo lugar**:
👉 **[src/config/portfolio.config.ts](src/config/portfolio.config.ts)**

Simplemente abre el archivo y edita tus datos:

```typescript
export const PORTFOLIO_DATA: PortfolioConfig = {
  meta: {
    siteName: 'portafolio.dev',
    title: 'Tu Nombre — Portafolio',
    description: 'Mi portafolio profesional como desarrollador.',
  },
  profile: {
    name: 'Tu Nombre Completo',
    role: 'Full-Stack Developer | React & TypeScript',
    location: 'Madrid, España (Disponible Remoto)',
    avatar: 'https://tu-imagen.com/avatar.jpg',
    email: 'contacto@tudominio.com',
    cvUrl: '/tu-cv.pdf',
    github: 'https://github.com/tu-usuario',
    linkedin: 'https://linkedin.com/in/tu-usuario',
  },
  about: 'Breve descripción sobre tu trayectoria, valores técnicos y enfoque profesional.',
  technologies: [
    { name: 'TypeScript', icon: '⚡' },
    { name: 'React 19', icon: '⚛️' },
    { name: 'Node.js', icon: '📦' },
    { name: 'Python', icon: '🐍' },
  ],
  experience: [
    {
      company: 'Empresa',
      role: 'Puesto',
      period: '2023 — Presente',
      description: 'Breve explicación del impacto y tecnologías usadas.',
      iconType: 'terminal', // 'terminal' | 'rabbit' | 'code' | 'server'
    },
  ],
  projects: [
    {
      title: 'Nombre del Proyecto',
      subtitle: 'Arquitectura o cliente',
      description: 'Descripción concisa de la solución y funcionalidades clave.',
      image: 'https://tu-imagen.com/preview.jpg',
      tags: ['React 19', 'TypeScript', 'Tailwind v4'],
      githubUrl: 'https://github.com/tu-usuario/proyecto',
      liveUrl: 'https://tu-demo.com',
    },
  ],
}
```

---

## 🚀 Scripts Disponibles

En la raíz del proyecto puedes ejecutar:

```bash
# Iniciar servidor de desarrollo en http://localhost:3001
pnpm dev

# Compilar el bundle de producción (Cliente + SSR)
pnpm build

# Ejecutar el servidor en modo producción
pnpm start

# Verificar código y formato con Biome
pnpm lint

# Corregir automáticamente problemas de linting y formateo
pnpm lint:fix

# Verificar tipos de TypeScript sin emitir archivos
pnpm exec tsc --noEmit
```

---

## 🤖 Ideas de Integración con Inteligencia Artificial (AI Roadmap)

A continuación se detallan 6 conceptos para integrar IA de forma nativa en este portafolio:

### 1. Asistente RAG del Perfil ("Pregúntale a mi Clon Digital")
* **Concepto**: Un comando de teclado (`⌘K`) o botón flotante abre una ventana interactiva donde reclutadores pueden formular preguntas abiertas en lenguaje natural.
* **Ejemplo**: *"¿Tiene experiencia en Kubernetes?"* o *"¿Cuál fue su mayor reto en su último puesto?"*.
* **Stack**: Gemini 2.0 Flash con streaming mediante un endpoint en Modern.js (`src/routes/api/chat.ts`), utilizando `portfolio.config.ts` como base de conocimiento.

### 2. Personalizador según la Oferta Laboral ("Tailor to Job Offer")
* **Concepto**: El reclutador pega la descripción de una vacante (Job Description) y la IA:
  1. Reordena y destaca los proyectos y tecnologías que mejor coinciden con la vacante.
  2. Genera un breve párrafo explicativo: *"Por qué encajo con este perfil"*.
  3. Ofrece la descarga de un CV resumido generado al instante para esa posición.

### 3. Selector de Audiencia: Modo Recruiter vs Modo Tech Lead
* **Concepto**: Un selector en el Header que adapta el tono de redacción del portafolio:
  * **Modo Recruiter (HR)**: Enfocado en impacto de negocio, metodologías ágiles, trabajo en equipo y métricas comerciales.
  * **Modo Tech Lead**: Enfocado en patrones de diseño, concurrencia, tipado estricto, algoritmos y microservicios.

### 4. Terminal CLI Asistida por IA
* **Concepto**: Una consola minimalista que responde tanto a comandos bash (`ls projects`, `cat skills`) como a instrucciones en lenguaje natural (`ai "filtra solo proyectos con Docker"` o `ai "calcula los años totales de experiencia"`).

### 5. Asistente de Redacción para Contacto
* **Concepto**: En la sección de contacto, el visitante describe una idea preliminar y la IA redacta un correo formal estructurado con presupuesto estimado, alcance y requerimientos técnicos listo para enviar por email.

### 6. "Setup Wizard con IA" para Usuarios del Template
* **Concepto**: Un comando CLI (`pnpm template:ai`) donde un nuevo desarrollador sube su CV en PDF o su perfil de LinkedIn y la IA genera automáticamente el archivo `portfolio.config.ts` con todos sus datos estructurados y tipados.

---

## 🎯 Buenas Prácticas Aplicadas

1. **Rendimiento Máximo**: Renderizado híbrido (SSR) con hidratación rápida y cero dependencias pesadas de terceros.
2. **Accesibilidad (a11y)**: Todos los enlaces interactivos e imágenes disponen de etiquetas `aria-label`, `<title>` y textos descriptivos conformes a WCAG AAA.
3. **Calidad de Código**: Linter y formateador Biome ejecutándose en submilisegundos bajo reglas estrictas de consistencia.
4. **Semántica HTML5**: Uso correcto de elementos `<header>`, `<main>`, `<section>`, `<article>` y `<footer>`.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usarlo libremente para crear y publicar tu propio portafolio personal o comercial.
