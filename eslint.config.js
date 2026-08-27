import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tailwindcss from 'eslint-plugin-tailwindcss'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// El plugin resuelve tailwindcss desde el dirname de esta ruta, asi que tiene
// que ser absoluta: con una relativa queda en '.' y no lo encuentra.
const projectDir = path.dirname(fileURLToPath(import.meta.url))
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: { tailwindcss },
    // Solo no-custom-classname: detecta las utilidades que no generan CSS
    // (opacidades fuera de la escala de Tailwind 3.4, erratas). Las reglas de
    // ordenacion del preset se dejan fuera a proposito, solo meterian ruido.
    settings: {
      tailwindcss: {
        config: path.join(projectDir, 'tailwind.config.js'),
        whitelist: [
          'ai-portrait',
          'ai-portrait-steam',
          'site-backdrop-frame',
          'site-cup-steam',
          'site-lamp-cone',
          'site-speaker',
          'site-vignette',
          'site-window-lights',
          'sr-only-focusable',
        ],
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'tailwindcss/no-custom-classname': 'error',
    },
  },
])
