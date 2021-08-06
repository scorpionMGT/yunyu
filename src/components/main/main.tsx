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
    console.log('location.pathname', token, location.pathname, !token && location.pathname !== '/register')
    if (!token && location.pathname !== '/register') history.push('/login')
  }

  render() {
    return (
      <AppMainWrapper>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/about">
            <AppLayout>
              <About />
            </AppLayout>
          </Route>
          <Route exact path="/home">
            <AppLayout>
              <Home type="home" />
            </AppLayout>
          </Route>
          <Route exact path="/users">
            <AppLayout>
              <Users />
            </AppLayout>
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </AppMainWrapper>
    )
  }
}

export default withRouter(AppMain)
