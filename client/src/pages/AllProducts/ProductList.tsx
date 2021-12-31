import React from 'react';
import useProducts from '../../hooks/useProducts';

const ProductsList: React.FC = () => {
  const products = useProducts()
  console.log(products);
  

  return <div></div>;
};

export default ProductsList;
