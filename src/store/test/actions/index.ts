import { TestActionTypes, TTestAction } from './types';

export const addTestProp = (payload: string): TTestAction => ({
  type: TestActionTypes.ADD_TEST_PROP,
  payload,
});

export const setTestProp = (payload: string[]): TTestAction => ({
  type: TestActionTypes.SET_TEST_PROP,
  payload,
});

export const getAsyncTestProp = (): TTestAction => ({
  type: TestActionTypes.GET_ASYNC_TEST_PROP,
});
