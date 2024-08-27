import { CurrencyEnum } from '../enums/Currency';

export type TLinksData = {
  title: string;
  link?: string;
};

export type TProduct = {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: {
    start: string;
    end: string;
  };
  price: {
    value: number;
    symbol: keyof typeof CurrencyEnum;
    isDefault: number;
  }[];
  order: number;
  date: string;
};

export type TOrder = {
  id: number;
  title: string;
  date: string;
  description: string;
  products: TProduct[];
};

export type TConfirmPopUpProps = {
  isOpen: boolean;
  message: string;
  onAccept: () => void;
  onDecline: () => void;
};

export type TOrderListProps = {
  orders?: TOrder[];
  handleOrderClick: (order: TOrder) => void;
  handleDeleteClick: (order: TOrder) => void;
  selectedOrder: TOrder | null;
};

export type TSelectedOrderProps = {
  selectedOrder: TOrder | null;
  handleClose: () => void;
};

export type TOrdersSelector = {
  orders: TOrder[];
};

export type TTotalPrices = {
  sum: number;
  isDefault: boolean;
  currency: keyof typeof CurrencyEnum;
};

export type TOrdersListHandlersProps = {
  orders?: TOrder[];
  handleDeleteClick: (order: TOrder) => void;
  handleOrderClick: (order: TOrder) => void;
};

export type TProductSListProps = {
  products: TProduct[];
  isFullData?: boolean;
};
