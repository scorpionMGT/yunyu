import React, { useState } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper } from './style'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import ReactMarkdown from 'react-markdown'
import { bindActionCreators, Dispatch } from 'redux'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

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
  const [mdData, setMddata] = useState<string>('')
  const handleChange = (editor: any, data: any, value: any) => {
    console.log('=====', mdData, value)
    setMddata(value)
  }
  return (
    <HomeWrapper>
      <CodeMirror
        value="# I ♥ react-codemirror2"
        options={{
          mode: 'md',
          theme: 'material',
          lineNumbers: true,
        }}
        onChange={(editor, data, value) => {
          handleChange(editor, data, value)
        }}
      />
      <ReactMarkdown>{mdData}</ReactMarkdown>
    </HomeWrapper>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
