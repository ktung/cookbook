export function round2IfNecessary(number: number) {
  if (number < 10) {
    return round2(number);
  }

  return Math.round(number);
}

export function round2(num: number): number {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

export function ceil2(num: number): number {
  return Math.ceil((num + Number.EPSILON) * 100) / 100;
}
