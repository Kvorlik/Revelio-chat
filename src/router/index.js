import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Home, Chat} from '../views';

const AppRouter = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/chat' component={Chat}/>
  </Switch>
)

export default AppRouter;
