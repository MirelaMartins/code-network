import React from 'react'
import { Nav } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

import { NavBarStyle } from '../styles/Navbar'
import UrlPaths from '../../enums/UrlPaths'

const NavBar: React.FC = () => {
  const location = useLocation()
  return (
    <NavBarStyle>
      <Nav className="me-auto" justify defaultActiveKey={location.pathname} >
        <Nav.Item>
          <Nav.Link href={UrlPaths.home}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={UrlPaths.knowledges}>Conhecimentos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={UrlPaths.areas}>Áreas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={UrlPaths.tests}>Simulados</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={UrlPaths.enterprises}>Empresas</Nav.Link>
        </Nav.Item>
      </Nav>
    </NavBarStyle>
  )
}

export default NavBar
