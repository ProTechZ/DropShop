import React from 'react';
import useProducts from '../../../hooks/useProducts';

import Product from './Product';
import Grid from '@mui/material/Grid';

const ProductsList: React.FC = () => {
  const { data: products } = useProducts();

  return (
    <Grid sx={{ marginTop: 1 }} container spacing={2}>
      {products.map((product) => (
        <Grid key={product._id} item>
          <Product {...product} />
        </Grid>
      ))}
    </Grid>
  );
};


export default ProductsList;