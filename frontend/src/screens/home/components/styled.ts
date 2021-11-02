import styled from 'styled-components'
import {Colors} from '../../../commons/styles/Colors'

export const ImageDiv = styled.div`
  text-align: center;
  height 378px;
  background-image: radial-gradient(circle, white, ${Colors.primary}, ${Colors.primary2});
  img {
    margin-top: 6%;
    margin-left: auto;
    margin-right: auto;
    max-height: 70%;
    width: auto;
  }
`
export const Separator = styled.div`
  text-align: center;
  height 32px;
  width auto;
  background-color: ${Colors.primary};
`
export const BodyHome = styled.div`
  height 80%;
  width auto;
  background-color: #e8e6e6;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
  padding-bottom: 100px;
`
export const CardsBG = styled.div`
  height 400;
  width 1;
  background-color: #ffffff;
  margin-left: 2%

`
export const CardsBG2 = styled.div`
  height 400;
  width 100;
  background-color: #e8e6e;
  img {
    padding: 5px;
  width: 150px;
  }
`