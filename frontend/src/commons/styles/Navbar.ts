import styled from 'styled-components'
import { Colors } from './Colors'

export const NavBarStyle = styled.div`
  background-color: ${Colors.primary};
  .nav-link {
    color: white !important;
  }
  .nav-link:hover {
    font-weight: bold;
  }
  .active {
    background-color:white !important;
    color: ${Colors.primary} !important;
    border-style: solid;
    border-radius: 5px;
    font-weight: bold;
  }
`
