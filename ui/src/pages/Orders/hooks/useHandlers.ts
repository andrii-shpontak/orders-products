import type { TOrder } from '../../../shared/types';
import { deleteOrder } from '../../../redux/slices/ordersSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export function useHandlers() {
  const [selectedOrder, setSelectedOrder] = useState<TOrder | null>(null);
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);
  const [orderToDelete, setOrderToDelete] = useState<TOrder | null>(null);

  const dispatch = useDispatch();

  const handleOrderClick = (order: TOrder) => {
    setSelectedOrder(order);
  };

  const handleDeleteClick = (order: TOrder) => {
    setOrderToDelete(order);
    setShowDeletePopup(true);
  };

  const confirmDeleteOrder = () => {
    if (orderToDelete) {
      dispatch(deleteOrder(orderToDelete.id));
      setShowDeletePopup(false);
      setOrderToDelete(null);
    }
  };

  const closeDeletePopup = () => {
    setShowDeletePopup(false);
    setOrderToDelete(null);
  };

  const handleOrderClose = () => {
    setSelectedOrder(null);
  };

  return {
    selectedOrder,
    showDeletePopup,
    orderToDelete,
    handleOrderClick,
    handleDeleteClick,
    confirmDeleteOrder,
    closeDeletePopup,
    handleOrderClose,
  };
}
