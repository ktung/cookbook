import { languageTag } from '$lib/paraglide/runtime';

export function currentLanguage() {
  let currentLang: 'en' | 'fr' = languageTag().substring(0, 2) as 'en' | 'fr';
  return currentLang;
}
