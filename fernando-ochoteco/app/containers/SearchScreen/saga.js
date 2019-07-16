import {
  call, put, takeLatest
} from 'redux-saga/effects';
import { GET_TRENDS_PENDING } from './constants';
import { 
  getTrendsSuccess, 
  getTrendsFailure 
} from './actions';

import request from 'utils/request';

export function* getTrendsService() {
  const requestURL = 'http://localhost:8080/trends?id=23424747';
  try {
    const trends = yield call(request, requestURL);
    yield put(getTrendsSuccess(trends));
  } catch (err) {
    yield put(getTrendsFailure(err));
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
  yield takeLatest(GET_TRENDS_PENDING, getTrendsService);
}
