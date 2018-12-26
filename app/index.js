import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { injectGlobal } from 'styled-components'

import { Routers } from './routers'
import configureStore from './store'


injectGlobal`
  body {
    
  }

  #root {
    position: relative;
    z-index: 1001;
    background-color: #f6f5f3;
    height: 100vh;
  }
`

const store = configureStore()

const rootElement = document.getElementById('root')

const render = (Component) => ReactDOM.render(
  <AppContainer>
    <Router>
      <Provider store={store}>
        <Component />
      </Provider>
    </Router>
  </AppContainer>,
  rootElement,
)

render(Routers)
