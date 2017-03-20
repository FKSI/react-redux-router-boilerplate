import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxAsyncConnect } from 'redux-connect'
import cats from './cats'
import getAccessTokenReducer from './getAccessToken'

const rootReducer = combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  authData: getAccessTokenReducer,
  cats
})

export default rootReducer
