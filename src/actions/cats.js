import * as types from './actionTypes'
import catApi from '../api/cats'

export const loadCats = () => ({
  types: [
    types.loadCatsStarted,
    types.loadCatsSucceeded,
    types.loadCatsFailed
  ],
  promise: (getDispatch, { getState }) => {
    const state = getState()
    console.log('😑😫😫😫😫', state)
    let promise = null
    if (!state.cats) {
      promise = catApi.getAllCats().then((payload) => {
        console.log('🍩🍩🍩🍩🍩', payload)
        return payload
      }).catch((error) => {
        throw (error)
      })
    } else {
      console.log('😫😫😫😫😫')
      promise = Promise.resolve(state.cats)
    }
    return promise
  }
})
