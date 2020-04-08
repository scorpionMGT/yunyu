import styled from 'styled-components'
import { color } from '../../common/styles'

export const ButtonContaienr = styled.a`
    position:relative;
    cursor:pointer;
    display:inline-block;
    overflow:hidden;
    text-align: center;
    tap-highlight-color:transparent;
    z-index:1;
    width: 200px;
    height: 56px;
    line-height: 56px;
    background: #f57035;
    color: #fff;
    border-radius: 5px;
    & .waves-animation {
        position:absolute;
        border-radius:50%;
        width:25px;
        height:25px;
        opacity:0;
        background:rgba(255,255,255,0.3);
        transition:all 0.7s ease-out;
        transition-property:transform, opacity, -webkit-transform;
        transform:scale(0);
        pointer-events:none
    }
`
