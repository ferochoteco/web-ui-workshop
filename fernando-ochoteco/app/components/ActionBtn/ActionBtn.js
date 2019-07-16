import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Button } from '@material-ui/core';

const ActionBtn = ({ className, children, size }) => (
  <Button className={`action ${size} ${className}`}>
    { children }
  </Button>
);

ActionBtn.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string
};

ActionBtn.defaultProps = {
  className: "",
  size: ""
};

export default ActionBtn;
