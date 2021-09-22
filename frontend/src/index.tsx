import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './components/Navbar'

import Routes from './routes'

ReactDOM.render(

  <React.StrictMode>
    <Navbar/>
    <Router>
      <Routes/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
