import React from 'react'
import { DialogWrapper, Modal, Button, Title, Content } from './style'

interface Props {
  handleShow: () => void
}

const Dialog = (props: Props) => {
  const handleClick = () => {
    console.log('props', props.handleShow())
  }
  const handleOutClick = (e: any) => {
    console.log('props', e, props.handleShow())
  }
  return (
    <DialogWrapper onClick={(e: any) => handleOutClick(e)}>
      <Modal>
        <Title className="title">Welcome</Title>
        <Content className="content">
          <p>Thank you for visiting our spacecraft!</p>
          <p>Thank you for visiting our spacecraft!</p>
          <p>Thank you for visiting our spacecraft!</p>
          <p>Thank you for visiting our spacecraft!</p>
          <p>Thank you for visiting our spacecraft!</p>
          <p>Thank you for visiting our spacecraft!</p>
          <p>Thank you for visiting our spacecraft!</p>
          <p>Thank you for visiting our spacecraft!</p>
          <p>Thank you for visiting our spacecraft!</p>
          <p>Thank you for visiting our spacecraft!</p>
          <p>Thank you for visiting our spacecraft!</p>
          <p>Thank you for visiting our spacecraft!</p>
          <p>Thank you for visiting our spacecraft!</p>
          <p>Thank you for visiting our spacecraft!</p>
          <p>Thank you for visiting our spacecraft!</p>
          <p>Thank you for visiting our spacecraft!</p>
          <p>Thank you for visiting our spacecraft!</p>
        </Content>
        <Button className="button" onClick={() => handleClick()}>
          知道了
        </Button>
      </Modal>
    </DialogWrapper>
  )
}

export default Dialog
