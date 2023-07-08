import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IngredientInput } from "../IngredientInput/IngredientInput";
import { NotesList } from "../NotesList/NotesList";
import { RecipeLink } from "../RecipeLink/RecipeLink";
import { RecipeSelector } from "../RecipeSelector/RecipeSelector";

interface Recipe {
  name: {
    en: string;
    fr: string;
  };
  link: {
    en: string;
    fr: string;
  };
  ingredients: [
    {
      name: string;
      bakerPercentage: number;
    }
  ];
  presetTotalIngredient: number;
  notes: {
    en: Array<string>;
    fr: Array<string>;
  };
}

export function RecipePanel() {
  const { t } = useTranslation();

  const [recipeFilename, setRecipeFilename] = useState("");
  const [recipeJSON, setrecipeJSON] = useState({} as Recipe);
  const [totalBakerPercentage, setTotalBakerPercentage] = useState(0);
  const [totalIngredient, setTotalIngredient] = useState(0);

  useEffect(() => {
    importRecipe(recipeFilename);
  }, [recipeFilename]);

  function importRecipe(recipeFilename: string) {
    if (!recipeFilename) {
      return;
    }

    import(`../../assets/recipes/${recipeFilename}.json`).then(
      (data: Recipe) => {
        const totalBakerPercentage = data.ingredients
          .map((ingredient) => ingredient.bakerPercentage)
          .reduce((previous, current) => previous + current, 0);

        setrecipeJSON(data);
        setTotalBakerPercentage(totalBakerPercentage);
        setTotalIngredient(data.presetTotalIngredient);
      }
    );
  }

  function onIngredientValueChange(newTotal: number) {
    setTotalIngredient(newTotal);
  }

  function onRecipeChange(recipeFilename: string) {
    setRecipeFilename(recipeFilename);
  }

  if (!recipeJSON || !recipeJSON.ingredients) {
    return (
      <div className="mx-auto w-2/4 rounded-xl border-2 border-orange-400 p-4">
        <RecipeSelector onChange={onRecipeChange}></RecipeSelector>
      </div>
    );
  }

  return (
    <div className="mx-6 rounded-xl border-2 border-orange-400 p-4 lg:mx-auto lg:w-1/2">
      <RecipeSelector onChange={onRecipeChange}></RecipeSelector>

      <form className="mx-auto flex w-fit flex-col gap-y-2">
        {recipeJSON.ingredients.map((ingredient) => (
          <IngredientInput
            key={ingredient.name}
            name={ingredient.name}
            percentage={ingredient.bakerPercentage}
            totalRecipePercentage={totalBakerPercentage}
            totalIngredient={totalIngredient}
            onChange={onIngredientValueChange}></IngredientInput>
        ))}
        <div className="flex justify-evenly">
          <label className="w-1/2" htmlFor="field_total">
            {t("total")}
          </label>
          <input
            className="w-1/2 text-right lg:w-1/4"
            id="field_total"
            name="field_total"
            type="number"
            min="0"
            onChange={(ev) =>
              setTotalIngredient(ev.currentTarget.valueAsNumber)
            }
            value={totalIngredient}
          />
        </div>
      </form>

      <RecipeLink link={recipeJSON.link}></RecipeLink>
      <NotesList notes={recipeJSON.notes}></NotesList>
    </div>
  );
}
