export default client => ({ dispatch, getState }) => next => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  const { promise, types, ...rest } = action

  if (!promise) {
    return next(action)
  }

  const [REQUEST, SUCCESS, FAILURE] = types

  // eslint-disable-next-line new-cap
  next(REQUEST({ ...rest }))

  const actionPromise = promise(client, { dispatch, getState })

  actionPromise.then(
    result => next(SUCCESS({ ...rest, result })),
    error => next(FAILURE({ ...rest, error }))
  ).catch((error) => {
    next(FAILURE({ ...rest, error }))
  })

  return actionPromise
}
