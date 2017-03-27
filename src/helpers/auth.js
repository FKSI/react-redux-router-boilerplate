import queryString from 'query-string'

const myFox = {
  accessTokenUri: '',
  authorizationUri: '',
  clientId: '',
  redirectUri: '',
  responseType: 'code',
  scopes: [],
  state: ''
}

const philipsHue = {
  accessTokenUri: '',
  authorizationUri: '',
  clientId: '',
  redirectUri: '',
  responseType: 'code',
  scopes: [],
  state: ''
}

const myAXA = {
  accessTokenUri: 'https://myaxasandbox.proto.agency/api/oauth2/token',
  authorizationUri: 'https://myaxasandbox.proto.agency/views/alexalogin.html',
  clientId: 'AAAAAAAAAAAAAA',
  redirectUri: 'http://localhost:3000/about',
  responseType: 'code',
  scopes: [],
  state: 'xyz'
}

const getAuthorizationCodeGrantURI = config =>
`${config.authorizationUri}?${queryString.stringify(
  Object.assign({}, {
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
    scope: Array.isArray(config.scopes) ?
      config.scopes.join(' ')
      :
      toString(config.scopes),
    response_type: config.responseType,
    state: config.state
  })
)}`

export default {
  myAXA: Object.assign({}, {
    accessTokenUri: myAXA.accessTokenUri,
    authorizationCodeGrantUri: getAuthorizationCodeGrantURI(myAXA)
  }),
  myFox: Object.assign({}, {
    accessTokenUri: myFox.accessTokenUri,
    authorizationCodeGrantUri: getAuthorizationCodeGrantURI(myFox)
  }),
  philipsHue: Object.assign({}, {
    accessTokenUri: philipsHue.accessTokenUri,
    authorizationCodeGrantUri: getAuthorizationCodeGrantURI(philipsHue)
  })
}
