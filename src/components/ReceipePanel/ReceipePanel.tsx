import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IngredientInput } from "../IngredientInput/IngredientInput";
import { NotesList } from "../NotesList/NotesList";

interface Receipe {
  name: {
    en: string,
    fr: string
  },
  link: {
    en: string,
    fr: string
  }
  ingredients: [
    {
      name: string,
      bakerPercentage: number
    }
  ],
  presetTotalIngredient: number,
  notes: {
    en: Array<string>,
    fr: Array<string>
  }
}

interface ReceipePanelProps {
  receipeFilename: string;
}

export function ReceipePanel(props: ReceipePanelProps) {
  const { t } = useTranslation();

  const [receipeJSON, setReceipeJSON] = useState({} as Receipe);
  const [totalBakerPercentage, setTotalBakerPercentage] = useState(0);

  useEffect(() => {
    importReceipe(props.receipeFilename);
  }, [props.receipeFilename])

  function importReceipe(receipeFilename: string) {
    import(`../../assets/receipes/${receipeFilename}.json`).then((data: Receipe) => {
      const totalBakerPercentage = data.ingredients.map(ingredient => (ingredient.bakerPercentage)).reduce((previous, current) => previous+current, 0);

      setReceipeJSON(data);
      setTotalBakerPercentage(totalBakerPercentage);
    });
  }

  function computeDefaultValue(bakerPercentage: number): number {
    if (!receipeJSON || !totalBakerPercentage) {
      return 0;
    }

    return Math.round(receipeJSON.presetTotalIngredient/totalBakerPercentage*bakerPercentage);
  }

  if (!receipeJSON || !receipeJSON.ingredients) {
    return null;
  }

  return (
    <div>
      { !!receipeJSON.link && !!receipeJSON.link.fr && <a href={receipeJSON.link.fr}>Lien</a> }

      {receipeJSON.ingredients.map(ingredient => (
        <IngredientInput
          key={ingredient.name}
          name={ingredient.name}
          percentage={String(ingredient.bakerPercentage)}
          defaultValue={String(computeDefaultValue(ingredient.bakerPercentage))}></IngredientInput>
      ))}
      Total {receipeJSON.presetTotalIngredient}

      <NotesList notes={receipeJSON.notes}></NotesList>
    </div>
  )
}
