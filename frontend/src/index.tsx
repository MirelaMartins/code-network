import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import NavbarD from './commons/components/Navbar'
import { AuthProvider } from './contexts/Auth'
import Routes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
      <NavbarD/>
        <Routes/>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
