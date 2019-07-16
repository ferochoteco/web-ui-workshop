import React from 'react';
import PropTypes from 'prop-types';
import { FavoriteBorder } from '@material-ui/icons';

const LikeIcon = (props) => (
  <FavoriteBorder {...props} />
);

LikeIcon.propTypes = {
  className: PropTypes.string
};

export default LikeIcon;
