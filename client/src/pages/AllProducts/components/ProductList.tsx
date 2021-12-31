import React from 'react';
import useProducts from '../../../hooks/useProducts';

import Product from './Product';

const ProductsList: React.FC = () => {
  const { data: products } = useProducts();

  console.log(products);
  
  return (
    <>
      {products.map((product) => {
        return <Product {...product} key={+product._id} />
      })}
    </>
  );
};

export default ProductsList;
