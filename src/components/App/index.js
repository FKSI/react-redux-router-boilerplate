import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { asyncConnect } from 'redux-connect'
import { setLanguage } from 'redux-i18n'
import classnames from 'classnames'

import logo from './logo.svg'
import './style.css'

const App = ({ className }, context) => (
  <div className={classnames('App', className)}>
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{context.t('welcome')} to React boy</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)

App.contextTypes = {
  t: PropTypes.func.isRequired
}

App.propTypes = {
  className: PropTypes.object,
}

const glue = connect(state => state)

const glueAsync = asyncConnect([{
  promise: ({
    store: { dispatch }, location: { query }
  }) => dispatch(setLanguage(query.lang || 'en')),
}])

export default glueAsync(glue(App))
