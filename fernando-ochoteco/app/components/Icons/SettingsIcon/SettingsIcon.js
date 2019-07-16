import React from 'react';
import PropTypes from 'prop-types';
import { SettingsOutlined } from '@material-ui/icons';

const SettingsIcon = (props) => (
  <SettingsOutlined {...props} />
);

SettingsIcon.propTypes = {
  className: PropTypes.string
};

export default SettingsIcon;
