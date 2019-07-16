import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import HomeScreen from 'containers/HomeScreen/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { Switch, Route } from 'react-router-dom';
import './style.scss';
import SearchScreen from 'containers/SearchScreen/Loadable';

const TabContainer = ({className, children}) => (
  <div className={className}>
    {children}
  </div>
);

const ContainerSelector = () => (
  <Switch>
    <Route path="/" exact component={() => <TabContainer className="home-tab"><HomeScreen /></TabContainer>} />
    <Route path="/search" exact component={() => <TabContainer className="home-tab"><SearchScreen /></TabContainer>} />
    <Route exact path="/settings" component={() => <TabContainer className="home-tab">Page 3</TabContainer>} />
    <Route path="" component={NotFoundPage} />
  </Switch>
);

// ContainerSelector.propTypes = {
//   value: PropTypes.number
// };

// ContainerSelector.defaultProps = {
//   value: 0
// }

export default ContainerSelector;
