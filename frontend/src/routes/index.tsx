import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { useAuth } from '../contexts/Auth'
import UrlPaths from '../enums/UrlPaths'
import Home from '../screens/home'
import KnowledgeComponent from '../screens/knowledge'
import AreasComponent from '../screens/areas'
import TestsComponent from '../screens/tests/components/Tests'
import EnterpriseComponent from '../screens/enterprise/components/Enterprise'
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
      <Route exact path={UrlPaths.knowledges} component={KnowledgeComponent} />
      <Route exact path={UrlPaths.areas} component={AreasComponent} />
      <Route exact path={UrlPaths.tests} component={TestsComponent} />
      <Route exact path={UrlPaths.enterprises} component={EnterpriseComponent} />
      { user &&
      <Route exact path={UrlPaths.video} component={Video} />
      }
      <Route path="*" component={NotFound} />
    </Switch>

  )
}

export default Routes
