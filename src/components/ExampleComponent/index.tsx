import logo from '@/assets/images/logo.svg';
import useExampleComponent from './useExampleComponent';

const ExampleComponent = () => {
  const { testProp, vocabulary, addProp, getAsyncProp } = useExampleComponent();

  return (
    <div>
      <img src={logo} alt="logo" style={{ width: 100, height: 100 }} />
      <p>{`testProp: ${JSON.stringify(testProp)}`}</p>
      <button onClick={getAsyncProp}>{vocabulary.getAsync}</button>
      <button onClick={addProp}>{vocabulary.addProp}</button>
    </div>
  );
};

export default ExampleComponent;
