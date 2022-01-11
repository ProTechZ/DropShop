import Grid from '@mui/material/Grid';
import React from 'react';
import CartItem from './CartItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Cart: React.FC = () => {
  const cartItemIds = Object.keys(localStorage);

  return (
    <Box sx={{ marginX: 1 }}>
      <Grid sx={{ marginTop: 1 }} container spacing={1}>
        {cartItemIds.map((id, index) => (
          <Grid key={index} item>
            <CartItem id={+id} key={index} />
          </Grid>
        ))}
      </Grid>
      <Button
        sx={{ marginTop: 2, width: '100%' }}
        variant="contained"
        color="secondary"
      >
        Continue to Checkout
        <CheckoutIcon sx={{ marginLeft: 2 }} />
      </Button>
    </Box>
  );
};

export default Cart;
