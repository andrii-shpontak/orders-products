import { PageTitle, ProductsList, TypeSelector } from '../../components';
import { useMemo, useState } from 'react';

import { RootState } from '../../redux/store';
import type { TProduct } from '../../shared/types';
import { useSelector } from 'react-redux';

const Products = () => {
  const [selectedType, setSelectedType] = useState<string>('');
  const orders = useSelector((state: RootState) => state.orders.orders);

  const { products, productTypes } = useMemo(() => {
    const productsArray: TProduct[] = [];
    const typesArray: string[] = [];

    orders.forEach(order => {
      productsArray.push(...order.products);
      order.products.forEach(product => typesArray.push(product.type));
    });

    return {
      products: productsArray,
      productTypes: Array.from(new Set(typesArray)),
    };
  }, [orders]);

  const sortedProducts = useMemo(
    () => (selectedType ? products.filter(prod => prod.type === selectedType) : products),
    [products, selectedType],
  );

  return (
    <div className='productsPage'>
      <PageTitle title='Products' count={products.length} />
      <TypeSelector value={selectedType} setValue={setSelectedType} options={productTypes} />
      <ProductsList products={sortedProducts} isFullData={true} />
    </div>
  );
};

export default Products;
