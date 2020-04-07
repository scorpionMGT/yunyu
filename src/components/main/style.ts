import styled from 'styled-components'
import { color, size } from '../../common/styles'

export const AppMainWrapper = styled.div`
    display: flex;
    min-height: calc(100vh - 120px);
    color: #333;
    /* background: ${color.grey}; */
    margin: ${size.small} 0px;
    justify-content: center;
`