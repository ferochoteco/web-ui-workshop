import { fromJS } from 'immutable';

import { 
  GET_TRENDS_PENDING, 
  GET_TRENDS_SUCCESS, 
  GET_TRENDS_FAILURE 
} from './constants';

const initialState = fromJS({
  loading: false,
  locations: false,
  error:  false,
  trends: false
});

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRENDS_PENDING:
      return state
        .set('error', false)
        .set('loading', true);
    case GET_TRENDS_SUCCESS:
      return state
        .set('trends', action.trends)
        .set('locations', action.locations)
        .set('loading', false);
    case GET_TRENDS_FAILURE:
      return state
      .set('error', action.error)
      .set('loading', false);
    default:
      return state;
  }
}

export default searchReducer;
