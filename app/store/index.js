import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

/**
 * Configure the store for the DEV mode
 * @param  {Object} initialState The initialState given
 * @return {Object}              The app store
 */
export default function configureStore(initialState) {
  const middleWare = []

  middleWare.push(thunk)

  const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
    collapsed: true,
  })

  middleWare.push(loggerMiddleware)
  const store = createStore(
    rootReducer, initialState,
    compose(applyMiddleware(...middleWare)),
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default // eslint-disable-line global-require

      store.replaceReducer(nextReducer)
    })
  }
  return store
}
