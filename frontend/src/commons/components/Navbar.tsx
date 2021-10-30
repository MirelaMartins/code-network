import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

import { NavBarStyle } from '../styles/Navbar'
import UrlPaths from '../../enums/UrlPaths'

const NavBar: React.FC = () => {
  const location = useLocation()
  return (
    <NavBarStyle>
      <Navbar>
        <Nav className="me-auto" defaultActiveKey={location.pathname} >
          <Nav.Link href={UrlPaths.home}>Home</Nav.Link>
          <Nav.Link href={UrlPaths.knowledges}>Conhecimentos</Nav.Link>
          <Nav.Link href={UrlPaths.areas}>Áreas</Nav.Link>
          <Nav.Link href={UrlPaths.tests}>Simulados</Nav.Link>
          <Nav.Link href={UrlPaths.enterprises}>Empresas</Nav.Link>
        </Nav>
      </Navbar>
    </NavBarStyle>
  )
}

export default NavBar
