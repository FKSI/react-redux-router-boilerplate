import superagent from 'superagent'

export default class ApiClient {
  constructor(req) {
    ['get', 'post', 'put', 'patch', 'del'].forEach((method) => {
      this[method] = (path, { params, data, type } = {}) =>
        new Promise((resolve, reject) => {
          const request = superagent[method](path)

          if (params) {
            request.query(params)
          }

          if (data) {
            request.send(data)
          }
          if (type) {
            request.type(type)
          }

          // eslint-disable-next-line arrow-body-style
          request.end((err, { body } = {}) => {
            return err ? reject(body || err) : resolve(body)
          })
        })
    })
  }
}
