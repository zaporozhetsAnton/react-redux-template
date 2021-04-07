import { shallowEqual, useDispatch } from 'react-redux';
import { useTheme } from 'react-jss';

import { getVocabulary } from '@/i18n';
import { AppDispatch, useTypedSelector } from '@/store';
import { testPropsSelector } from '@/store/test/selectors';
import { addTestProp, getAsyncTestProp } from '@/store/test/actions';
import { Theme } from '@/styles/theme';
import { useStyles } from './styles';

const useExampleComponent = () => {
  const theme = useTheme<Theme>();
  const classes = useStyles({ theme });
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
    classes,
    testProp,
    vocabulary,
    getAsyncProp,
    addProp,
  };
};

export default useExampleComponent;
