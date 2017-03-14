import * as types from './actionTypes'
import getAllCats from '../api/cats'

export const loadCats = () => ({
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
