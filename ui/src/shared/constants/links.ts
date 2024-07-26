import { AbsoluteRoutes } from '../enums';
import type { TLinksData } from '../types';

export const navbarLinks: TLinksData[] = [
  { title: 'Orders', link: AbsoluteRoutes.orders },
  { title: 'Products', link: AbsoluteRoutes.products },
  { title: 'Groups' },
  { title: 'Users' },
  { title: 'Settings' },
];
