import { base } from '$app/paths';
import type { PageLoad } from './$types';
import { load as loadYaml } from 'js-yaml';

interface Note {
  slug: string;
  title: string;
}

export const load: PageLoad = async ({ fetch }) => {
  // const response = await fetch(`${base}/notes/list.json`);
  // const notes = await response.json();

  const responseyml = await fetch(`${base}/notes/list.yml`);
  const yamlText = await responseyml.text();
  const notesyml = loadYaml(yamlText) as Note[];

  return {
    notes: notesyml,
  };
};
