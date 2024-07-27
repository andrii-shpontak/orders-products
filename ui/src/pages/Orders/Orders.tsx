import './index.css';

import { ConfirmPopUp, OrdersList, SelectedOrder } from '../../components';

import React from 'react';
import { orders } from '../../shared';
import plusIcon from '../../assets/icons/plus.svg';
import { useHandlers } from './hooks';

const Orders: React.FC = () => {
  const {
    selectedOrder,
    showDeletePopup,
    handleOrderClick,
    handleDeleteClick,
    orderToDelete,
    confirmDeleteOrder,
    closeDeletePopup,
  } = useHandlers();

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
