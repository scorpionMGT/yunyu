import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.css'
if (process.env.SW_ENV === 'test') {
  navigator.serviceWorker.register('sw.js').then(registration => {
    console.log('注册成功 Registered events at scope: ', registration.scope)
  })
}
ReactDOM.render(<App />, document.getElementById('root'))
