const { resolve, join } = require('path')
/* eslint-disable import/no-extraneous-dependencies */
const {
  HotModuleReplacementPlugin,
} = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')


const DIST = resolve(__dirname, 'dist')
const SRC = resolve(__dirname, 'app')

const config = {
  context: SRC,
  target: 'web',
  mode: 'development',

  entry: {
    // vendor: ['semantic-ui-react'],
    index: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './index.js',
    ],
  },

  output: {
    path: resolve(__dirname, './public'),
    filename: 'bundle.js',

    publicPath: '/',

    // file name pattern for chunk scripts
    chunkFilename: '[name].[hash].js',
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
    new HtmlWebpackPlugin({
      title: 'Hotels',
      template: '../public/index.html',
      // hash: true
    }),
    new HotModuleReplacementPlugin(),
  ],

  stats: {
    colors: true,
    children: false,
  },

  // devServer: {
  //   contentBase: resolve(__dirname, 'public'),
  //   hot: true,
  //   host: 'localhost',
  //   historyApiFallback: true,
  //   stats: {
  //     all: false,
  //     modules: true,
  //     maxModules: 0,
  //     errors: true,
  //     warnings: true,
  //     moduleTrace: true,
  //     errorDetails: true,
  //   },
  //   port: 3001,
  //   watchOptions: { aggregateTimeout: 300, poll: 1000 },
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  //     'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  //   },
  // },

}

module.exports = config
