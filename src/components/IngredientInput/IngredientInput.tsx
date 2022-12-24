import { ChangeEvent, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

interface IngredientInputProps {
  name: string;
  percentage: number;
  totalReceipePercentage: number;
  totalIngredient: number;
  onChange: any
}

function round2IfNecessary(number: number) {
  if (number < 10) {
    return Math.round((number + Number.EPSILON) * 100) / 100
  }
  return Math.round(number);
}

export function IngredientInput(props: IngredientInputProps) {
  const { t } = useTranslation();

  const defaultValue = useMemo(() => {
    return computeDefaultValue()
  }, [props.totalIngredient]);

  function computeDefaultValue(): number {
    const defaultValue = props.totalIngredient/props.totalReceipePercentage * props.percentage;
    return round2IfNecessary(defaultValue);
  }

  function onChange(ev: ChangeEvent<HTMLInputElement>) {
    ev.preventDefault();
    const newTotal = ev.currentTarget.valueAsNumber*props.totalReceipePercentage/props.percentage;
    props.onChange(round2IfNecessary(newTotal));
  }

  return (
    <div>
      <label htmlFor={'field_'+props.name}>{t(props.name)} <span>{props.percentage}%</span></label>
      <input id={'field_'+props.name} name={'field_'+props.name} type="number" min="0" onChange={onChange} value={defaultValue} />
    </div>
  )
}
