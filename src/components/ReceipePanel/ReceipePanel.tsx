import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IngredientInput } from "../IngredientInput/IngredientInput";
import { NotesList } from "../NotesList/NotesList";
import { ReceipeLink } from "../ReceipeLink/ReceipeLink";
import { ReceipeSelector } from "../ReceipeSelector/ReceipeSelector";

interface Receipe {
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

export function ReceipePanel() {
  const { t } = useTranslation();

  const [receipeFilename, setReceipeFilename] = useState("");
  const [receipeJSON, setReceipeJSON] = useState({} as Receipe);
  const [totalBakerPercentage, setTotalBakerPercentage] = useState(0);
  const [totalIngredient, setTotalIngredient] = useState(0);

  useEffect(() => {
    importReceipe(receipeFilename);
  }, [receipeFilename]);

  function importReceipe(receipeFilename: string) {
    if (!receipeFilename) {
      return;
    }

    import(`../../assets/receipes/${receipeFilename}.json`).then(
      (data: Receipe) => {
        const totalBakerPercentage = data.ingredients
          .map((ingredient) => ingredient.bakerPercentage)
          .reduce((previous, current) => previous + current, 0);

        setReceipeJSON(data);
        setTotalBakerPercentage(totalBakerPercentage);
        setTotalIngredient(data.presetTotalIngredient);
      }
    );
  }

  function onIngredientValueChange(newTotal: number) {
    setTotalIngredient(newTotal);
  }

  function onReceipeChange(receipeFilename: string) {
    setReceipeFilename(receipeFilename);
  }

  if (!receipeJSON || !receipeJSON.ingredients) {
    return (
      <div className="mx-auto w-2/4 rounded-xl border-2 border-orange-400 p-4">
        <ReceipeSelector onChange={onReceipeChange}></ReceipeSelector>
      </div>
    );
  }

  return (
    <div className="mx-6 rounded-xl border-2 border-orange-400 p-4 lg:mx-auto lg:w-1/2">
      <ReceipeSelector onChange={onReceipeChange}></ReceipeSelector>

      <form className="mx-auto flex w-fit flex-col gap-y-2">
        {receipeJSON.ingredients.map((ingredient) => (
          <IngredientInput
            key={ingredient.name}
            name={ingredient.name}
            percentage={ingredient.bakerPercentage}
            totalReceipePercentage={totalBakerPercentage}
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

      <ReceipeLink link={receipeJSON.link}></ReceipeLink>
      <NotesList notes={receipeJSON.notes}></NotesList>
    </div>
  );
}
