import { useTranslation } from "react-i18next";

interface IngredientInputProps {
  name: string;
  percentage: string;
  defaultValue: string;
}

export function IngredientInput(props: IngredientInputProps) {
  const { t } = useTranslation();

  return (
    <div>
      <label htmlFor="field_allPurposeFlour">{t(props.name)} <span>{props.percentage}%</span></label>
      <input id="field_allPurposeFlour" name="field_allPurposeFlour" type="number" value={props.defaultValue} />
    </div>
  )
}
