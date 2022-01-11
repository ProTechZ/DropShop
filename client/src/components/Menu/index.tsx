import React, { useContext } from 'react';
import { MenuContext } from '../../App';
import useGlobalStyles from '../../hooks/useGlobalStyles';

import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Section from './Section';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Menu: React.FC = () => {
  const classes = useGlobalStyles();
  const { showMenu, setShowMenu } = useContext(MenuContext);

  return (
    <>
      <Drawer
        anchor={'left'}
        open={showMenu}
        onClose={() => setShowMenu(false)}
      >
        <Box sx={{ width: 250 }}>
          <Typography
            variant="h4"
            children="Menu"
            sx={{ marginBottom: 1.5 }}
            className={classes.textCenter}
          />
          <Section
            listItemObjs={[
              { name: 'Home', to: '/', icon: <HomeIcon /> },
              { name: 'Register', to: '/register', icon: <LogoutIcon /> },
              { name: 'Login', to: '/login', icon: <LoginIcon /> },
            ]}
          />
          <Divider />
          <Section title="Categories" listItemObjs={[]} />
        </Box>
      </Drawer>
    </>
  );
};

export default Menu;
