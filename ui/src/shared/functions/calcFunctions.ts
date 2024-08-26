import type { TProduct, TTotalPrices } from '../types';

export const getOrderPriceSum = (products: TProduct[]): TTotalPrices[] | null => {
  const totals: TTotalPrices[] = [];

  if (!products.length) {
    return null;
  }

  products.forEach(product => {
    product.price.forEach((p, i) => {
      if (!totals[i]) {
        totals[i] = { sum: 0, isDefault: p.isDefault === 1, currency: p.symbol };
      }
      totals[i].sum += p.value;
      if (p.isDefault === 1) {
        totals[i].isDefault = true;
      }
    });
  });

  return totals[0].isDefault ? totals.reverse() : totals;
};
