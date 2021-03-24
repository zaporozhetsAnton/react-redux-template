import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';

const Navigation: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
