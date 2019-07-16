import React from 'react';
import PropTypes from 'prop-types';
import { HomeOutlined } from '@material-ui/icons';

const HomeIcon = (props) => (
  <HomeOutlined {...props} />
);

HomeIcon.propTypes = {
  className: PropTypes.string
};

export default HomeIcon;
