
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import UrlPaths from '../enums/UrlPaths'
import Home from '../screens/home/Home'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={UrlPaths.home} component={Home} />
    </Switch>
  )
}

export default Routes
