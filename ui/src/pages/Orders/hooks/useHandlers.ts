import type { TOrder } from '../../../shared/types';
import { deleteOrder } from '../../../redux/slices/ordersSlice';
import { setPopupValue } from '../../../redux/slices';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export function useHandlers() {
  const [selectedOrder, setSelectedOrder] = useState<TOrder | null>(null);

  const dispatch = useDispatch();

  const handleOrderClick = (order: TOrder) => {
    setSelectedOrder(order);
  };

  const handleDeleteClick = (order: TOrder) => {
    dispatch(
      setPopupValue({
        isOpen: true,
        message: `Are you sure you want do delete this order "${order.title}"?`,
        onAccept: () => dispatch(deleteOrder(order.id)),
        onDecline: () => {},
      }),
    );
  };

  const handleOrderClose = () => {
    setSelectedOrder(null);
  };

  return {
    selectedOrder,
    handleOrderClick,
    handleDeleteClick,
    handleOrderClose,
  };
}
