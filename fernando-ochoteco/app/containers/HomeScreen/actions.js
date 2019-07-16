import { 
  GET_TWEETS_TL_PENDING, 
  GET_TWEETS_TL_SUCCESS, 
  GET_TWEETS_TL_FAILURE 
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_TWEETS_TL_PENDING
 */
export function getTweets() {
  return {
    type: GET_TWEETS_TL_PENDING
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} tweets The tweets data
 *
 * @return {object}      An action object with a type of GET_TWEETS_TL_SUCCESS passing the tweets
 */
export function getTweetsSuccess(tweets) {
  return {
    type: GET_TWEETS_TL_SUCCESS,
    tweets
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of GET_TWEETS_TL_FAILURE passing the error
 */
export function getTweetsFailure(error) {
  return {
    type: GET_TWEETS_TL_FAILURE,
    error
  };
}
