import React, { useContext } from 'react';
import { MenuContext } from '../../App';
import useGlobalStyles from '../../hooks/useGlobalStyles';

import Section from './Section';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

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
            variant="h3"
            children="Menu"
            className={classes.textCenter}
          />
          <Divider />
          <Link to='/products'>Products</Link>
          <Section listItemObjs={[]} />
          <Divider />
          <Section title="Categories" listItemObjs={[]} />
        </Box>
      </Drawer>
    </>
  );
};

export default Menu;
