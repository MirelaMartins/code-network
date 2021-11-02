import styled from 'styled-components'
import { Colors } from './Colors'

export const NavBarStyle = styled.div`
  background-color: ${Colors.primary2};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .nav-link {
    color: white !important;
  }
  .nav-link:hover {
    font-weight: bold;
  }
  .active {
    background-color:red !important;
  }
`
