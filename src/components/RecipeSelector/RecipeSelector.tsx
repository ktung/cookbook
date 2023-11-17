import { ChangeEvent, useEffect, useState } from "react";
import recipesList from "../../assets/recipes/list.json";
import css from "./RecipeSelector.module.css";
import { useTranslation } from "react-i18next";

interface RecipeSelectorProps {
  onChange: onChange;
}

type onChange = (recipeFilename: string) => void;

export function RecipeSelector(props: RecipeSelectorProps) {
  const { i18n, t } = useTranslation();

  const [recipeName, setRecipeName] = useState("");

  useEffect(() => {
    if (recipeName === "") {
      setRecipeName(() => {
        return recipesList[0].filename;
      });
      props.onChange(recipesList[0].filename);
    }
  }, [recipeName]);

  const handleChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    ev.preventDefault();
    setRecipeName(() => {
      props.onChange(ev.target.value);
      return ev.target.value;
    });
  };

  const language = i18n.resolvedLanguage?.substring(0, 2);

  return (
    <div
      className={`${css["recipe-selector"]} mx-auto mb-10 text-center lg:w-2/4`}>
      <h1>{t("recipes")}</h1>
      <select
        className="w-full"
        onChange={handleChange}
        defaultValue={recipeName}>
        {recipesList.map((recipe) => (
          <option key={recipe.filename} value={recipe.filename}>
            {language == "en" ? recipe.name.en : recipe.name.fr}
          </option>
        ))}
      </select>
    </div>
  );
}
