import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import useGlobalStyles from '../../../hooks/useGlobalStyles';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import theme from '../../../theme';

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
      <Typography variant="body1">
        <Link to={link} className={classes.resetLink}>
          Back to {fromCart ? 'Cart' : 'All Products'}
        </Link>
      </Typography>
    </Box>
  );
};

export default ProductsListLink;
