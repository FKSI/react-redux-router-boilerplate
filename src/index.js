import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { ReduxAsyncConnect } from 'redux-connect'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Routes from './routes'
import './index.css'

const rootEl = document.getElementById('root')

const store = configureStore()

ReactDOM.render(
 <Provider store={store}>
  <Routes
    history={browserHistory}
    render={props => <ReduxAsyncConnect {...props}/>}
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
