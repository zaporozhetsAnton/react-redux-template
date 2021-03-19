import { TestActionTypes, TTestAction } from '@/store/test/actions/types';
import { ITestState } from './types';

const initialState: ITestState = {
  testProp: ['test value'],
};

const testReducer = (state = initialState, action: TTestAction): ITestState => {
  switch (action.type) {
    case TestActionTypes.ADD_TEST_PROP:
      return {
        ...state,
        testProp: [...state.testProp, action.payload],
      };
    case TestActionTypes.SET_TEST_PROP:
      return {
        ...state,
        testProp: action.payload,
      };
    default:
      return state;
  }
};

export default testReducer;
