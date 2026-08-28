import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const storedCurrency = browser ? window.localStorage.getItem('currency') : null;
export const currency = writable(storedCurrency || 'cad');

if (browser) {
  currency.subscribe((value) => {
    localStorage.setItem('currency', value);
  });
}
