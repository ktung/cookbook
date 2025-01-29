import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const storedCurrency = browser ? window.localStorage.getItem('currency') : null;
export const currency = writable(storedCurrency || 'cad');

if (browser) {
  currency.subscribe((value) => {
    localStorage.setItem('currency', value);
  });
}
