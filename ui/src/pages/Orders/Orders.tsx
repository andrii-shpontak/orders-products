import './index.css';

import { ConfirmPopUp, OrdersList, SelectedOrder } from '../../components';

import React from 'react';
import { RootState } from '../../redux/store';
import plusIcon from '../../assets/icons/plus.svg';
import { useHandlers } from './hooks';
import { useSelector } from 'react-redux';

const Orders: React.FC = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);
  console.log(orders);
  const {
    selectedOrder,
    showDeletePopup,
    handleOrderClick,
    handleDeleteClick,
    orderToDelete,
    confirmDeleteOrder,
    closeDeletePopup,
    handleOrderClose,
  } = useHandlers();

  return (
    <div className='orders'>
      <div className='orders__title'>
        <img src={plusIcon} alt='Plus icon' /> Orders / {orders.length}
      </div>
      <div className={!!selectedOrder ? 'orders__wrapper' : ''}>
        <OrdersList
          orders={orders}
          handleOrderClick={handleOrderClick}
          handleDeleteClick={handleDeleteClick}
          selectedOrder={selectedOrder}
        />
        <SelectedOrder selectedOrder={selectedOrder} handleClose={handleOrderClose} />
      </div>

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
