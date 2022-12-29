import { ChangeEvent, useMemo } from "react";
import { useTranslation } from "react-i18next";

interface IngredientInputProps {
  name: string;
  percentage: number;
  totalReceipePercentage: number;
  totalIngredient: number;
  onChange: onChange;
}

function round2IfNecessary(number: number) {
  if (number < 10) {
    return Math.round((number + Number.EPSILON) * 100) / 100;
  }
  return Math.round(number);
}

type onChange = (newTotalReceipe: number) => void;

export function IngredientInput(props: IngredientInputProps) {
  const { t } = useTranslation();

  const defaultValue = useMemo(() => {
    return computeDefaultValue();
  }, [props.totalIngredient]);

  function computeDefaultValue(): number {
    const defaultValue =
      (props.totalIngredient / props.totalReceipePercentage) * props.percentage;
    return round2IfNecessary(defaultValue);
  }

  function onChange(ev: ChangeEvent<HTMLInputElement>): void {
    ev.preventDefault();
    const newTotal =
      (ev.currentTarget.valueAsNumber * props.totalReceipePercentage) /
      props.percentage;
    props.onChange(round2IfNecessary(newTotal));
  }

  return (
    <div className="flex justify-evenly">
      <label className="w-1/2" htmlFor={"field_" + props.name}>
        {t(props.name)} <span>{props.percentage}%</span>
      </label>
      <input
        className="w-1/2 text-right lg:w-1/4"
        id={"field_" + props.name}
        name={"field_" + props.name}
        type="number"
        min="0"
        onChange={onChange}
        value={defaultValue}
      />
    </div>
  );
}
