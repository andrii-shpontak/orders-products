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
    <>
      <h2 className='orderFormTitle'>Create new order</h2>
      <Form className='orderForm'>
        <div className='form-group'>
          <label htmlFor='title'>Order title</label>
          <Field id='title' name='title' className='form-control' />
          <ErrorMessage name='title' component='div' className='error-message' />
        </div>
        <div className='form-group'>
          <label htmlFor='date'>Order date</label>
          <Field
            component={CustomDateInput}
            id='date'
            name='date'
            className='form-control'
            value={values.date}
            onChange={onDateChange}
          />
          <ErrorMessage name='date' component='div' className='error-message' />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Order description</label>
          <Field id='description' name='description' className='form-control' />
          <ErrorMessage name='description' component='div' className='error-message' />
        </div>
        <div className='actionButtons'>
          <button type='button' onClick={handleGoBack}>
            Cancel
          </button>
          <button type='submit'>Submit</button>
        </div>
      </Form>
    </>
  );
};

export default OrderForm;
