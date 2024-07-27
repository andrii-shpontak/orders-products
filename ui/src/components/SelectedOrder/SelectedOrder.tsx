import './index.css';

import type { TSelectedOrderProps } from '../../shared/types';

const SelectedOrder = ({ selectedOrder }: TSelectedOrderProps) => {
  if (!selectedOrder) return <></>;

  return (
    <div className='order-details'>
      <h2>{selectedOrder.title}</h2>
      <p>Date: {selectedOrder.date}</p>
      <p>Description: {selectedOrder.description}</p>
      <div className='products-list'>
        {selectedOrder.products.map(product => (
          <div key={product.id} className='product-item'>
            <h4>{product.title}</h4>
            <p>Type: {product.type}</p>
            <p>Specification: {product.specification}</p>
            <p>
              Warranty: {product.guarantee.start} - {product.guarantee.end}
            </p>
            <p>
              Price: {product.price.find(p => p.isDefault)?.value} {product.price.find(p => p.isDefault)?.symbol}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedOrder;
