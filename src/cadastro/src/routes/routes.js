import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';

const Routes = () => {return (
  <Switch>
  <Route exact path="/" component={Login} />
  <Route path="/cadastro" component={Cadastro} />
  </Switch>
  );
  };
  
  export default Routes;
