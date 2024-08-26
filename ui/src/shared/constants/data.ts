import type { TOrder, TProduct } from '../types';

export const defaultImageUrl = 'https://picsum.photos/id/8/200/200';

export const orders: TOrder[] = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products.filter(prod => prod.order === this.id);
    },
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products.filter(prod => prod.order === this.id);
    },
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products.filter(prod => prod.order === this.id);
    },
  },
];

export const products: TProduct[] = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: defaultImageUrl,
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    photo: defaultImageUrl,
    title: 'Product 2',
    type: 'Keyboards',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: '2017-06-29 12:09:33',
  },
];
