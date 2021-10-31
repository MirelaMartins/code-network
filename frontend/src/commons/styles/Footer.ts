import styled from 'styled-components'
import { Colors } from './Colors'

export const FooterStyle = styled.div`
  background-color: ${Colors.primary};
  position: fixed;
  bottom: 0;
  width: 100%;
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
