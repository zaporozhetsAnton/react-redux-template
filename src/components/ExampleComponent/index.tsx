import { shallowEqual, useDispatch } from 'react-redux';

import logo from '@/assets/images/logo.svg';
import { AppDispatch, useTypedSelector } from '@/store';
import { testPropsSelector } from '@/store/test/selectors';
import { getAsyncTestProp, addTestProp } from '@/store/test/actions';

const ExampleComponent = () => {
  const dispatch: AppDispatch = useDispatch();
  const testProp = useTypedSelector(testPropsSelector, shallowEqual);

  const getAsyncProp = () => {
    dispatch(getAsyncTestProp());
  };

  const addProp = () => {
    dispatch(addTestProp('new test value'));
  };

  return (
    <div>
      <img src={logo} alt="logo" style={{ width: 100, height: 100 }} />
      <p>{`testProp: ${JSON.stringify(testProp)}`}</p>
      <button onClick={getAsyncProp}>get async prop by saga</button>
      <button onClick={addProp}>add test saga</button>
    </div>
  );
};

export default ExampleComponent;
