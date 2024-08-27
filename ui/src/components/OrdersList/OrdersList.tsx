import './index.css';

import { currency, getDualFormatDate } from '../../shared';

import type { TOrderListProps } from '../../shared/types';
import arrowIcon from '../../assets/icons/arrowRight.svg';
import deleteIcon from '../../assets/icons/trashIcon.svg';
import { getOrderPriceSum } from '../../shared/functions/calcFunctions';
import listIcon from '../../assets/icons/listIcon.svg';
import { useHandlers } from './hooks';

const OrdersList = ({ orders, handleOrderClick, handleDeleteClick, selectedOrder }: TOrderListProps) => {
  const { deleteOrder, onOrderClick } = useHandlers({ orders, handleDeleteClick, handleOrderClick });

  if (!orders) return null;

  return (
    <div className='orders-list'>
      {orders.map(order => {
        const [eurDate, usDate] = getDualFormatDate(order.date);
        const totalPrices = getOrderPriceSum(order.products);

        return (
          <div key={order.id} className={`orders-list__item ${selectedOrder ? 'orders-list__item--compact' : ''}`}>
            {!selectedOrder && (
              <h3 className='orders-list__title' data-order-id={order.id} onClick={onOrderClick}>
                {order.title}
              </h3>
            )}
            <img src={listIcon} alt='List icon' className='orders-list__list-icon' />
            <div className='orders-list__products-info'>
              <span className='orders-list__product-count'>{order.products.length}</span>
              <span className='orders-list__subtitle'>Products</span>
            </div>
            <div className='orders-list__date-info'>
              <span className='orders-list__subtitle'>{usDate}</span>
              <span>{eurDate}</span>
            </div>
            {!selectedOrder && (
              <div className='orders-list__price-info'>
                {!!totalPrices ? (
                  totalPrices.map((price, i) => (
                    <span
                      key={i}
                      className={
                        price.isDefault ? 'orders-list__price' : 'orders-list__price orders-list__price--default'
                      }>
                      {currency[price.currency]}
                      {price.sum}
                    </span>
                  ))
                ) : (
                  <>
                    <span className='orders-list__subtitle'>-</span>
                    <span>-</span>
                  </>
                )}
              </div>
            )}
            {!!selectedOrder ? (
              selectedOrder.id === order.id && (
                <div className='orders-list__arrow'>
                  <img src={arrowIcon} alt='Arrow right' />
                </div>
              )
            ) : (
              <img
                src={deleteIcon}
                alt='Delete icon'
                className='orders-list__delete-icon'
                data-order-id={order.id}
                onClick={deleteOrder}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OrdersList;
