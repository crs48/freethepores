import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://crs48.github.io',
  base: '/freethepores',
  trailingSlash: 'always',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
