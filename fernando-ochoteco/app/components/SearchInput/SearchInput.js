import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchInput = ({ text, className, type }) => (
  <Paper className="">
    <IconButton className="" aria-label="Search">
      <SearchIcon />
    </IconButton>
    <InputBase
      className=""
      placeholder="Search Google Maps"
      inputProps={{ 'aria-label': 'Search Google Maps' }}
    />
  </Paper>
);

// SearchInput.propTypes = {
//   text: PropTypes.string.isRequired,
//   className: PropTypes.string,
//   type: PropTypes.string
// };

// SearchInput.defaultProps = {
//   className: "default-title",
//   type: "h1"
// };

export default SearchInput;
