import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import theme from '../../../theme';
import useStore from '../../../state/store';

interface AddToCartBtnProps {
  _id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = (props) => {
  const { _id, title, category, description, image, price } = props;

  const store = useStore();

  const addProductToCart = () => {
    store.addItemToCart({ _id, title, category, description, image, price });
  };

  return (
    <Tooltip title={'Add to cart'}>
      <IconButton
        onClick={addProductToCart}
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
