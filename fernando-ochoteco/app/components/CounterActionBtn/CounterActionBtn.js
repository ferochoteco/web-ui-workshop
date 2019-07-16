import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Button } from '@material-ui/core';

const CounterActionBtn = ({ className, children, size, count }) => (
  <div className="counter-action-btn">
    <Button className={`counter-action ${size} ${className}`}>
      { children }
    </Button>
    {
      count > 0 &&
        <span className="total-count">
          { count }
        </span>
    }
  </div>
);

CounterActionBtn.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  count: PropTypes.number
};

CounterActionBtn.defaultProps = {
  count: 0
};

export default CounterActionBtn;
