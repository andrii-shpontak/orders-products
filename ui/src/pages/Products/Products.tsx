import './index.css';

import { PageTitle, ProductsList } from '../../components';

import { RootState } from '../../redux/store';
import type { TProduct } from '../../shared/types';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);

  const products = useMemo(() => {
    const productsArray: TProduct[] = [];
    orders.forEach(order => {
      productsArray.push(...order.products);
    });

    return productsArray;
  }, [orders]);

  return (
    <div className='productsPage'>
      <PageTitle title='Products' count={products.length} />
      <ProductsList products={products} isFullData={true} />
    </div>
  );
};

export default Products;
