import Box from '@mui/material/Box';
import TopSection from './TopSection';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Box
      sx={{
        position: 'sticky',
        height: 100,
        backgroundColor: 'primary.main',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <TopSection />
      <SearchBar />
    </Box>
  );
};

export default Navbar;
