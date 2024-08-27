import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  date: yup.string().required('Date is required'),
  description: yup.string(),
});

export const productValidationSchema = yup.object().shape({
  title: yup.string().required('Product title is required').min(3, 'Product title must be at least 3 characters long'),
  type: yup.string().required('Type title is required').min(3, 'Product title must be at least 3 characters long'),

  guarantee: yup.object().shape({
    start: yup.date().nullable().required('Start date of guarantee is required'),
    end: yup
      .date()
      .nullable()
      .required('End date of guarantee is required')
      .min(yup.ref('start'), 'End date cannot be before start date'),
  }),
  price: yup
    .array()
    .of(
      yup.object().shape({
        value: yup
          .number()
          .required('Price is required')
          .integer('Price must be an integer')
          .min(1, 'Price must be greater than 0'),
        symbol: yup.string().required('Currency symbol is required'),
      }),
    )
    .min(1, 'At least one price is required'),
});
