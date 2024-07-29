import './index.css';

import type { TOrderListProps } from '../../shared/types';
import arrowIcon from '../../assets/icons/arrowRight.svg';
import deleteIcon from '../../assets/icons/trashIcon.svg';
import listIcon from '../../assets/icons/listIcon.svg';

const OrdersList = ({ orders, handleOrderClick, handleDeleteClick, selectedOrder }: TOrderListProps) => {
  if (!orders) return <></>;

  return (
    <div className='orders-list'>
      {orders.map(order => (
        <div key={order.id} className={`order-item ${!!selectedOrder ? 'compact' : ''}`}>
          {!selectedOrder && <h3 onClick={() => handleOrderClick(order)}>{order.title}</h3>}
          <img src={listIcon} alt='List icon' className='listIcon' />
          <div>
            <span>{order.products.length}</span>
            <span className='subtitle'>Products</span>
          </div>
          <div>
            <span className='subtitle'>Another format of data</span>
            <span>Date: {order.date}</span>
          </div>
          {!selectedOrder && (
            <div>
              <span className='subtitle'>sum</span>
              <span>def currency</span>
            </div>
          )}
          {!!selectedOrder ? (
            selectedOrder.id === order.id && (
              <div className='arrowRight'>
                <img src={arrowIcon} alt='Arrow right' />
              </div>
            )
          ) : (
            <img src={deleteIcon} alt='Delete icon' onClick={() => handleDeleteClick(order)} />
          )}
        </div>
      ))}
    </div>
  );
};

export default OrdersList;
