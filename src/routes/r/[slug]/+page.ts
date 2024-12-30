import { base } from '$app/paths';
import type { PageLoad } from './$types';
import { load as loadYaml } from 'js-yaml';

interface Recipe {
  name: { en?: string; fr: string };
  ingredients: { name: string; percentage: number }[];
  totalPercentage: number;
  presetTotalIngredient: number;
  notes: { fr: string; en?: string };
  references?: string[];
}

export const load: PageLoad = async ({ params, fetch }) => {
  const responseyml = await fetch(`${base}/recipes/${params.slug}.yml`);
  const yamlText = await responseyml.text();
  const recipe = loadYaml(yamlText) as Recipe;

  return {
    recipe: recipe,
  };
};
