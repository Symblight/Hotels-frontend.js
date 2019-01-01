import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import App from './Root'

import configureStore from './store'


injectGlobal`
  body {
    
  }
  a {
    color: #3498db;
  }
  #root {
    position: relative;
    z-index: 1001;
    background-color: #fff;
    height: 100vh;
  }
`

const store = configureStore()

const rootElement = document.getElementById('root')

const render = (Component) => ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Component />
    </Router>
  </Provider>,
  rootElement,
)

render(App)
