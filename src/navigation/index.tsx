import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

const Navigation: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
