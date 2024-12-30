<script lang="ts">
  import { round2IfNecessary } from "$lib/services/calculator";

  interface Props {
    id: string,
    ingredientPercentage: number,
    totalRecipePercentage: number,
    totalIngredient: number,
    onInput: (totalIngredient: number) => void
  }

  let {
    id,
    ingredientPercentage,
    totalRecipePercentage,
    totalIngredient,
    onInput
  }: Props = $props();

  export function handleOninput(ev: InputEvent) {
    const { valueAsNumber } = ev.target as HTMLInputElement;
    let totalIngredient = round2IfNecessary(valueAsNumber * totalRecipePercentage / ingredientPercentage);
    onInput(totalIngredient);
  }
</script>

<input
  id={id}
  min="0"
  type="number"
  oninput="{handleOninput}"
  value={round2IfNecessary(ingredientPercentage*totalIngredient/totalRecipePercentage)} />
