import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import useProducts from '../../hooks/useProducts';

import Product from './components/Product';
import Grid from '@mui/material/Grid';
import { MenuContext } from '../../App';

export type ProductType = {
  _id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
};

export const useStyles = makeStyles({
  borderRadius: {
    borderRadius: 5,
  },
  ml1: {
    marginLeft: 1,
  },
  sameSizedImage: {
    height: 'auto',
    maxHeight: '175px',
    width: 'auto',
    maxWidth: '175px',
  },
});

const AllProductsPage: React.FC = () => {
  const { data: products } = useProducts();
  const { setShowMenu } = useContext(MenuContext);

  useEffect(() => setShowMenu(false), []);

  return (
    <Grid sx={{ marginTop: 1 }} container spacing={2}>
      {products.map((product: ProductType) => (
        <Grid key={product._id} item>
          <Product {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AllProductsPage;
