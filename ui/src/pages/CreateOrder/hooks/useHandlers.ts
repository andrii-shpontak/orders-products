import type { TCreateOrderFormValues } from '../../../shared/types';
import { addOrder } from '../../../redux/slices';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function useHandlers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (value: TCreateOrderFormValues) => {
    if (!!value.date) {
      dispatch(addOrder({ ...value, date: value.date?.toISOString() }));
      navigate(-1);
    }
  };

  return { handleSubmit };
}
