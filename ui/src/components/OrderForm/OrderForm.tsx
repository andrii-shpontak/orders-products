import './index.css';

import { ErrorMessage, Field, Form, useFormikContext } from 'formik';

import CustomDateInput from '../CustomDateInput/CustomDateInput';
import type { TCreateOrderFormValues } from '../../shared/types';
import { useNavigate } from 'react-router-dom';

const OrderForm = () => {
  const { setFieldValue, values } = useFormikContext<TCreateOrderFormValues>();
  const navigate = useNavigate();

  const onDateChange = (date: Date | null) => {
    setFieldValue('date', date);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='order-form'>
      <h2 className='order-form__title'>Create new order</h2>
      <Form className='order-form__form'>
        <div className='order-form__group'>
          <label htmlFor='title' className='order-form__label'>
            Order title
          </label>
          <Field id='title' name='title' className='order-form__input' />
          <ErrorMessage name='title' component='div' className='order-form__error-message' />
        </div>
        <div className='order-form__group'>
          <label htmlFor='date' className='order-form__label'>
            Order date
          </label>
          <Field
            component={CustomDateInput}
            id='date'
            name='date'
            className='order-form__input'
            value={values.date}
            onChange={onDateChange}
          />
          <ErrorMessage name='date' component='div' className='order-form__error-message' />
        </div>
        <div className='order-form__group'>
          <label htmlFor='description' className='order-form__label'>
            Order description
          </label>
          <Field id='description' name='description' className='order-form__input' />
          <ErrorMessage name='description' component='div' className='order-form__error-message' />
        </div>
        <div className='order-form__actions'>
          <button type='button' className='order-form__button' onClick={handleGoBack}>
            Cancel
          </button>
          <button type='submit' className='order-form__button order-form__button--submit'>
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default OrderForm;
