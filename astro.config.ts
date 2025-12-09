import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://personal-blog-beige-mu.vercel.app/',
  integrations: [tailwind(), icon(), sitemap()]
});