
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import UrlPaths from '../enums/UrlPaths'
import Home from '../screens/home/Home'
import Register from '../screens/home/Register'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={UrlPaths.home} component={Home} />
      <Route exact path={UrlPaths.register} component={Register} />
    </Switch>
  )
}

export default Routes
