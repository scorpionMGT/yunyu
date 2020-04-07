import styled from 'styled-components'
// import {size} from '../../common/styles'

export const ContactBarWrapper = styled.div`
    position: fixed;
    bottom: 150px;
    right: 30px;
`

export const ContactBarList = styled.div`
    box-sizing: border-box;
    min-height: 200px;
    padding: 25px 0px;
    width: 50px;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.5);
`

export const ContactBarItem = styled.div`
    display: flex;
    justify-content: center;
    height: 50px;
    margin: 10px 0px;
    width: 100%;
`

export const ContactBarItemIcon = styled.img`
    width: 80%;
`