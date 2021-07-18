import React from 'react'
import { AppMainWrapper } from './style'
import { Home, About, Users, Login } from '../../views'
import { Switch, Route } from 'react-router-dom'
import { AppLayout } from '../../layout'

class AppMain extends React.Component {
  render() {
    return (
      <AppMainWrapper>
        <Switch>
          <Route path="/login">
            <Login />
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

export default AppMain
