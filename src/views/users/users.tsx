import React, { Component, Fragment } from 'react'
import { Input, Button, List, Typography } from 'antd'
import store from '../../store/index'
import { testSetUserInfo } from '../../store/action/user'
interface State {
  inputValue: string
  list: string[]
}
class TodoList extends Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = store.getState().todolist
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  async componentDidMount() {
    store.dispatch(testSetUserInfo('test')) // redux-thunk
  }
  handleChange(e: any) {
    const action = {
      type: 'change_input_value',
      value: e.target.value,
    }
    store.dispatch(action)
  }
  handleSubmit(e: any) {
    if (!this.state.inputValue.trim()) {
      this.setState({
        inputValue: '',
      })
      return
    }
    const action = {
      type: 'add_todo_list_item',
      value: this.state.inputValue,
    }
    store.dispatch(action)
    this.setState({
      inputValue: '',
    })
  }
  handleStoreChange() {
    this.setState(store.getState().todolist)
  }
  render() {
    let { inputValue, list } = this.state
    return (
      <Fragment>
        <article>
          <section>
            <Input
              value={inputValue}
              onChange={this.handleChange}
              placeholder="please todo list"
              style={{ width: '300px' }}
            />
            <Button type="primary" onClick={this.handleSubmit} className="submit-button">
              添加
            </Button>
          </section>
          <section>
            <List
              className="todo-list-item"
              bordered
              dataSource={list}
              renderItem={item => (
                <List.Item>
                  <Typography.Text mark>{item}</Typography.Text>
                </List.Item>
              )}
            />
          </section>
        </article>
      </Fragment>
    )
  }
}

export default TodoList
