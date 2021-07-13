const proxy = require('http-proxy-middleware')
require('dotenv').config({ path: '../.env' })

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: process.env.BASE_URL || 'https://api.cloudcat.show',
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log('proxyReq path', proxyReq.path)
      },
    })
  )
}
