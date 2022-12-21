import { useTranslation } from "react-i18next";

interface IngredientInputProps {
  name: string;
  percentage: string;
  defaultValue: string;
}

export function IngredientInput(props: IngredientInputProps) {
  const { t } = useTranslation();

  function onChange(ev: any) {
    console.log(ev);
  }

  return (
    <div>
      <label htmlFor={'field_'+props.name}>{t(props.name)} <span>{props.percentage}%</span></label>
      <input id={'field_'+props.name} name={'field_'+props.name} type="number" onChange={onChange} defaultValue={props.defaultValue} />
    </div>
  )
}
