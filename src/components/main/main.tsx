import React from 'react'
import { AppMainWrapper } from './style'
import { Home, About, Users, Login } from '../../views'
import { Switch, Route } from 'react-router-dom'

class AppMain extends React.Component {
    render() {
        return (
            <AppMainWrapper>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home type="home" />
                    </Route>
                </Switch>
            </AppMainWrapper>
        )
    }
}

export default AppMain
