import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  date: yup.string().required('Date is required'),
  description: yup.string(),
});
