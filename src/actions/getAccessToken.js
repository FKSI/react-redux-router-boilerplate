import * as types from './actionTypes'
import getAccessToken from '../api/getAccessToken'

export default authorizationCode => ({
  types: [
    types.getAccessTokenStarted,
    types.getAccessTokenSucceeded,
    types.getAccessTokenFailed
  ],
  promise: (client, { getState }) => {
    const state = getState()
    let promise = null

    if (!state.authData) {
      promise = getAccessToken(client, authorizationCode)
    } else {
      promise = Promise.resolve(state.authData)
    }

    return promise
  }
})
