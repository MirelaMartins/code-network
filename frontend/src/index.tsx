import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './commons/components/Footer'
import NavBar from './commons/components/Navbar'
import { AuthProvider } from './contexts/Auth'
import Routes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <NavBar/>
        <Routes/>
      </Router>
      <Footer/>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
