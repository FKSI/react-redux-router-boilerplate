import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxAsyncConnect } from 'redux-connect'
import { i18nState } from 'redux-i18n'
import cats from './cats'
import getAccessTokenReducer from './getAccessToken'

const rootReducer = combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  i18nState,
  authData: getAccessTokenReducer,
  cats
})

export default rootReducer
