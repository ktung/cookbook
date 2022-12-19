interface IngredientInputProps {
  name: string;
  percentage: string;
  defaultValue: string;
}

export function IngredientInput(props: IngredientInputProps) {
  return (
    <div>
      <label htmlFor="field_allPurposeFlour">{props.name} <span>{props.percentage}%</span></label>
      <input id="field_allPurposeFlour" name="field_allPurposeFlour" type="number" value={props.defaultValue} />
    </div>
  )
}
