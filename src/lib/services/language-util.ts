import { languageTag } from '$lib/paraglide/runtime';

export function currentLanguage() {
  const currentLang: 'en' | 'fr' = languageTag().substring(0, 2) as 'en' | 'fr';
  return currentLang;
}
