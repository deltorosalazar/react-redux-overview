import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { combineReducers, createStore } from 'redux'

function productsReducer(state = [], action) {
  return state
}

function userReducer(state = '', action) {
  switch (action.type) {
    case 'updateUser':
      return action.payload
  }

  return state
}

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

const store = createStore(
  allReducers,
  {
    products: [{ name: 'MacBook Pro' }],
    user: 'Manuel Del Toro'
  },
  window.devToolsExtension && window.devToolsExtension()
)

const updateUserAction = {
  type: 'updateUser',
  payload: {
    user: 'John'
  }
}

store.dispatch(updateUserAction)

console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
