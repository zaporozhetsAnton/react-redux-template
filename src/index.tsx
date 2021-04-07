import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';

import { store } from '@/store';
import Navigation from '@/navigation';
import theme from '@/styles/theme';
import { useStyles as useGlobalStyles } from '@/styles/globalStyles';

const App = () => {
  useGlobalStyles();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
