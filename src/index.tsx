import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'

import App from './App'
import { configureStore } from './store'
import { createApplicationServices } from './services'

const services = createApplicationServices("foo")
const store = configureStore(services)

ReactDOM.render(
    <Provider store={store}>
      <>
        <App />
      </>
  </Provider>,
  document.getElementById('root'),
)