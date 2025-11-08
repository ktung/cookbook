import { getLocale } from '$lib/paraglide/runtime';

export function currentLanguage() {
  const currentLang: 'en' | 'fr' = getLocale().substring(0, 2) as 'en' | 'fr';
  return currentLang;
}
