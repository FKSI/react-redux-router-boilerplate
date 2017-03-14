import { createReducer } from 'redux-act'
import {
  loadCatsStarted,
  loadCatsSucceeded,
  loadCatsFailed
} from '../actions/actionTypes'

const catReducer = createReducer({
  [loadCatsStarted]: state => state,
  [loadCatsSucceeded]: (state, { result }) => result,
  [loadCatsFailed]: state => state,
}, null)

export default catReducer
