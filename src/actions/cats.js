import * as types from './actionTypes'
import catApi from '../api/cats'

export const loadCatsSuccess = cats => (
  { type: types.LOAD_CATS_SUCCESS, cats }
)

export const loadCats = () => (
  dispatch => (
    catApi.getAllCats().then((cats) => {
      dispatch(loadCatsSuccess(cats))
    }).catch((error) => {
      throw (error)
    })
  )
)
