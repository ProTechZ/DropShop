import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import useGlobalStyles from '../../../hooks/useGlobalStyles';
import { useLocation, useNavigate } from 'react-router-dom';
import theme from '../../../theme';
import CustomLink from '../../../components/CustomLink';

const ProductsListLink: React.FC = () => {
  const classes = useGlobalStyles();
  const query = new URLSearchParams(useLocation().search);

  const navigate = useNavigate();
  const fromCart = !!query.get('cart');
  const link = fromCart ? '/cart' : '/products';

  return (
    <Box sx={{}} className={classes.verticalCenter}>
      <IconButton
        sx={{
          color: 'black',
          '&:hover': { color: theme.palette.secondary.main },
        }}
        onClick={() => navigate(link)}
        children={<KeyboardBackspaceIcon />}
      />
      <CustomLink variant="body1" to={link}>
        Back to {fromCart ? 'Cart' : 'All Products'}
      </CustomLink>
    </Box>
  );
};

export default ProductsListLink;
