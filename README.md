# msc-daisyui-poc

POC by the **Fuel Design System** team to evaluate a new design system based on Tailwind CSS and DaisyUI. This repository serves as a foundation to experiment with components, themes, and UI patterns before integrating them into products.

## Technologies

- **Tailwind CSS v4** (with `@tailwindcss/cli`)
- **DaisyUI v5** (component library on top of Tailwind)
- **Node.js + npm** (build/watch scripts)

## Project structure

- `index.html`: example page with DaisyUI components and a theme applied via `data-theme`.
- `src/input.css`: Tailwind styles entry point.
- `dist/output.css`: Tailwind generated output (do not edit manually).
- `tailwind.config.js`: configuration for scanned paths and theme extensions.

## Scripts

- `npm run dev`: compiles Tailwind in watch mode
  - `tailwindcss --input ./src/input.css --output ./dist/output.css --watch`
- `npm run build`: compiles and minifies for production
  - `tailwindcss --input ./src/input.css --output ./dist/output.css --minify`

## Prerequisites

- Node.js 18+ and npm.

## Getting started

1. Install dependencies
   ```bash
   npm install
   ```
