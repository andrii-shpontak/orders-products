import './index.css';

import { CurrencyEnum } from '../../shared/enums/Currency';
import type { TProductSListProps } from '../../shared/types';
import { getDualFormatDate } from '../../shared';

const ProductsList = ({ products, isFullData }: TProductSListProps) => {
  return (
    <div className='products-list'>
      {products.map(product => {
        const [startDateEur] = getDualFormatDate(product.guarantee.start);
        const [endDateEur] = getDualFormatDate(product.guarantee.end);
        return (
          <div key={product.id} className={isFullData ? 'product-item full' : 'product-item'}>
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
                      {CurrencyEnum[price.symbol]}
                      {price.value}
                    </span>
                  ))}
                </div>
                <h5>{product.order}</h5>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
