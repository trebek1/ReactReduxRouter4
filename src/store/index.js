import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  let middlewares = [thunk]
  let enhancers = []

  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares), ...enhancers)
  );

  return store
}

export default configureStore