import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

export const Filter = ({ onSearchContact }) => {
  return (
    <TextField
      id="outlined-search"
      label="Search"
      color="secondary"
      type="search"
      size="small"
      onChange={onSearchContact}
      style={{ marginBottom: '20px' }}
    />
  );
};

Filter.propTypes = {
  onSearchContact: PropTypes.func.isRequired,
};

export default Filter;
