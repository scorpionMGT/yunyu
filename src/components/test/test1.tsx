import React from 'react'
import { TestWrapper } from './style'
import { Switch, Route } from 'react-router-dom'
import { Home, About, Users } from '../../views'

class Test1 extends React.Component {
    render() {
        return (
            <TestWrapper>
                <Switch>
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
            </TestWrapper>
        )
    }
}

export default Test1
