import { base } from '$app/paths';
import { load as loadYaml } from 'js-yaml';
import type { PageLoad } from './$types';

interface RecipeItem {
  slug: string;
  title: string;
}

export const load: PageLoad = async ({ fetch }) => {
  const responseyml = await fetch(`${base}/recipes/list.yml`);
  const yamlText = await responseyml.text();
  const recipesList = loadYaml(yamlText) as RecipeItem[];

  return {
    recipes: recipesList,
  };
};
