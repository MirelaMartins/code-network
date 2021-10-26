
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import UrlPaths from '../enums/UrlPaths'
import Video from '../screens/video/video'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={UrlPaths.video} component={Video} />
    </Switch>
  )
}

export default Routes
