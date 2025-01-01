import * as m from '$lib/paraglide/messages.js';

// prettier-ignore
export function translate(name: string) {
  switch (name) {
    case 'allPurposeFlour': return m.allPurposeFlour();
    case 'water': return m.water();
    case 'activeDryYeast': return m.activeDryYeast();
    case 'bakingPowder': return m.bakingPowder();
    case 'whiteSugar': return m.whiteSugar();

    default: return name;
  }
}
