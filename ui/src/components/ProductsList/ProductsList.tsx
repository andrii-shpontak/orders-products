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
          <div key={i} className={isFullData ? 'product-item full' : 'product-item'}>
            <div className='ball' />
            <img src={product.photo} alt='productPhoto' />
            <div>
              <h5>{product.title}</h5>
              <span className='subtitle'>{product.type}</span>
            </div>
            <div>
              From: {startDateEur}
              <br />
              To :{endDateEur}
            </div>
            {isFullData && (
              <>
                <div className='price'>
                  {product.price.map((price, i) => (
                    <span key={i} className={price.isDefault ? '' : 'subtitle'}>
                      {currency[price.symbol]}
                      {price.value}
                    </span>
                  ))}
                </div>
                <h5>{product.order}</h5>
                <img
                  src={deleteIcon}
                  alt='Delete icon'
                  data-product-id={product.id}
                  className='deleteIcon'
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
