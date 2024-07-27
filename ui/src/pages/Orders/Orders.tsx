import './index.css';

import { ConfirmPopUp, OrdersList, SelectedOrder } from '../../components';
import React, { useState } from 'react';

import type { TOrder } from '../../shared/types';
import { orders } from '../../shared';
import plusIcon from '../../assets/icons/plus.svg';

const Orders: React.FC = () => {
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

  return (
    <div className='orders'>
      <div className='fs-2 fw-bold ms-2 mt-3 mb-5'>
        <img src={plusIcon} alt='Plus icon' /> Orders / {orders.length}
      </div>
      <OrdersList orders={orders} handleOrderClick={handleOrderClick} handleDeleteClick={handleDeleteClick} />

      <SelectedOrder selectedOrder={selectedOrder} />

      {showDeletePopup && (
        <ConfirmPopUp
          message={`Are you shure you want do delete ${orderToDelete?.title}?`}
          onAccept={confirmDeleteOrder}
          onDecline={closeDeletePopup}
        />
      )}
    </div>
  );
};

export default Orders;
