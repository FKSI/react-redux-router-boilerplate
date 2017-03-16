import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxAsyncConnect } from 'redux-connect'
import cats from './cats'

const rootReducer = combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  cats
})

export default rootReducer
