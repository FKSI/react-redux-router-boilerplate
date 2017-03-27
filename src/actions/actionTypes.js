import { createAction } from 'redux-act'

export const loadCatsStarted = createAction('LOAD_CATS_STARTED')
export const loadCatsSucceeded = createAction('LOAD_CATS_SUCCEEDED')
export const loadCatsFailed = createAction('LOAD_CATS_FAILED')

export const getAccessTokenStarted = createAction('GET_ACCESS_TOKEN_STARTED')
export const getAccessTokenSucceeded = createAction('GET_ACCESS_TOKEN_SUCCEEDED')
export const getAccessTokenFailed = createAction('GET_ACCESS_TOKEN_FAILED')
