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
const store = configureStore(client)

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

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./components/App').default
    ReactDOM.render(
      <NextApp />,
      rootEl
    )
  })
}
