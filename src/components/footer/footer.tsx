import React, { useState, useEffect } from 'react'
import { AppFooterWrapper } from './style'

const AppFooter = () => {
    const [count, setCount] = useState(0)
    const handleSetCount = (count: number) => {
        setCount(count + 1)
    }
    // 相当于 componentDidMount 和 componentDidUpdate
    useEffect(() => {
        document.title = `useEffect show ${count}`
    })
    return (
        <AppFooterWrapper>
            <p style={{ color: 'white' }}>You clicked {count} times</p>
            <button onClick={() => handleSetCount(count)}>Click me</button>
        </AppFooterWrapper>
    )
}

export default AppFooter
