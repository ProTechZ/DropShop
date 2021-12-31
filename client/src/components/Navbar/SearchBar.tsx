import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <TextField
      InputProps={{
        endAdornment: (
          <IconButton onClick={() => console.log('hello')}>
            <SearchIcon fontSize="large" />
          </IconButton>
        ),
        disableUnderline: true,
      }}
      sx={{
        width: '90%',
        backgroundColor: 'white',
        borderRadius: '16px',
      }}
      color="secondary"
      variant="filled"
      label="Search here..."
    />
  );
};

export default SearchBar;
