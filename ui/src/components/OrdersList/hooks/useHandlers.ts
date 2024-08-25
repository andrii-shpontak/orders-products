import type { MouseEvent } from 'react';
import type { TOrdersListHandlersProps } from '../../../shared/types';

export function useHandlers({ orders, handleDeleteClick, handleOrderClick }: TOrdersListHandlersProps) {
  const getCurrentOrderByEvent = (e: MouseEvent<HTMLImageElement>) => {
    const orderId = e.currentTarget.getAttribute('data-order-id');
    return orders?.find(order => order.id === Number(orderId));
  };

  const deleteOrder = (e: MouseEvent<HTMLImageElement>) => {
    const orderToDelete = getCurrentOrderByEvent(e);
    !!orderToDelete && handleDeleteClick(orderToDelete);
  };

  const onOrderClick = (e: MouseEvent<HTMLImageElement>) => {
    const currentOrder = getCurrentOrderByEvent(e);
    !!currentOrder && handleOrderClick(currentOrder);
  };

  return { deleteOrder, onOrderClick };
}
