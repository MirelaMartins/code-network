import React from 'react'
import { useHistory } from 'react-router-dom'

const HomeComponent: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <button onClick={() => history.push('/register')}>Cadastro</button>
      <button onClick={() => history.push('/login')}>Login</button>
    </>
  )
}

export default HomeComponent
