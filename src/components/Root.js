import React from 'react'
import { Provider } from 'react-redux'
import App from './app'
import createStore from '../store'

const Root = () => (
  <Provider store={createStore()}>
    <App />
  </Provider>
)

export default Root