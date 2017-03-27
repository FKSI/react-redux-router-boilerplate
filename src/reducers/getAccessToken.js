import { createReducer } from 'redux-act'
import {
  getAccessTokenStarted,
  getAccessTokenSucceeded,
  getAccessTokenFailed
} from '../actions/actionTypes'

const fpp = createReducer({
  [getAccessTokenStarted]: state => state,
  [getAccessTokenSucceeded]: (state, { result }) => result,
  [getAccessTokenFailed]: state => state,
}, null)

export default fpp
