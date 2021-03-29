import { shallowEqual, useDispatch } from 'react-redux';

import { getVocabulary } from '@/i18n';
import { AppDispatch, useTypedSelector } from '@/store';
import { testPropsSelector } from '@/store/test/selectors';
import { addTestProp, getAsyncTestProp } from '@/store/test/actions';

const useExampleComponent = () => {
  const dispatch: AppDispatch = useDispatch();
  const testProp = useTypedSelector(testPropsSelector, shallowEqual);
  const vocabulary = getVocabulary().components.exampleComponent;

  const getAsyncProp = () => {
    dispatch(getAsyncTestProp());
  };

  const addProp = () => {
    dispatch(addTestProp('new test value'));
  };

  return {
    testProp,
    vocabulary,
    getAsyncProp,
    addProp,
  };
};

export default useExampleComponent;
