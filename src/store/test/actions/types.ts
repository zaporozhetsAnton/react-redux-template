export enum TestActionTypes {
  SET_TEST_PROP = 'SET_TEST_PROP',
  ADD_TEST_PROP = 'ADD_TEST_PROP',
  GET_ASYNC_TEST_PROP = 'GET_ASYNC_TEST_PROP',
}

export interface ISetTestPropAction {
  type: TestActionTypes.SET_TEST_PROP;
  payload: string[];
}

interface IAddTestPropAction {
  type: TestActionTypes.ADD_TEST_PROP;
  payload: string;
}

interface GetAsyncTestPropAction {
  type: TestActionTypes.GET_ASYNC_TEST_PROP;
}

export type TTestAction = ISetTestPropAction | IAddTestPropAction | GetAsyncTestPropAction;
