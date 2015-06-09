var express = require('express')
var app = express()
var httpProxy = require('http-proxy')

var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.local.config')


/************************************************************
 *
 * Express routes for:
 *   - index.html
 *
 *   Sample endpoints to demo async data fetching:
 *     - POST /landing
 *     - POST /home
 *
 ************************************************************/

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/local/index.html')
})

/************************************************************
 *
 * Proxy /api routes to your api server
 *
 ************************************************************/

var proxy = httpProxy.createProxyServer({})

app.post('/api/*', function(req, res) {
  req.url = req.url.replace('/api', '')
  proxy.web(req, res, {target: 'http://localhost:3000'})
})

app.put('/api/*', function(req, res) {
  req.url = req.url.replace('/api', '')
  proxy.web(req, res, {target: 'http://localhost:3000'})
})

/*************************************************************
 *
 * Webpack Dev Server
 *
 * See: http://webpack.github.io/docs/webpack-dev-server.html
 *
 *************************************************************/

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  historyApiFallback: true
}).listen(9090, 'localhost', function (err, result) {
  if (err) {
    console.log(err)
  }
})

/******************
 *
 * Express server
 *
 *****************/

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Essential React listening at http://%s:%s', host, port)
})
