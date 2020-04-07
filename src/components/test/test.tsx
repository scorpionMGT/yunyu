import React from 'react'
import { TestWrapper } from './style'
import { Link } from 'react-router-dom'

class Test extends React.Component {
    render () {
        return (
            <TestWrapper>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/users">Users</Link>
                    </li>
                </ul>
            </TestWrapper>
        )
    }
}

export default Test