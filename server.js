const express = require('express')
const path = require('path')
const app = express()
const proxy = require('http-proxy-middleware')
require('dotenv').config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`),
})

console.log('process.env.NODE_ENV', process.env.NODE_ENV, process.env.BASE_URL)
app.use(express.static(path.join(__dirname, 'build')))

app.use(
  proxy('/api', {
    target: process.env.BASE_URL,
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      console.log('proxyReq path', proxyReq.path)
    },
  })
)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(9001)
