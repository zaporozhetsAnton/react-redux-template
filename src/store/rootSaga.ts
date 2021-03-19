import { all, fork } from 'redux-saga/effects';

import { sagas as testSagas } from './test';

export default function* rootSaga() {
  yield all([fork(testSagas)]);
}
