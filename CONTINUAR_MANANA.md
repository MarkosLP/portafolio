# Continuar mañana

Última sesión: 26 de agosto de 2026.

## Estado

`npm run lint` y `npm run build` pasan. Verificado en navegador real (1280 /
1440 / 1920 y móvil 390): sin errores de consola, 60 fps con GPU, 0 clases
Tailwind muertas, 0 CSS ni keyframes huérfanos.

## Qué se hizo en esta sesión

### Corrección de fondo: la escala tonal estaba desactivada

Tailwind 3.4 solo acepta múltiplos de 5 en el modificador de opacidad. Había
**34 de 67 utilidades que no generaban CSS** (`text-slate-300/76`,
`bg-slate-950/88`, `opacity-62`…). Los textos secundarios heredaban el color del
padre, el navbar no tenía fondo al hacer scroll y el hover del menú no existía.
Corregidas todas a valor arbitrario (`/[0.76]`).

Reapareció dos veces al editar código nuevo. Conviene instalar
`eslint-plugin-tailwindcss` con `no-custom-classname`.

### Hero

- Jerarquía invertida: el nombre pasa a antetítulo y el claim es el `h1`.
- El acento del titular se controla desde `headlineAccent` en `src/data/site.js`.
- Scrim lateral para dar contraste al texto sin apagar la foto entera.

### Proyectos

`ProjectCard.jsx` (tarjetas de 40rem) sustituido por `ProjectRow.jsx`: índice
numerado con estado a la derecha. Los botones muertos («Casi terminado», «Código
privado») son ahora un badge `status`. Si se rellena `demoUrl` o `repoUrl` en
`src/data/projects.js`, la fila muestra botones reales sola; si se añade
`image`, el icono se convierte en miniatura.

### Navbar

El header flotante pintaba una banda a todo el ancho al hacer scroll y el
contenido se colaba por encima. La superficie se movió a la píldora y al botón.
Menú móvil con scrim y panel opaco. Añadida barra de progreso de lectura.

### Fondo animado

Sistema anclado a la foto: `.site-backdrop-frame` reproduce exactamente el
`cover` de la imagen (3:2), así que las capas en % siguen a la foto a cualquier
ancho en vez de derivar.

Quedan solo dos efectos, el resto se retiró por petición de Marcos:

- Vapor de la taza del fondo (`.site-cup-steam`, 56.3% / 53%).
- Vapor de la taza del retrato (`.ai-portrait-steam`, 65% / 58.5%).
- Cono del altavoz latiendo (`.site-speaker`, 87.1% / 58.6%).

El retrato se limpió del todo: sin línea de escaneo, rejilla, anillo, puntos
flotantes, chip de robot ni badge.

### Otros

- `Footer.jsx` nuevo.
- `public/og-image.jpg` (1200×630) generada desde el propio diseño.
- Favicon nuevo: M negra vectorial, más `favicon-96.png` y `apple-touch-icon.png`.
- Título: «Marcos López | Portafolio Personal» (en `title`, `og` y `twitter`).
- `100dvh` en body, `#root` y alto del hero.
- `prefers-reduced-motion` no paraba las animaciones con retardo largo: añadido
  `animation-delay: -1ms`.

## Pendiente

### Bloqueante para publicar

1. **`github.com/tuusuario`** sigue enlazado en Contacto y da 404. Es lo más
   urgente. Campo `contactLinks` en `src/data/site.js`.
2. Confirmar que `marc19.lopez@gmail.com` es el correo que quiere público.
3. Dominio final, para añadir canonical y sitemap.

### Decisiones abiertas

- **Fondo animado**: quedó pendiente decidir si se sustituye la foto por un
  vídeo en bucle generado con IA (Kling, Runway, Luma), que resolvería de raíz
  que las animaciones CSS no encajan con la imagen. Alternativas comentadas:
  fondo generativo por código, o separar la foto en capas con transparencia.
- Marcos dudaba entre favicon «M» y «ML». Se instaló la M porque ML es
  ilegible a 16 px, comprobado en render real.
- `public/icons.svg` (5 kB) no lo referencia nadie; se puede borrar.

### Mejoras no aplicadas

- Los glows del fondo en `src/App.jsx` siguen anclados a rem absolutos
  (`top-[54rem]`, `top-[88rem]`) en vez de a sus secciones.
- El cono de la lámpara (`.site-lamp-cone`) sigue posicionado contra el
  viewport, no contra el marco de la foto, así que solo cuadra a un ancho.
- `.site-window-lights` (trama de puntos sobre los edificios) sigue activa; es
  de la sesión con Codex y toca la zona que Marcos pidió limpiar.

## Archivos clave

- `src/data/site.js`: perfil, navegación, sobre mí y contacto
- `src/data/projects.js`: proyectos
- `src/components/Hero.jsx`, `ProjectRow.jsx`, `Navbar.jsx`, `Footer.jsx`
- `src/App.jsx`: composición y capas de fondo
- `src/index.css`: estilos globales, marco anclado y animaciones
- `index.html`: SEO, iconos y título
