import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ runtime: 'nodejs20.x' }),
    csp: {
      mode: 'auto',
      directives: {
        'frame-ancestors': ['self', 'https://sites.google.com']
      }
    }
  }
};

export default config;
