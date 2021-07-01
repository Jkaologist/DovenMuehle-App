import { takeLatest, call, put, select } from 'redux-saga/effects';
import { LOAD_STRINGS } from 'containers/App/constants';
import { stringsLoaded, stringsLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectDisplayPage } from 'containers/DisplayPage/selectors';

/**
 * Gets the strings of the from node/express server
 */
export function* displayPageSaga() {
  // Select username from store
  const username = yield select(makeSelectDisplayPage());
  const requestURL = `http://localhost:3000/items`;

  try {
    // Call our request helper (see 'utils/request')
    const strings = yield call(request, requestURL);
    yield put(stringsLoaded(strings, username));
  } catch (err) {
    yield put(stringsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_STRINGS, displayPageSaga);
}
