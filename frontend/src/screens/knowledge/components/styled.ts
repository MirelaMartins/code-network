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
  height 850px;
  width auto;
  background-color: #e8e6e6;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 870px;
`
export const ExGrid = styled.div`
  height 800px;
  background-color: #ffffff;
  margin-top: 10px
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 800px;

`
export const InGrid = styled.div`
  height 400px;
  background-color: #e8e6e6;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 700px;
  color: ${Colors.primary};
`

export const ComponentGrid = styled.div`
  height 100px;
  width: 890px;
  background-color: #fafafa;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  font-weight: bold;
  color: black;
  border-radius: 7px;
  margin-top: 3px;

`