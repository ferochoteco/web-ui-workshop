import React from 'react';
import PropTypes from 'prop-types';
import { Search } from '@material-ui/icons';

const SearchIcon = (props) => (
  <Search {...props} />
);

SearchIcon.propTypes = {
  className: PropTypes.string
};

export default SearchIcon;
