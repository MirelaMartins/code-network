import React from 'react'
import { NavBarStyle } from '../styles/Navbar'
import UrlPaths from '../../enums/UrlPaths'
import { Nav, Navbar } from 'react-bootstrap'

const NavbarD: React.FC = () => {
  return (
    <NavBarStyle>
      <Navbar >
        <Nav className="me-auto">
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

export default NavbarD
