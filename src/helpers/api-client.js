import superagent from 'superagent'

export default class ApiClient {
  constructor(req) {
    ['get', 'post', 'put', 'patch', 'del'].forEach((method) => {
      this[method] = (path, { params, data } = {}) =>
        new Promise((resolve, reject) => {
          const request = superagent[method](path)

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
