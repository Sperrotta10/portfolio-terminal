# Portfolio estilo terminal (Astro)

Portfolio personal con UI tipo **terminal**, construido con **Astro**. El contenido (bio, experiencia, proyectos, herramientas y links) se gestiona desde un único archivo de datos.

## Requisitos

- **Node.js**: `>= 22.12.0`
- **npm** (incluido con Node)

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Scripts

```bash
npm run dev      # servidor de desarrollo
npm run build    # build de producción a ./dist
npm run preview  # previsualización del build
```

## Personalización rápida

- **Perfil (todo el contenido)**: edita `src/data/profile.ts`
  - `titleAscii`: banner ASCII
  - `bioTitle` y `bio`: texto de la sección bio
  - `experience`: experiencia laboral
  - `projects`: proyectos (incluye `imageSrc`, `hrefLive`, `hrefSource`)
  - `tools`: stack por categorías (icons + labels)
  - `links`: redes y contacto
- **Página principal**: `src/pages/index.astro` (renderiza el componente `Terminal`)
- **Layout / estilos globales**: `src/layouts/Layout.astro`

## Assets (iconos e imágenes)

Los SVG usados por el perfil viven en `public/`, por ejemplo:

- `public/projects/*` (imágenes de proyectos)
- `public/code/*` (iconos de tecnologías)
- `public/social/*` (iconos de redes)

En `profile.ts` se referencian como rutas absolutas (ej. `"/projects/ai-powered-code-editor.svg"`).

## Estructura del proyecto (resumen)

```text
public/               # assets estáticos
src/components/       # UI (Terminal, Command, etc.)
src/data/profile.ts   # datos del portfolio
src/layouts/          # layout base + estilos globales
src/pages/index.astro # entrypoint
```

## Build y despliegue

```bash
npm run build
```

El output queda en `dist/` (sitio estático), listo para desplegar en cualquier hosting de estáticos.
