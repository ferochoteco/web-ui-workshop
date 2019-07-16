/*
 * ComponentsPage
 *
 * List all the components
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

import List from 'components/List';
import ListItem from 'components/ListItem';

import SearchInput from 'components/SearchInput';

import TabNavigator from 'components/TabNavigator';
import { 
  NotificationsIcon,
  RetweetIcon, 
  LikeIcon, 
  SettingsIcon, 
  SearchIcon,
  HomeIcon,
  CommentIcon
} from '../../components/Icons';
import ActionBtn from '../../components/ActionBtn/ActionBtn';
import CounterActionBtn from '../../components/CounterActionBtn/CounterActionBtn';


export default class ComponentsPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="components-page">
        <Helmet>
          <title>Components Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <h1>Components</h1>
        <div className="component-container">
          <p className="title">Icons</p>
          <CommentIcon />
          <HomeIcon />
          <SearchIcon />
          <SettingsIcon />
          <NotificationsIcon />
          <LikeIcon />
          <RetweetIcon />
        </div>
        <div className="component-container">
          <p className="title">ActionBtn</p>
          <ActionBtn className="like-btn" size="md">
            <LikeIcon />
          </ActionBtn>
          <ActionBtn className="sync-btn" size="md">
            <RetweetIcon />
          </ActionBtn>
          <ActionBtn className="comment-btn" size="md">
            <CommentIcon />
          </ActionBtn>
          <ActionBtn className="search-btn">
            <span>Search</span>
          </ActionBtn>
        </div>
        <div className="component-container">
          <p className="title">TabNavigator</p>
          <TabNavigator />
        </div>
        <div className="component-container">
          <p className="title">SearchInput</p>
          <SearchInput />
        </div>
        <div className="component-container">
          <p className="title">CounterActionBtn</p>
          <CounterActionBtn count="4">
            <LikeIcon />
          </CounterActionBtn>
          <CounterActionBtn count="9">
            <RetweetIcon />
          </CounterActionBtn>
          <CounterActionBtn count="0">
            <CommentIcon />
          </CounterActionBtn>
        </div>
      </div>
    );
  }
}
