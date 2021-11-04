import React, { useState } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper, Content, Button } from './style'
import { bindActionCreators, Dispatch } from 'redux'
import Modal from '@/components/dialog'

const mapStateToProps = (state: any, ownProps: Props) => {
  return {
    state: state,
    ownProps: ownProps,
  }
}
const deleteList = () => {
  return {
    type: 'DELETE_LIST',
    content: 'deleteList',
  }
}
const addList = () => {
  return {
    type: 'ADD_LIST',
    content: 'addList',
  }
}
// const mapDispatchToProps = { addList, deleteList }

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      deleteList,
      addList,
    },
    dispatch
  )

interface Props {
  type: string
  [propname: string]: any
}
const Home = () => {
  const [show, setShow] = useState<boolean>(false)
  const handleShow = () => {
    const body = document.getElementsByTagName('body')[0]
    setShow(!show)
    if (show) {
      body.style.overflow = 'auto'
    } else {
      body.style.overflow = 'hidden'
    }
  }
  return (
    <HomeWrapper>
      <Content>
        <p>
          在最初开开发package的时候，还属于一种刀耕火种的阶段。没有什么自动化的工具。发布package的时候，都是手动修改版本号。如果packages数量不多还可以接受。但是当数量逐渐增多的时候，且这些packages之间还有依赖关系的时候，对开发人员来说，就很痛苦了。工作不仅繁琐，而且需要用掉不少时间。
          举个例子，如果你要维护两个package。分别为module-1,module-2。 下面是这两个package的依赖关系。
        </p>
      </Content>
      <Button className="button" onClick={() => handleShow()}>
        弹窗
      </Button>
      {show && <Modal handleShow={handleShow}></Modal>}
    </HomeWrapper>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
