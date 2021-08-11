import styled from 'styled-components'

export const DialogWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 500px;
  margin-top: 100px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
`

export const Title = styled.h1`
  text-align: center;
  height: 50px;
`

export const Content = styled.div`
  box-sizing: border-box;
  flex: 1;
  padding: 0 20px;
  overflow: auto;
`

export const Button = styled.span`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top: 1px solid #dddddd;
`
