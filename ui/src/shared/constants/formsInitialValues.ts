import type { TCreateOrderFormValues, TCurrency } from '../types';

import { defaultImageUrl } from './data';

export const initialOrderFormValue: TCreateOrderFormValues = {
  title: '',
  date: null,
  description: '',
};

export const productFormInitialValue = {
  serialNumber: 0,
  isNew: '1',
  photo: defaultImageUrl,
  title: '',
  type: '',
  specification: '',
  guarantee: {
    start: null,
    end: null,
  },
  price: [
    { value: 0, symbol: 'USD' as TCurrency, isDefault: 0 },
    { value: 0, symbol: 'UAH' as TCurrency, isDefault: 1 },
  ],
  order: '',
  date: new Date().toISOString(),
};
