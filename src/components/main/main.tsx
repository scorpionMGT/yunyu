import React from 'react'
import { AppMainWrapper } from './style'
import { Home, About, Users, Login, Register } from '@/views'
import { Switch, Route } from 'react-router-dom'
import { AppLayout } from '@/layout'
import Cookie from 'js-cookie'
import { RouteComponentProps, withRouter } from 'react-router-dom'

class AppMain extends React.Component<RouteComponentProps> {
  componentDidMount() {
    const token = Cookie.get('token') || ''
    const { location, history } = this.props
    if (!token && location.pathname !== '/register') history.push('/login')
  }

  render() {
    return (
      <AppMainWrapper>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/about">
            <AppLayout>
              <About />
            </AppLayout>
          </Route>
          <Route path="/home">
            <AppLayout>
              <Home type="home" />
            </AppLayout>
          </Route>
          <Route path="/users">
            <AppLayout>
              <Users />
            </AppLayout>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </AppMainWrapper>
    )
  }
}

export default withRouter(AppMain)
