import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { TOrder, TOrdersSelector, TProduct } from '../../shared/types';

import { orders } from '../../shared';

const initialState: TOrdersSelector = {
  orders: [...orders],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Omit<TOrder, 'id' | 'products'>>) => {
      const newId = state.orders.length > 0 ? Math.max(...state.orders.map(order => order.id)) + 1 : 1;
      state.orders.push({ ...action.payload, id: newId, products: [] });
    },
    updateOrder: (state, action: PayloadAction<TOrder>) => {
      const index = state.orders.findIndex(order => order.id === action.payload.id);
      if (index !== -1) {
        state.orders[index] = action.payload;
      }
    },
    deleteOrder: (state, action: PayloadAction<number>) => {
      state.orders = state.orders.filter(order => order.id !== action.payload);
    },
    addProductToOrder: (state, action: PayloadAction<{ orderId: number; product: Omit<TProduct, 'id'> }>) => {
      const { orderId, product } = action.payload;
      const order = state.orders.find(order => order.id === orderId);
      if (order) {
        const newId = !!order.products.length ? Math.max(...order.products.map(prod => prod.id)) + 1 : 1;
        // Using array spread to create a new array ensures immutability,
        // allowing Redux to detect state changes and trigger re-renders.
        order.products = [...order.products, { ...product, id: newId }];
      }
    },
    removeProductFromOrder: (state, action: PayloadAction<{ orderId: number; productId: number }>) => {
      const { orderId, productId } = action.payload;
      const order = state.orders.find(order => order.id === orderId);
      if (order) {
        order.products = order.products.filter(product => product.id !== productId);
      }
    },
  },
});

export const { addOrder, updateOrder, deleteOrder, addProductToOrder, removeProductFromOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
