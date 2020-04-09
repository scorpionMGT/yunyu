const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  console.log('proxy', app)
  app.use(proxy('/api', {
    target: 'http://127.0.0.1:7001',
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      console.log('proxyReq path', proxyReq.path)
    }
   }))
};