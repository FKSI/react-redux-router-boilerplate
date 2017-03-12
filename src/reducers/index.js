import { combineReducers } from 'redux'
import cats from './cats'

const rootReducer = combineReducers({
  // short hand property names
  cats
})

export default rootReducer
