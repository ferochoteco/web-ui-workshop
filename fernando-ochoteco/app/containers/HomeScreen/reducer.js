import { fromJS } from 'immutable';

import { 
  GET_TWEETS_TL_FAILURE, 
  GET_TWEETS_TL_PENDING, 
  GET_TWEETS_TL_SUCCESS 
} from './constants';

const initialState = fromJS({
  tweets: false,
  loading: false,
  error:  false
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TWEETS_TL_PENDING:
      return state
        .set('error', false)
        .set('loading', true);
    case GET_TWEETS_TL_SUCCESS:
      return state
        .set('tweets', action.tweets)
        .set('loading', false);
    case GET_TWEETS_TL_FAILURE:
      return state
      .set('error', action.error)
      .set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
