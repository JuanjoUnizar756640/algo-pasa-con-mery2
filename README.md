# Algo pasa con Mery — Web

Proyecto creado con [Vite](https://vitejs.dev/), React, TypeScript y Tailwind CSS. Inspirado en páginas inmersivas como Voltereta (bosque, luces cálidas, storytelling).

## Estructura
- `src/components/*` — Secciones de la landing (Hero, Carta, Reservas, etc.)
- `src/data/menu.ts` — Datos de la carta (editable sin tocar componentes).
- `public/*` — Iconos y recursos estáticos.

## Arranque
```bash
npm i
npm run dev
```

## Personalización rápida
- **Logo y nombre**: en `Navbar.tsx` y `index.html`.
- **Teléfono de reservas (WhatsApp)**: en `Reservations.tsx` (sustituir `wa.me/34600000000`). 
- **Dirección/horario**: en `Location.tsx` y `index.html` (schema.org).
- **Imágenes**: cambia las URLs de Unsplash por fotos propias en `Hero.tsx`, `Concept.tsx`, `Reservations.tsx`, `Events.tsx`, `Gallery.tsx`.
- **Colores**: paleta en `tailwind.config.js` (`colors.brand`).

## Despliegue
- Vercel, Netlify o servidor estático. 
- `npm run build` genera `/dist` listo para subir.

## SEO
- Metatags en `index.html` y marcado `schema.org/BarOrPub`.
- Títulos en fuente `Marcellus` y texto en `Inter`.

---

© 2025-08-28 Algo pasa con Mery
