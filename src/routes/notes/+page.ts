import { base } from '$app/paths';
import { currentLanguage } from '$lib/services/language-util';
import type { PageLoad } from './$types';
import { load as loadYaml } from 'js-yaml';

interface Note {
  slug: string;
  title: string;
}

export const load: PageLoad = async ({ fetch }) => {
  const currentLang = currentLanguage();

  const responseyml = await fetch(`${base}/notes/${currentLang}/list.yml`);
  const yamlText = await responseyml.text();
  const notesyml = loadYaml(yamlText) as Note[];

  return {
    notes: notesyml,
  };
};
