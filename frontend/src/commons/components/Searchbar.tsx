import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/Auth'

const SearchBar: React.FC = () => {
  const { user, Logout } = useAuth()
  const location = useLocation()
  return (
    <Nav >
      {user ? <Button onClick={() => Logout()}>{user.name}</Button>
        : <>
          <Navbar className="justify-content-end">
            <Nav.Item>
              <Button>Cadastre-se</Button>
            </Nav.Item>

            <Nav.Item>
              <Button>Acessar</Button>
            </Nav.Item>
          </Navbar>
        </>
      }

    </Nav>
  )
}

export default SearchBar
