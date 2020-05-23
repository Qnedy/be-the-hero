import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LogonPage from './pages/Logon';
import RegisterPage from './pages/Register';
import ProfilePage from './pages/Profile';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LogonPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;