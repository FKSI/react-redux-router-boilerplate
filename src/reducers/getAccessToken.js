import { createReducer } from 'redux-act'
import {
  getAccessTokenStarted,
  getAccessTokenSucceeded,
  getAccessTokenFailed
} from '../actions/actionTypes'

const mockATRes = {
  access_token: '2YotnFZFEjr1zCsicMWpAA',
  token_type: 'Bearer',
  expires_in: 3600,
  refresh_token: 'tGzv3JOkF0XG5Qx2TlKWIA'
}

const fpp = createReducer({
  [getAccessTokenStarted]: state => state,
  // TODO Get rid of the mock dep
  [getAccessTokenSucceeded]: (state, { result }) => mockATRes,
  [getAccessTokenFailed]: state => state,
}, null)

export default fpp
