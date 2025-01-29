import { browser } from '$app/environment';
import { base } from '$app/paths';
import { currency } from '$lib/stores/currency';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';
import { load as loadYaml } from 'js-yaml';

interface Recipe {
  name: { en?: string; fr: string };
  ingredients: { name: string; percentage: number }[];
  presetTotalIngredient: number;
  process: { fr: string; en?: string };
  notes: { fr: string; en?: string };
  references?: string[];
}

export const load: PageLoad = async ({ params, fetch }) => {
  const responseyml = await fetch(`${base}/recipes/${params.slug}.yml`);
  const yamlText = await responseyml.text();
  const recipe = loadYaml(yamlText) as Recipe;

  const currentCurrency = browser ? get(currency) : 'cad';
  const priceYml = await fetch(`${base}/price/${currentCurrency}.yml`);
  const priceText = await priceYml.text();
  const prices = loadYaml(priceText);

  return {
    recipe: recipe,
    prices: prices,
  };
};
