import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://freethepores.com',
  base: '/',
  trailingSlash: 'always',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
