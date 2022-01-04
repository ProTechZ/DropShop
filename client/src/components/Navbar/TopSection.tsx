import React from 'react';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import useGlobalStyles from '../../hooks/useGlobalStyles';
import { Link } from 'react-router-dom';

const TopSection: React.FC = () => {
  const classes = useGlobalStyles();

  return (
    <Box
      sx={{ justifyContent: 'space-between', width: '90%', color: 'white' }}
      className={classes.verticalCenter}
    >
      <IconButton children={<MenuIcon fontSize="large" />} color="inherit" />
      <Typography
        variant="h5"
        sx={{ letterSpacing: 2.5, fontFamily: 'Fira Sans, sans-serif' }}
      >
        <Link to="/" style={{ color: 'inherit' }} className={classes.resetLink}>
          DROPSHOP
        </Link>
      </Typography>
      <IconButton
        children={<ShoppingCartIcon fontSize="large" />}
        color="inherit"
      />
    </Box>
  );
};

export default TopSection;
