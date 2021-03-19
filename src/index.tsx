import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from '@/store';
import { ExampleComponent } from '@/components';

const App = () => (
  <Provider store={store}>
    <ExampleComponent />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
