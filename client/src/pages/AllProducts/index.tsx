import React from 'react';
import ProductList from './ProductList';

export type ProductType = {
  title: String;
  category: String;
  description?: String;
  image: String;
  price: Number;
};

const AllProductsPage: React.FC = () => {
  return (
    <>
      <ProductList />
    </>
  );
};

export default AllProductsPage;
