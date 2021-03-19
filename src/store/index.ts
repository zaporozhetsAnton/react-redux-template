import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export type TRootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
