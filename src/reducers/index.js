import { combineReducers } from 'redux'
import { reducer as reduxAsyncConnect } from 'redux-connect'
import cats from './cats'

const rootReducer = combineReducers({
  // short hand property names
  reduxAsyncConnect,
  cats
})

export default rootReducer
