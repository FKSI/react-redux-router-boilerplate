import ClientOAuth2 from 'client-oauth2'

const fooAuth = new ClientOAuth2({
  clientId: 'AAAAAAAAAAAAAA',
  authorizationUri: 'https://myaxasandbox.proto.agency/views/alexalogin.html',
  redirectUri: 'http://localhost:3000/about',
  scopes: [],
  state: 'xyz'
})


export default fooAuth
