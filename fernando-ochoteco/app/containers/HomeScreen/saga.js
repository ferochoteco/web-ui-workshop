import {
  call, put, takeLatest
} from 'redux-saga/effects';
import { GET_TWEETS_TL_PENDING } from './constants';
import { 
  getTweetsFailure, 
  getTweetsSuccess 
} from './actions';

import request from 'utils/request';

export function* getTweetsService() {
  const requestURL = 'http://localhost:8080/timeline?count=100';

  try {
    // Call our request helper (see 'utils/request')
    const tweets = yield call(request, requestURL);
    yield put(getTweetsSuccess(tweets));
  } catch (err) {
    yield put(getTweetsFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for GET_TWEETS_TL_PENDING actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_TWEETS_TL_PENDING, getTweetsService);
}
