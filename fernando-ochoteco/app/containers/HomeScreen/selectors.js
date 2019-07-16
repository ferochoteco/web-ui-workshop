/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading')
);

const makeSelectError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);

const makeSelectTweets = () => createSelector(
  selectHome,
  (homeState) => homeState.get('tweets')
);

export {
  selectHome,
  makeSelectLoading,
  makeSelectError,
  makeSelectTweets
};
