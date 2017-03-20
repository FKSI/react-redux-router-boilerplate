import ClientOAuth2 from 'client-oauth2'

const fooAuth = new ClientOAuth2({
  clientId: 'demoapp',
  authorizationUri: 'http://brentertainment.com/oauth2/lockdin/authorize',
  redirectUri: 'http://localhost:3000/about',
  scopes: [],
  state: 'psesqsfs3saj3ebqeopc8h9ni2'
})


export default fooAuth
