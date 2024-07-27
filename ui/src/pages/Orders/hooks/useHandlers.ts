import type { TOrder } from '../../../shared/types';
import { useState } from 'react';

export function useHandlers() {
  const [selectedOrder, setSelectedOrder] = useState<TOrder | null>(null);
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);
  const [orderToDelete, setOrderToDelete] = useState<TOrder | null>(null);

  const handleOrderClick = (order: TOrder) => {
    setSelectedOrder(order);
  };

  const handleDeleteClick = (order: TOrder) => {
    setOrderToDelete(order);
    setShowDeletePopup(true);
  };

  const confirmDeleteOrder = () => {
    if (orderToDelete) {
      setShowDeletePopup(false);
      setOrderToDelete(null);
    }
  };

  const closeDeletePopup = () => {
    setShowDeletePopup(false);
    setOrderToDelete(null);
  };

  return {
    selectedOrder,
    showDeletePopup,
    orderToDelete,
    handleOrderClick,
    handleDeleteClick,
    confirmDeleteOrder,
    closeDeletePopup,
  };
}
