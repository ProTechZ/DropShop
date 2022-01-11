import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import theme from '../../../theme';

interface AddToCartBtnProps {
  id: number;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ id }) => {
  return (
    <IconButton
      onClick={() => localStorage.setItem(id.toString(), '1')}
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        transform: 'scale(150%)',
        marginTop: 5,
      }}
    >
      <AddShoppingCartIcon />
    </IconButton>
  );
};

export default AddToCartBtn;
