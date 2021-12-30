import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <>
      <IconButton children={<SearchIcon />} size='large' />
    </>
  );
};

export default SearchBar;
