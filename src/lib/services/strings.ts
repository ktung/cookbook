export function normalizeString(str: string): string {
  return str
    .normalize('NFD') // Decompose accented chars
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .toLowerCase();
}
