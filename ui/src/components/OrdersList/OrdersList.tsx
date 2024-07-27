import './index.css';

import listIcon from '../../assets/icons/listIcon.svg';
import deleteIcon from '../../assets/icons/trashIcon.svg';
import { TOrderListProps } from '../../shared/types';

const OrdersList = ({ orders, handleOrderClick, handleDeleteClick }: TOrderListProps) => {
  if (!orders) return <></>;

  return (
    <div className='orders-list'>
      {orders.map(order => (
        <div key={order.id} className='order-item'>
          <h3 onClick={() => handleOrderClick(order)}>{order.title}</h3>
          <img src={listIcon} alt='List icon' className='listIcon' />
          <div>
            <span>{order.products.length}</span>
            <span className='subtitle'>Products</span>
          </div>

          <div>
            <span className='subtitle'>Another format of data</span>
            <span>Date: {order.date}</span>
          </div>
          <div>
            <span className='subtitle'>sum</span>
            <span>def currency</span>
          </div>
          <img src={deleteIcon} alt='Delete icon' onClick={() => handleDeleteClick(order)} />
        </div>
      ))}
    </div>
  );
};

export default OrdersList;
