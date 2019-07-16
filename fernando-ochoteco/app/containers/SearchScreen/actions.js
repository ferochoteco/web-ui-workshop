import { 
  GET_TRENDS_PENDING, 
  GET_TRENDS_SUCCESS, 
  GET_TRENDS_FAILURE 
} from './constants';

export function getTrends() {
  return {
    type: GET_TRENDS_PENDING
  };
}

export function getTrendsSuccess(trends) {
  return {
    type: GET_TRENDS_SUCCESS,
    trends: trends ? trends[0].trends : null,
    locations: trends ? trends[0].locations : null,
  };
}

export function getTrendsFailure(error) {
  return {
    type: GET_TRENDS_FAILURE,
    error
  };
}

export const getSearchResults = () => {};