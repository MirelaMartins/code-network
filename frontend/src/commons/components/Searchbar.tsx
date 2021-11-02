import React from 'react'
import { Button, Nav, Navbar, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { SearchBarStyle } from '../styles/SearchBar'
import { useAuth } from '../../contexts/Auth'

const SearchBar: React.FC = () => {
  const { user, Logout } = useAuth()
  const history = useHistory()
  return (
    <SearchBarStyle>
      <Nav className="justify-content-end" >
        <Navbar.Brand>
          <Image fluid
          src={require('../images/CODE_NETWORK_logo.png')}
          width='25%'
          height= 'auto'
          />
        </Navbar.Brand>
        {user
          ? <Navbar >
            <Nav.Item>
              <Button onClick={() => Logout()}>{user.name}</Button>
            </Nav.Item>
          </Navbar>
          : <Navbar >
            <Nav.Item>
              <Button type="button" className='register' onClick={() => history.push('/register')}>Cadastre-se</Button>
            </Nav.Item>
            <Nav.Item>
              <Button type="button" className='login' onClick={() => history.push('/login')}>Acessar</Button>
            </Nav.Item>
          </Navbar>
        }
      </Nav>
    </SearchBarStyle>
  )
}

export default SearchBar
