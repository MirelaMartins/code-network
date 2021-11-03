import styled from 'styled-components'
import { Colors } from './Colors'

export const SearchBarStyle = styled.div`
  background-color: ${Colors.primary2};
  .nav-item {
    padding-left:10px
  }

  .login {
    background-color: ${Colors.primary};
    border: none;
  }
  .register {
    background-color: ${Colors.accent};
    border: none;
  }
`
