// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://juanezequielhinojosa.github.io',
  // En producción (GitHub Pages) el sitio vive bajo la subruta del repo;
  // en desarrollo queda en la raíz para que `npm run dev` funcione igual.
  base: import.meta.env.PROD ? '/expojuy-2026/' : '/',
  integrations: [react()],
});