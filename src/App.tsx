import React from 'react'
import { GlobalStyle } from './common/styles'
import { AppHeader, AppFooter, AppMain } from './components'
import { BrowserRouter as Router } from 'react-router-dom'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import store from './store'

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
