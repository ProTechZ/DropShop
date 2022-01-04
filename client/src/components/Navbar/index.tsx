import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import TopSection from './TopSection';
import SearchBar from './SearchBar';

import useGlobalStyles from '../../hooks/useGlobalStyles';

const Navbar: React.FC = () => {
  const classes = useGlobalStyles();

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ paddingY: 1 }}
        className={classes.horizontalVerticalCenter}
      >
        <TopSection />

        {/* <SearchBar /> */}
      </AppBar>
    </Box>
  );
};

export default Navbar;
