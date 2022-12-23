import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IngredientInput } from "../IngredientInput/IngredientInput";
import { NotesList } from "../NotesList/NotesList";
import { ReceipeLink } from "../ReceipeLink/ReceipeLink";

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
  const [totalIngredient, setTotalIngredient] = useState(0);

  useEffect(() => {
    importReceipe(props.receipeFilename);
  }, [props.receipeFilename])

  function importReceipe(receipeFilename: string) {
    import(`../../assets/receipes/${receipeFilename}.json`).then((data: Receipe) => {
      const totalBakerPercentage = data.ingredients.map(ingredient => (ingredient.bakerPercentage)).reduce((previous, current) => previous+current, 0);

      setReceipeJSON(data);
      setTotalBakerPercentage(totalBakerPercentage);
      setTotalIngredient(data.presetTotalIngredient);
    });
  }

  function onIngredientValueChange(newTotal: number) {
    setTotalIngredient(newTotal)
  }

  if (!receipeJSON || !receipeJSON.ingredients) {
    return null;
  }

  return (
    <div>
      <ReceipeLink link={receipeJSON.link}></ReceipeLink>

      {receipeJSON.ingredients.map(ingredient => (
        <IngredientInput
          key={ingredient.name}
          name={ingredient.name}
          percentage={ingredient.bakerPercentage}
          totalReceipePercentage={totalBakerPercentage}
          totalIngredient={totalIngredient}
          onChange={onIngredientValueChange}></IngredientInput>
      ))}
      {t('total')} {totalIngredient}

      <NotesList notes={receipeJSON.notes}></NotesList>
    </div>
  )
}
