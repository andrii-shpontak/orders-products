import './index.css';

import { currency, getDualFormatDate } from '../../shared';

import type { TProductSListProps } from '../../shared/types';
import deleteIcon from '../../assets/icons/trashIcon.svg';
import { useHandlers } from './hooks';

const ProductsList = ({ products, isFullData }: TProductSListProps) => {
  const { deleteProduct } = useHandlers({
    products,
  });

  return (
    <div className='products-list'>
      {products.map((product, i) => {
        const [startDateEur] = getDualFormatDate(product.guarantee.start);
        const [endDateEur] = getDualFormatDate(product.guarantee.end);
        return (
          <div key={i} className={`products-list__item ${isFullData ? 'products-list__item--full' : ''}`}>
            <div className='products-list__item-ball' />
            <img src={product.photo} alt='Product' className='products-list__item-photo' />
            <div className='products-list__item-details'>
              <h5 className='products-list__item-title'>{product.title}</h5>
              <span className='products-list__item-subtitle'>{product.type}</span>
            </div>
            <div className='products-list__item-dates'>
              From: {startDateEur}
              <br />
              To: {endDateEur}
            </div>
            {isFullData && (
              <>
                <div className='products-list__item-price'>
                  {product.price.map((price, i) => (
                    <span
                      key={i}
                      className={`products-list__item-price-value ${price.isDefault ? '' : 'products-list__item-price-value--subtitle'}`}>
                      {currency[price.symbol]}
                      {price.value}
                    </span>
                  ))}
                </div>
                <h5 className='products-list__item-order'>{product.order}</h5>
                <img
                  src={deleteIcon}
                  alt='Delete icon'
                  data-product-id={product.id}
                  className='products-list__item-delete-icon'
                  onClick={deleteProduct}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
