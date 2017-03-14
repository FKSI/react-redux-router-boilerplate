import superagent from 'superagent'

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? `/${path}` : path
  return adjustedPath
}

export default class ApiClient {
  constructor(req) {
    ['get', 'post', 'put', 'patch', 'del'].forEach((method) => {
      this[method] = (path, { params, data } = {}) =>
        new Promise((resolve, reject) => {
          // eslint-disable-next-line no-console
          const request = superagent[method](formatUrl(path))

          if (params) {
            request.query(params)
          }

          if (data) {
            request.send(data)
          }

          // eslint-disable-next-line arrow-body-style
          request.end((err, { body } = {}) => {
            return err ? reject(body || err) : resolve(body)
          })
        })
    })
  }
}
