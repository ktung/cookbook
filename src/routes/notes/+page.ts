import type { PageLoad } from './$types';
import { load as loadYaml } from 'js-yaml';

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch('/notes/list.json');
  const notes = await response.json();

  const responseyml = await fetch('/notes/list.yml');
  const yamlText = await responseyml.text();
  const notesyml = loadYaml(yamlText);

  return {
    notes: notesyml,
  };
};
