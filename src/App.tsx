import React from 'react'
import { GlobalStyle } from './common/styles'
import { AppMain } from './components'
import { BrowserRouter as Router } from 'react-router-dom'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import store from './store'
import { qiankunFunc } from './qiankun'

qiankunFunc()
const App: React.FC = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <ConfigProvider locale={zhCN}>
          <Router basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
            <GlobalStyle />
            <AppMain />
          </Router>
        </ConfigProvider>
      </Provider>
    </React.Fragment>
  )
}

export default App
