import adapterAuto from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';
import adapterVercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

let customAdapter;
if (process.env.ADAPTER === 'static') {
  customAdapter = adapterStatic({
    fallback: '404.html'
  });
} else if (process.env.ADAPTER === 'vercel') {
  customAdapter = adapterVercel();
} else {
  customAdapter = adapterAuto()
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: customAdapter,
    paths: {
      assets: process.env.ASSETS_PATH ? process.env.ASSETS_PATH : '',
      base: process.env.BASE_PATH ? process.env.BASE_PATH : ''
    }
  }
};

export default config;
