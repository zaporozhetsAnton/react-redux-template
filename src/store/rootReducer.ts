import { combineReducers } from 'redux';

// If you need to store some redux state part in localStorage/indexedDB/AsyncStorage than good to use the 'redux-persist' library

import { reducers as test } from './test';

const rootReducer = combineReducers({
  test,
});

export default rootReducer;
