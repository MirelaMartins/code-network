
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import UrlPaths from '../enums/UrlPaths'
import Home from '../screens/home'
import Register from '../screens/register'
import Login from '../screens/login'
import RecoverPassword from '../screens/recover-password'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={UrlPaths.home} component={Home} />
      <Route exact path={UrlPaths.register} component={Register} />
      <Route exact path={UrlPaths.login} component={Login} />
      <Route exact path={UrlPaths.recoverPassword} component={RecoverPassword} />
    </Switch>
  )
}

export default Routes
