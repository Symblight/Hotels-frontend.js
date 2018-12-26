const { resolve } = require('path')
/* eslint-disable import/no-extraneous-dependencies */
const {
  HotModuleReplacementPlugin,
} = require('webpack')

const HtmlWebPackPlugin = require('html-webpack-plugin')


const DIST = resolve(__dirname, 'dist')
const SRC = resolve(__dirname, 'app')

const config = {
  context: SRC,
  target: 'web',
  mode: 'development',

  entry: {
    vendor: ['semantic-ui-react'],
    index: ['./index'],
  },

  output: {
    filename: '[name].js',
    path: DIST,
    pathinfo: true,
  },

  resolve: {
    extensions: ['.mjs', '.js'],
    modules: [
      'node_modules',
      SRC,
    ],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.svg$/,
        use: 'react-svg-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      title: 'Hotels',
      template: 'index.html',
    }),
    new HotModuleReplacementPlugin(),
  ],

  stats: {
    colors: true,
    children: false,
  },

  devServer: {
    contentBase: resolve(__dirname, 'public'),
    hot: true,
    host: 'localhost',
    historyApiFallback: true,
    port: 3001,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },

}

module.exports = config
