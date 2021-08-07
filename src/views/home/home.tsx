import React from 'react'
import { connect } from 'react-redux'
import { HomeWrapper } from './style'
import Codemirror from 'codemirror'
import ReactMarkdown from 'react-markdown'
import { bindActionCreators, Dispatch } from 'redux'

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
  const input = '# This is a header\n\nAnd this is a paragraph'
  return (
    <HomeWrapper>
      <ReactMarkdown># Hello, *world*!</ReactMarkdown>
    </HomeWrapper>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
