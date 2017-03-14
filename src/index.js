import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { ReduxAsyncConnect } from 'redux-connect'
import { Provider } from 'react-redux'
import ApiClient from './helpers/api-client'
import configureStore from './store/configureStore'
import Routes from './routes'
import './index.css'

const rootEl = document.getElementById('root')
const client = new ApiClient()
const store = (configureStore(client))
console.log('STORE', typeof store)

ReactDOM.render(
 <Provider store={store}>
  <Routes
    history={browserHistory}
    render={props =>
    <ReduxAsyncConnect
      {...props}
      helpers={{ client }}
    />}
  />
 </Provider>,
 rootEl
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    ReactDOM.render(
      <NextApp />,
      rootEl
    )
  })
}
