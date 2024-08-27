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
    const ordersSelectOptions: { title: string; id: number }[] = [];
    orders.forEach(order => ordersSelectOptions.push({ title: order.title, id: order.id }));

    return ordersSelectOptions;
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
      <h2 className='productFormTitle'>Create new product</h2>
      <Form className='productForm'>
        <div className='form-group'>
          <label htmlFor='order'>Select Order</label>
          <Field as='select' id='order' name='order' className='form-control'>
            <option value='' disabled>
              Select an order
            </option>
            {ordersOption.map(option => (
              <option key={option.id} value={option.id}>
                {option.title}
              </option>
            ))}
          </Field>
          <ErrorMessage name='order' component='div' className='error-message' />
        </div>

        <div className='form-group'>
          <label htmlFor='title'>Product title</label>
          <Field id='title' name='title' className='form-control' />
          <ErrorMessage name='title' component='div' className='error-message' />
        </div>

        <div className='form-group'>
          <label htmlFor='type'>Product type</label>
          <Field id='type' name='type' className='form-control' />
          <ErrorMessage name='type' component='div' className='error-message' />
        </div>

        <div className='form-group'>
          <label htmlFor='serialNumber'>Product serial number</label>
          <Field id='serialNumber' name='serialNumber' type='number' className='form-control' />
          <ErrorMessage name='serialNumber' component='div' className='error-message' />
        </div>

        <div className='form-group'>
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

        <div className='form-group'>
          <label htmlFor='specification'>Product specification</label>
          <Field id='specification' name='specification' className='form-control' />
          <ErrorMessage name='specification' component='div' className='error-message' />
        </div>

        <div className='form-group'>
          <label>Product guarantee</label>
          <div>
            <Field
              id='guarantee.start'
              name='guarantee.start'
              className='form-control'
              component={CustomDateInput}
              value={values.guarantee.start}
              onChange={setStartDate}
              placeholder='Start date of guarantee'
            />
            <ErrorMessage name='guarantee.start' component='div' className='error-message' />
          </div>
          <div>
            <Field
              id='guarantee.end'
              name='guarantee.end'
              className='form-control'
              component={CustomDateInput}
              value={values.guarantee.end}
              onChange={setEndDate}
              placeholder='End date of guarantee'
            />
            <ErrorMessage name='guarantee.end' component='div' className='error-message' />
          </div>
        </div>
        <label>Product price</label>
        <div className='price-group'>
          {values.price.map((price, index) => (
            <div className='group-wrapper' key={index}>
              <div className='form-group price'>
                <label htmlFor={`price[${index}].value`}>{currency[price.symbol]}</label>
                <Field
                  name={`price[${index}].value`}
                  type='number'
                  className='form-control'
                  placeholder='Price value'
                />
              </div>
              <ErrorMessage name={`price[${index}].value`} component='div' className='error-message' />
            </div>
          ))}
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

export default ProductForm;
