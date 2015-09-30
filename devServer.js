var path = require('path')
var koa = require('koa')
var webpack = require('webpack')
var config = require('./webpack.config.dev')
var serve = require('koa-static')

var app = koa()
var compiler = webpack(config)

app.use(require('koa-webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('koa-webpack-hot-middleware')(compiler))

app.use(serve(__dirname))

app.listen(3000)
console.log('Listening at http://localhost:3000')
