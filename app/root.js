import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import App from './App'


class Root extends Component {
  render() {
    return (
      <App />
    )
  }
}

export default hot(module)(Root)
