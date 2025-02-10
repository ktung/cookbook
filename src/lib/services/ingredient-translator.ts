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
    case 'cornStrach': return m.cornStrach();
    case 'vegetableOil': return m.vegetableOil();
    case 'stiffStarter': return m.stiffStarter();
    case 'oatMilk': return m.oatMilk();
    case 'honey': return m.honey();
    case 'almondFlour': return m.almondFlour();
    case 'eggWhite': return m.eggWhite();
    case 'semolinaFlour': return m.semolinaFlour();
    case 'porkBelly': return m.porkBelly();
    case 'onion': return m.onion();
    case 'garlic': return m.garlic();
    case 'ginger': return m.ginger();
    case 'fishSauce': return m.fishSauce();
    case 'wholeMilk3_25': return m.wholeMilk3_25();
    case 'semiSaltedButter': return m.semiSaltedButter();
    case 'unsaltedButter': return m.unsaltedButter();
    case 'flour00': return m.flour00();
    case 'unsaltedButter82': return m.unsaltedButter82();

    default: return name;
  }
}
