import { browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { ReduxAsyncConnect } from 'redux-connect'
import { syncHistoryWithStore } from 'react-router-redux'
import I18n from 'redux-i18n'
import React from 'react'
import ReactDOM from 'react-dom'
import { translations } from './translations'
import './index.css'
import ApiClient from './helpers/api-client'
import configureStore from './store/configureStore'
import Routes from './routes'

const rootEl = document.getElementById('root')
const client = new ApiClient()
const store = configureStore(client)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
 <Provider store={store}>
   <I18n translations={translations}>
     <Routes
       history={history}
       render={props =>
       <ReduxAsyncConnect
         {...props}
         helpers={{ client }}
       />}
     />
   </I18n>
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
