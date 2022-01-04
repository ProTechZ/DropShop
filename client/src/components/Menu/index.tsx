import React, { useContext } from 'react';
import { MenuContext } from '../../App';
import Backdrop from '@mui/material/Backdrop';
import Drawer from '@mui/material/Drawer';

const Menu: React.FC = () => {
  const { showMenu, setShowMenu } = useContext(MenuContext);

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: 10 }}
        open={showMenu}
        onClick={() => setShowMenu(false)}
      >
        <Drawer open={true} anchor='left'>
          <h2>hi</h2>

        </Drawer>
      </Backdrop>
    </>
  );
};

export default Menu;
