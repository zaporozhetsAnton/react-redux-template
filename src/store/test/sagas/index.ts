import { put, takeEvery, all, fork, call } from 'redux-saga/effects';

import { setTestProp } from '@/store/test/actions';
import { TestActionTypes } from '@/store/test/actions/types';

function* handleError(error: Error) {
  const errorMessage = error.message || 'some generic error';
  yield alert(errorMessage);
}

function* testSagaExampleWorker() {
  const testAsyncFunc = async () => new Array(parseInt(String(Math.random() * 20))).fill('test async data');
  try {
    const testAsyncData = yield call(testAsyncFunc);
    yield put(setTestProp(testAsyncData));
  } catch (error) {
    yield handleError(error);
  }
}

function* testSagaExampleWatcher() {
  yield takeEvery(TestActionTypes.GET_ASYNC_TEST_PROP, testSagaExampleWorker);
}

export default function* () {
  yield all([fork(testSagaExampleWatcher)]);
}
