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

export const BodyHome = styled.div`
  max-height: 100%;
  height 990px;
  width auto;
  background-color: #e8e6e6;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 870px;
`
export const ExGrid = styled.div`
  max-height: 100%;
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
  width: 100%;
  max-width: 2200px;
  background-color: #fafafa;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  color: #6b6b6b;
  border-radius: 7px;
  margin-top: 3px;

  .access {
    background-color: ${Colors.primary};
    border: none;
    margin-left: 10px;
  }

  .visualize {
    background-color: ${Colors.accent};
    border: none;
    margin-left: 40px;
  }

`
export const ButtomStyle = styled.div`
  background-color: ${Colors.primary2};
  .nav-item {
    padding-left:10px
  }

  .login {
    background-color: ${Colors.primary};
    border: none;
  }
  .register {
    background-color: ${Colors.accent}
  }
`