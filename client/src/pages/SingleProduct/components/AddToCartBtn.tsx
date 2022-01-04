import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react';
import theme from '../../../theme';

interface AddToCartBtnProps {
  productId: number;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ productId }) => {
  return (
    <Tooltip title={'Add to cart'}>
      <IconButton
        sx={{
          backgroundColor: theme.palette.secondary.main,
          color: 'white',
          transform: 'scale(150%)',
          marginTop: 5,
        }}
      >
        <AddShoppingCartIcon />
      </IconButton>
    </Tooltip>
  );
};

export default AddToCartBtn;
