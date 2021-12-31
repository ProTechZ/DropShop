import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import TopSection from './TopSection';
import SearchBar from './SearchBar';

import useGlobalStyles from '../../hooks/useGlobalStyles';

const Navbar = () => {
  const classes = useGlobalStyles();

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          paddingY: '10px',
        }}
        className={classes.horizontalVerticalCenter}
      >
        <TopSection />

        {/* <SearchBar /> */}
      </AppBar>
    </Box>
  );
};

export default Navbar;
