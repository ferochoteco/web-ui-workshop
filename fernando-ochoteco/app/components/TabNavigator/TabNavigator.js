import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { 
  SettingsIcon, 
  SearchIcon,
  HomeIcon
} from 'components/Icons';

import './style.scss';

const TabNavigator = ({value, handleChange}) => {
  return (
    <Fragment>
      <Paper square className="">
        <h2 style={ {padding: "12px"} }>Twitter</h2>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<HomeIcon fontSize="large" />} aria-label="Home" />
          <Tab icon={<SearchIcon fontSize="large" />} aria-label="Search" />
          <Tab icon={<SettingsIcon fontSize="large" />} aria-label="Settings" />
        </Tabs>
      </Paper>
    </Fragment>    
  );
}

TabNavigator.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func
};

TabNavigator.defaultProps = {
  value: 0
}

export default TabNavigator;
