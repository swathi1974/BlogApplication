import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <TextField
      label="Search Blog"
      variant="outlined"
      value={searchTerm}
      onChange={onSearchChange}
      style={{ marginBottom: '20px' }}
    />
  );
};

export default SearchBar;
