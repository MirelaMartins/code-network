import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './commons/components/Footer'
import NavBar from './commons/components/Navbar'
import SearchBar from './commons/components/Searchbar'
import { AuthProvider } from './contexts/Auth'
import Routes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <SearchBar/>
        <NavBar/>
        <Routes/>
      </Router>
      <Footer/>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
