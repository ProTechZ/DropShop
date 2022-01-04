import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import useGlobalStyles from '../../../hooks/useGlobalStyles';
import { Link, useNavigate } from 'react-router-dom';
import theme from '../../../theme';

const ProductsListLink: React.FC = () => {
  const classes = useGlobalStyles();

  const navigate = useNavigate();

  return (
    <Box sx={{}} className={classes.verticalCenter}>
      <IconButton
        sx={{
          color: 'black',
          '&:hover': { color: theme.palette.secondary.main },
        }}
        onClick={() => navigate('/products')}
        children={<KeyboardBackspaceIcon />}
      />
      <Typography variant="body1">
        <Link to="/products" className={classes.resetLink}>
          Back to All Products
        </Link>
      </Typography>
    </Box>
  );
};

export default ProductsListLink;
