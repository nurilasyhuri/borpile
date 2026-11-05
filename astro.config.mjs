import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://borpilenusantara.com',
  integrations: [tailwind(), sitemap()],
  server: {
    port: 4321,
    host: true
  }
});
