import React from 'react';
import ProductList from './components/ProductList';

export type ProductType = {
  _id: number
  title: string;
  category: string;
  description?: string;
  image: string;
  price: number;
};

const AllProductsPage: React.FC = () => {
  return (
    <>
      <ProductList />
    </>
  );
};

export default AllProductsPage;
