import { Switch, Route } from 'react-router-dom'

const AppRouter = () => {
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/chat' component={Chat}/>
  </Switch>
}

export default AppRouter;
