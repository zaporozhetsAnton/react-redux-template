import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from '@/store';
import Navigation from '@/navigation';

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
