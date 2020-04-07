import styled from 'styled-components'
import { color } from '../../common/styles'
import {
  Link
} from 'react-router-dom'

export const AppHeaderWrapper = styled.div`
  display: flex;
  height: 50px;
  line-height: 50px;
  width: 100%;
  justify-content: space-around;
  background-color: ${color.primary};
  box-shadow: 0 2px 3px 0 ${color.primary};
  z-index: 100;
  color: white;
`

export const AppHeaderLink = styled(Link)`
  display: flex;
  justify-content: space-around;
  color: white;
  text-decoration: none;
`