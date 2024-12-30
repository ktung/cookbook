// file initialized by the Paraglide-SvelteKit CLI - Feel free to edit it
import { createI18n } from '@inlang/paraglide-sveltekit';
import * as runtime from '$lib/paraglide/runtime.js';

export const i18n = createI18n(runtime, {
  pathnames: {
    '/about': {
      fr: '/a-propos',
      en: '/about',
      'fr-CA': '/a-propos',
    },
    '/r/100-bao-dough': {
      fr: '/r/100-bao-pate',
      en: '/r/100-bao-dough',
      'fr-CA': '/r/100-bao-pate',
    },
  },
});
