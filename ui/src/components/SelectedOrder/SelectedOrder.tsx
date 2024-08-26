import './index.css';

import ProductsList from '../ProductsList/ProductsList';
import type { TSelectedOrderProps } from '../../shared/types';
import closeIcon from '../../assets/icons/closeIcon.svg';

const SelectedOrder = ({ selectedOrder, handleClose }: TSelectedOrderProps) => {
  if (!selectedOrder) return <></>;

  return (
    <div className='order-details'>
      <div className='closeIcon' onClick={handleClose}>
        <img src={closeIcon} alt='Close icon' />
      </div>
      <h2>{selectedOrder.title}</h2>
      <ProductsList products={selectedOrder.products} />
    </div>
  );
};

export default SelectedOrder;
