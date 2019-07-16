import { createSelector } from 'reselect';

const selectSearch = (state) => state.get('search');

const makeSelectLoading = () => createSelector(
  selectSearch,
  (searchState) => searchState.get('loading')
);

const makeSelectError = () => createSelector(
  selectSearch,
  (searchState) => searchState.get('error')
);

const makeSelectTrends = () => createSelector(
  selectSearch,
  (searchState) => searchState.get('trends')
);

const makeSelectLocations = () => createSelector(
  selectSearch,
  (searchState) => searchState.get('locations')
);

export {
  selectSearch,
  makeSelectLoading,
  makeSelectError,
  makeSelectTrends,
  makeSelectLocations
};
