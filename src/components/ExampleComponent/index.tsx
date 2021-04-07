import classNames from 'classnames';

import logo from '@/assets/images/logo.svg';
import useExampleComponent from './useExampleComponent';

const ExampleComponent = () => {
  const { classes, testProp, vocabulary, addProp, getAsyncProp } = useExampleComponent();

  return (
    <div>
      <img src={logo} alt="logo" className={classes.image} />
      <p
        className={classNames(classes.blueText, {
          [classes.pinkText]: testProp.length > 5,
        })}
      >{`testProp: ${JSON.stringify(testProp)}`}</p>
      <button onClick={getAsyncProp}>{vocabulary.getAsync}</button>
      <button onClick={addProp}>{vocabulary.addProp}</button>
    </div>
  );
};

export default ExampleComponent;
