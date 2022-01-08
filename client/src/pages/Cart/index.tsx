import { Grid } from '@mui/material';
import React from 'react';
import CartItem from './CartItem';

const Cart: React.FC = () => {
  const cartItemIds = Object.keys(localStorage);

  return (
      <Grid sx={{ marginTop: 1 }} container spacing={1}>
        {cartItemIds.map((id, index) => (
          <Grid key={index} item>
            <CartItem id={+id} key={index} />
          </Grid>
        ))}
      </Grid>
  );
};

export default Cart;
