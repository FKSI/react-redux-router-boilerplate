import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import apiMiddleware from './middleware/api'
import rootReducer from '../reducers/'

export default (client, initialState) => {
  const middleware = [
    thunk,
    apiMiddleware(client)
  ]
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  )
}
