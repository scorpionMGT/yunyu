import React from 'react'
import { GlobalStyle } from './common/styles'
import { AppMain } from './components'
import { BrowserRouter as Router } from 'react-router-dom'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import store from './store'
import { registerMicroApps, initGlobalState, start } from 'qiankun'

const actions = initGlobalState({
  string: '',
})

actions.onGlobalStateChange((state, prev) => {
  console.log('master global state change event', state, prev)
})

registerMicroApps([
  {
    name: 'app1',
    entry: '//localhost:8001',
    container: '#root',
    activeRule: '/app1',
  },
  {
    name: 'app2',
    entry: '//localhost:8002',
    container: '#root',
    activeRule: '/app2',
  },
])

start()
const App: React.FC = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <ConfigProvider locale={zhCN}>
          <Router>
            <GlobalStyle />
            <AppMain />
          </Router>
        </ConfigProvider>
      </Provider>
    </React.Fragment>
  )
}

export default App
