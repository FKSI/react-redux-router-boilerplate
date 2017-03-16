import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const About = ({ code }) => (
  <div>
    <h1>
      About me {code}
    </h1>
  </div>
)

About.propTypes = {
  code: PropTypes.string
}

const glue = connect(
  (state, props) => Object.assign({}, state, {
    code: props.location.query.code
  })
)

export default glue(About)
