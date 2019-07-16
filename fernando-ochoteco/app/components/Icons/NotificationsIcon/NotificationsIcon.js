import React from 'react';
import PropTypes from 'prop-types';
import { NotificationsOutlined } from '@material-ui/icons';

const NotificationsIcon = (props) => (
  <NotificationsOutlined {...props} />
);

NotificationsIcon.propTypes = {
  className: PropTypes.string
};

export default NotificationsIcon;
