import './index.css';

import { ErrorMessage, Field, Form, useFormikContext } from 'formik';

import CustomDateInput from '../CustomDateInput/CustomDateInput';
import { RootState } from '../../redux/store';
import type { TProductForm } from '../../shared/types';
import { currency } from '../../shared';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductForm = () => {
  const { values, setFieldValue } = useFormikContext<TProductForm>();
  const navigate = useNavigate();
  const orders = useSelector((state: RootState) => state.orders.orders);

  const ordersOption = useMemo(() => {
    return orders.map(order => ({
      title: order.title,
      id: order.id,
    }));
  }, [orders]);

  const setStartDate = (date: Date | null) => {
    setFieldValue('guarantee.start', date);
  };

  const setEndDate = (date: Date | null) => {
    setFieldValue('guarantee.end', date);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h2 className='product-form__title'>Create new product</h2>
      <Form className='product-form'>
        <div className='product-form__group'>
          <label htmlFor='order'>Select Order</label>
          <Field as='select' id='order' name='order' className='product-form__control'>
            <option value='' disabled>
              Select an order
            </option>
            {ordersOption.map(option => (
              <option key={option.id} value={option.id}>
                {option.title}
              </option>
            ))}
          </Field>
          <ErrorMessage name='order' component='div' className='product-form__error-message' />
        </div>

        <div className='product-form__group'>
          <label htmlFor='title'>Product title</label>
          <Field id='title' name='title' className='product-form__control' />
          <ErrorMessage name='title' component='div' className='product-form__error-message' />
        </div>

        <div className='product-form__group'>
          <label htmlFor='type'>Product type</label>
          <Field id='type' name='type' className='product-form__control' />
          <ErrorMessage name='type' component='div' className='product-form__error-message' />
        </div>

        <div className='product-form__group'>
          <label htmlFor='serialNumber'>Product serial number</label>
          <Field id='serialNumber' name='serialNumber' type='number' className='product-form__control' />
          <ErrorMessage name='serialNumber' component='div' className='product-form__error-message' />
        </div>

        <div className='product-form__group'>
          <label>Is new product</label>
          <div role='group' aria-labelledby='isNew'>
            <label>
              <Field type='radio' name='isNew' value='1' />
              Yes
            </label>
            <label>
              <Field type='radio' name='isNew' value='0' />
              No
            </label>
          </div>
        </div>

        <div className='product-form__group'>
          <label htmlFor='specification'>Product specification</label>
          <Field id='specification' name='specification' className='product-form__control' />
          <ErrorMessage name='specification' component='div' className='product-form__error-message' />
        </div>

        <div className='product-form__group'>
          <label>Product guarantee</label>
          <div className='product-form__date-group'>
            <Field
              id='guarantee.start'
              name='guarantee.start'
              className='product-form__control'
              component={CustomDateInput}
              value={values.guarantee.start}
              onChange={setStartDate}
              placeholder='Start date of guarantee'
            />
            <ErrorMessage name='guarantee.start' component='div' className='product-form__error-message' />
          </div>
          <div className='product-form__date-group'>
            <Field
              id='guarantee.end'
              name='guarantee.end'
              className='product-form__control'
              component={CustomDateInput}
              value={values.guarantee.end}
              onChange={setEndDate}
              placeholder='End date of guarantee'
            />
            <ErrorMessage name='guarantee.end' component='div' className='product-form__error-message' />
          </div>
        </div>

        <div className='product-form__group'>
          <label>Product price</label>
          <div className='product-form__price-group'>
            {values.price.map((price, index) => (
              <div className='product-form__price-wrapper' key={index}>
                <div className='product-form__group product-form__price'>
                  <label htmlFor={`price[${index}].value`}>{currency[price.symbol]}</label>
                  <Field
                    name={`price[${index}].value`}
                    type='number'
                    className='product-form__control'
                    placeholder='Price value'
                  />
                </div>
                <ErrorMessage name={`price[${index}].value`} component='div' className='product-form__error-message' />
              </div>
            ))}
          </div>
        </div>

        <div className='product-form__actions'>
          <button type='button' onClick={handleGoBack} className='product-form__action-button'>
            Cancel
          </button>
          <button type='submit' className='product-form__action-button product-form__action-button--submit'>
            Submit
          </button>
        </div>
      </Form>
    </>
  );
};

export default ProductForm;
