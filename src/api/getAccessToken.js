const getAccessToken = (client, authorizationCode) => (
  client.post('https://myaxasandbox.proto.agency/api/oauth2/token', {
    params: {},
    data: {
      code: authorizationCode,
      grant_type: 'authorization_code'
    },
    type: 'form'
  })
  .then(payload => payload)
  .catch(error => console.log(error))
)

export default getAccessToken
