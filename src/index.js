import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import productsReducer from './reducers/productsReducer'
import userReducer from './reducers/userReducer'

import thunk from 'redux-thunk'
import { applyMiddleware, compose, combineReducers, createStore } from 'redux'

import { Provider } from 'react-redux'

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(
  allReducers,
  {
    products: [
      {
        name: 'MacBook Pro'
      }
    ],
    user: 'Manuel Del Toro'
  },
  allStoreEnhancers
)

// const updateUserAction = {
//   type: 'updateUser',
//   payload: {
//     user: 'John'
//   }
// }

// store.dispatch(updateUserAction)

ReactDOM.render(
  <Provider store={store}>
    <App randomProp="randomProp" />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
