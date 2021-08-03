const proxy = require('http-proxy-middleware')
require('dotenv').config({ path: '../.env' })

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: process.env.REACT_APP_BASE_URL,
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log('proxyReq path', process.env.REACT_APP_BASE_URL, proxyReq.path)
      },
    })
  )
}
