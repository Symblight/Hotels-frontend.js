/* eslint-disable import/no-extraneous-dependencies */
import express from 'express'
import path from 'path'
import cors from 'cors'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpack from 'webpack'
import webpackConf from './webpack.config'


const app = express()
const compiler = webpack(webpackConf)

app.disable('x-powered-by')

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors({ credentials: true, origin: true }))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  publicPath: webpackConf.output.publicPath,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  },
}))
app.use(webpackHotMiddleware(compiler))

// app start up
app.listen(3000, () => console.log('App listening on port 3000!'))
