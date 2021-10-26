import React from 'react'

import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
import { useAuth } from '../contexts/Auth'

const Routes: React.FC = () => {
  const { user } = useAuth()

  return user ? < PrivateRoutes /> : < PublicRoutes/>
}

export default Routes
