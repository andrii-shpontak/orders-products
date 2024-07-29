import './index.css';

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
      <div className='products-list'>
        {selectedOrder.products.map(product => (
          <div key={product.id} className='product-item'>
            <h5>{product.title}</h5>
            <p>{product.type}</p>
            <p>
              {product.guarantee.start}
              <br />
              {product.guarantee.end}
            </p>
            <p>
              {product.price.find(p => p.isDefault)?.value} {product.price.find(p => p.isDefault)?.symbol}
            </p>
            <h5>{selectedOrder.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedOrder;
