import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import useGlobalStyles from '../../../hooks/useGlobalStyles';
import { Link, useNavigate } from 'react-router-dom';

const BackToProducts: React.FC = () => {
  const classes = useGlobalStyles();

  const navigate = useNavigate();

  return (
    <Box className={classes.verticalCenter}>
      <IconButton onClick={() => navigate('/products')}>
        <KeyboardBackspaceIcon  />
      </IconButton>
      <Typography variant="body1">
        <Link to="/products">Back to All Products</Link>
      </Typography>
    </Box>
  );
};

export default BackToProducts;
