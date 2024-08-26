import './index.css';

import { CurrencyEnum } from '../../shared/enums/Currency';
import type { TOrderListProps } from '../../shared/types';
import arrowIcon from '../../assets/icons/arrowRight.svg';
import deleteIcon from '../../assets/icons/trashIcon.svg';
import { getDualFormatDate } from '../../shared';
import { getOrderPriceSum } from '../../shared/functions/calcFunctions';
import listIcon from '../../assets/icons/listIcon.svg';
import { useHandlers } from './hooks';

const OrdersList = ({ orders, handleOrderClick, handleDeleteClick, selectedOrder }: TOrderListProps) => {
  const { deleteOrder, onOrderClick } = useHandlers({ orders, handleDeleteClick, handleOrderClick });

  if (!orders) return <></>;

  return (
    <div className='orders-list'>
      {orders.map(order => {
        const [eurDate, usDate] = getDualFormatDate(order.date);
        const totalPrices = getOrderPriceSum(order.products);

        return (
          <div key={order.id} className={`order-item ${!!selectedOrder ? 'compact' : ''}`}>
            {!selectedOrder && (
              <h3 data-order-id={order.id} onClick={onOrderClick}>
                {order.title}
              </h3>
            )}
            <img src={listIcon} alt='List icon' className='listIcon' />
            <div>
              <span>{order.products.length}</span>
              <span className='subtitle'>Products</span>
            </div>
            <div>
              <span className='subtitle'>{usDate}</span>
              <span>{eurDate}</span>
            </div>
            {!selectedOrder && (
              <div>
                {!!totalPrices ? (
                  totalPrices?.map((price, i) => (
                    <span key={i} className={price.isDefault ? '' : 'subtitle'}>
                      {CurrencyEnum[price.currency]}
                      {price.sum}
                    </span>
                  ))
                ) : (
                  <>
                    <span className='subtitle'>-</span>
                    <span>-</span>
                  </>
                )}
              </div>
            )}
            {!!selectedOrder ? (
              selectedOrder.id === order.id && (
                <div className='arrowRight'>
                  <img src={arrowIcon} alt='Arrow right' />
                </div>
              )
            ) : (
              <img src={deleteIcon} alt='Delete icon' data-order-id={order.id} onClick={deleteOrder} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OrdersList;
