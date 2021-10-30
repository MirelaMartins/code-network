import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { useAuth } from '../contexts/Auth'
import UrlPaths from '../enums/UrlPaths'
import Home from '../screens/home'
import Login from '../screens/login'
import NotFound from '../screens/not-found'
import RecoverPassword from '../screens/recover-password'
import Register from '../screens/register'
import Video from '../screens/video'

const Routes: React.FC = () => {
  const { user } = useAuth()

  return (
    <Switch>
      <Route exact path={UrlPaths.home} component={Home} />
      <Route exact path={UrlPaths.register} component={Register} />
      <Route exact path={UrlPaths.login} component={Login} />
      <Route exact path={UrlPaths.recoverPassword} component={RecoverPassword} />
      { user &&
      <Route exact path={UrlPaths.video} component={Video} />
      }
      <Route path="*" component={NotFound} />
    </Switch>

  )
}

export default Routes
