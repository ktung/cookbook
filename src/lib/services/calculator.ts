export function round2IfNecessary(number: number) {
  if (number < 10) {
    return Math.round((number + Number.EPSILON) * 100) / 100;
  }

  return Math.round(number);
}
