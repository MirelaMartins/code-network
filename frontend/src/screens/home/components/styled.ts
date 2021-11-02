import styled from 'styled-components'
import {Colors} from '../../../commons/styles/Colors'

export const ImageDiv = styled.div`
  text-align: center;
  height 378px;
  background-image: radial-gradient(circle, white, ${Colors.primary}, ${Colors.primary});
  img {
    margin-top: 6%;
    margin-left: auto;
    margin-right: auto;
    max-height: 70%;
    width: auto;
  }
`
