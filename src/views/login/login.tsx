import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import { login } from '../../api/login'
import { LoginWrapper } from './style'
interface Props extends FormComponentProps {
  [propName: string]: any
}
class LoginForm extends React.PureComponent<Props> {
  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        let { data } = await login(values)
        console.log('data', data)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <LoginWrapper>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </LoginWrapper>
    )
  }
}

const Login = Form.create({ name: 'normal_login' })(LoginForm)

export default Login
