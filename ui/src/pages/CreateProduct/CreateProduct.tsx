import { productFormInitialValue, productValidationSchema } from '../../shared';

import { Formik } from 'formik';
import { ProductForm } from '../../components';
import type { TProductForm } from '../../shared/types';
import { useHandlers } from './hooks';

const CreateProduct = () => {
  const { handleSubmit } = useHandlers();

  return (
    <Formik<TProductForm>
      initialValues={productFormInitialValue}
      validationSchema={productValidationSchema}
      onSubmit={handleSubmit}>
      <ProductForm />
    </Formik>
  );
};

export default CreateProduct;
