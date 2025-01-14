import * as m from '$lib/paraglide/messages.js';

// prettier-ignore
export function translate(name: string) {
  switch (name) {
    case 'allPurposeFlour': return m.allPurposeFlour();
    case 'water': return m.water();
    case 'activeDryYeast': return m.activeDryYeast();
    case 'bakingPowder': return m.bakingPowder();
    case 'whiteSugar': return m.whiteSugar();
    case 'mirin': return m.mirin();
    case 'soySauce': return m.soySauce();
    case 'darkChocolate': return m.darkChocolate();
    case 'butter': return m.butter();
    case 'egg': return m.egg();
    case 'brownSugar': return m.brownSugar();
    case 'salt': return m.salt();
    case 'milk': return m.milk();
    case 'vanillaExtract': return m.vanillaExtract();
    case 'eggYolk': return m.eggYolk();
    case 'rhum': return m.rhum();
    case 'oliveOil': return m.oliveOil();
    case 'cream35': return m.cream35();
    case 'wholeMilk': return m.wholeMilk();
    case 'cornStrach': return m.cornStrach();
    case 'vegetableOil': return m.vegetableOil();
    case 'stiffStarter': return m.stiffStarter();
    case 'meltedButter': return m.meltedButter();
    case 'oatMilk': return m.oatMilk();
    case 'honey': return m.honey();
    case 'almondFlour': return m.almondFlour();
    case 'eggWhite': return m.eggWhite();

    default: return name;
  }
}
