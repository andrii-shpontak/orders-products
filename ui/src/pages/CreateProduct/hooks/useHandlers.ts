import { TProduct, TProductForm } from '../../../shared/types';

import { addProductToOrder } from '../../../redux/slices';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function useHandlers() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSubmit = (values: TProductForm) => {
    const product: Omit<TProduct, 'id'> = {
      ...values,
      isNew: Number(values.isNew),
      guarantee: {
        start: values.guarantee.start?.toISOString() || '',
        end: values.guarantee.start?.toISOString() || '',
      },
      order: Number(values.order),
    };

    dispatch(addProductToOrder({ orderId: Number(values.order), product }));
    navigate(-1);
  };

  return { handleSubmit };
}
