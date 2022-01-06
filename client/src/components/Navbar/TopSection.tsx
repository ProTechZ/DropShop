import React, { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import useGlobalStyles from '../../hooks/useGlobalStyles';
import Logo from './Logo';
import { MenuContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const TopSection: React.FC = () => {
  const classes = useGlobalStyles();
  const { showMenu, setShowMenu } = useContext(MenuContext);
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{ justifyContent: 'space-between', width: '90%', color: 'white' }}
        className={classes.verticalCenter}
      >
        <IconButton
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          color="inherit"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Logo />
        <IconButton
          onClick={() => {
            navigate('/cart');
          }}
          children={<ShoppingCartIcon fontSize="large" />}
          color="inherit"
        />
      </Box>
    </>
  );
};

export default TopSection;
