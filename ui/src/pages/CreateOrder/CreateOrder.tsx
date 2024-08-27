import { initialOrderFormValue, orderValidationSchema } from '../../shared';

import { Formik } from 'formik';
import { OrderForm } from '../../components';
import type { TCreateOrderFormValues } from '../../shared/types';
import { useHandlers } from './hooks';

const CreateOrder = () => {
  const { handleSubmit } = useHandlers();

  return (
    <Formik<TCreateOrderFormValues>
      initialValues={initialOrderFormValue}
      validationSchema={orderValidationSchema}
      onSubmit={handleSubmit}>
      <OrderForm />
    </Formik>
  );
};

export default CreateOrder;
