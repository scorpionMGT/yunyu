require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const proxy = require('http-proxy-middleware');


app.use(express.static(path.join(__dirname, 'build')));

app.use(
  proxy('/api', {
    target: 'https://api.cloudcat.show',
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      console.log('proxyReq path', proxyReq.path)
    },
  })
);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);