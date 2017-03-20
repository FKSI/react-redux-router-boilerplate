const getAccessToken = (client, authorizationCode) => (
  client.get(`http://brentertainment.com/oauth2/client/request_token/authorization_code?code=${authorizationCode}`)
  .then(payload => payload)
  .catch(error => console.log(error))
)

export default getAccessToken
