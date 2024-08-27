import './index.css';

import { CurrencyEnum } from '../../shared/enums/Currency';
import type { TProductSListProps } from '../../shared/types';
import deleteIcon from '../../assets/icons/trashIcon.svg';
import { getDualFormatDate } from '../../shared';
import { useHandlers } from './hooks';

const ProductsList = ({ products, isFullData }: TProductSListProps) => {
  const { deleteProduct } = useHandlers({
    products,
  });

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
            <img
              src={deleteIcon}
              alt='Delete icon'
              data-product-id={product.id}
              className='deleteIcon'
              onClick={deleteProduct}
            />
          </div>
        );
      })}
      {/* {!!productToDelete && (
        <ConfirmPopUp
          message={`Are you shure you want do delete ${productToDelete?.title}?`}
          onAccept={confirmProductDelete}
          onDecline={closeDeletePopup}
        />
      )} */}
    </div>
  );
};

export default ProductsList;
