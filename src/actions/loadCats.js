import * as types from './actionTypes'
import getAllCats from '../api/cats'

export default () => ({
  types: [
    types.loadCatsStarted,
    types.loadCatsSucceeded,
    types.loadCatsFailed
  ],
  promise: (client, { getState }) => {
    const state = getState()
    let promise = null

    if (!state.cats) {
      promise = getAllCats(client)
    } else {
      promise = Promise.resolve(state.cats)
    }

    return promise
  }
})
