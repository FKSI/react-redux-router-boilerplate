import { createAction } from 'redux-act'

export const loadCatsStarted = createAction('LOAD_CATS_STARTED')
export const loadCatsSucceeded = createAction('LOAD_CATS_SUCCEEDED')
export const loadCatsFailed = createAction('LOAD_CATS_FAILED')
