import React, { PropTypes } from 'react'
import { asyncConnect } from 'redux-connect'
import { connect } from 'react-redux'
import getAccessToken from '../../actions/getAccessToken'
import ClientOAuth2 from '../../helpers/auth'

const About = ({
  authCode,
  authData
}) => (
  <div>
    <h1>
      About me
    </h1>
    <div>
      <a href={ClientOAuth2.code.getUri()}>Authorize Me</a>
    </div>
    <br />
    <table>
      <tbody>
        <tr>
          <td>Authorization Code</td>
          <td>{authCode}</td>
        </tr>
        <tr>
          <td>Access Token</td>
          <td>{authData ? authData.access_token : '' }</td>
        </tr>
      </tbody>
    </table>
  </div>
)

About.propTypes = {
  authCode: PropTypes.string,
  authData: PropTypes.object
}

const glue = connect(
  (state, props) => Object.assign({}, state, {
    authCode: props.location.query.code,
    authData: state.authData
  })
)

const glueAsync = asyncConnect([{
  promise: ({ store: { dispatch }, location: { query } }) =>
    dispatch(getAccessToken(query.code)
  ),
}])

export default glueAsync(glue(About))
