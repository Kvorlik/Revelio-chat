import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Welcome, Chat} from '../components';

const AppRouter = () => (
  <Switch>
    <Route exact path='/' component={Welcome}/>
    <Route path='/chat' component={Chat}/>
  </Switch>
)

export default AppRouter;
