import { removeProductFromOrder, setPopupValue } from '../../../redux/slices';

import { MouseEvent } from 'react';
import type { TProduct } from '../../../shared/types';
import { useDispatch } from 'react-redux';

export type TProdListHandlersProps = {
  products: TProduct[];
};

export function useHandlers({ products }: TProdListHandlersProps) {
  const dispatch = useDispatch();

  const getCurrentProductByEvent = (e: MouseEvent<HTMLImageElement>) => {
    const currentProduct = e.currentTarget.getAttribute('data-product-id');
    return products?.find(product => product.id === Number(currentProduct));
  };

  const deleteProduct = (e: MouseEvent<HTMLImageElement>) => {
    const currentProduct = getCurrentProductByEvent(e);
    if (!!currentProduct) {
      dispatch(
        setPopupValue({
          isOpen: true,
          message: `Are you sure you want do delete this product "${currentProduct.title}"?`,
          onAccept: () =>
            dispatch(removeProductFromOrder({ orderId: currentProduct.order, productId: currentProduct.id })),
          onDecline: () => {},
        }),
      );
    }
  };

  return { deleteProduct };
}
