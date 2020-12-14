const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  console.log('proxy', app)
  app.use(
    proxy('/api', {
      target: 'https://api.cloudcat.show',
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log('proxyReq path', proxyReq.path)
      },
    })
  )
}
