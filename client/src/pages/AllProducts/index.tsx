import React from 'react';
import ProductList from './components/ProductList';
import { makeStyles } from '@mui/styles';

export type ProductType = {
  _id: number;
  title: string;
  category: string;
  description?: string;
  image: string;
  price: number;
};

export const useStyles = makeStyles({
  borderRadius: {
    borderRadius: 5,
  },
  ml1: {
    marginLeft: 1,
  }
});

const AllProductsPage: React.FC = () => {
  return (
    <>
      <ProductList />
    </>
  );
};

export default AllProductsPage;
