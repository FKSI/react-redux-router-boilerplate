import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { loadCats } from './actions/cats'
import Routes from './routes'
import './index.css'

const rootEl = document.getElementById('root')

const store = configureStore()

store.dispatch(loadCats())

ReactDOM.render(
 <Provider store={store}>
   <Routes history={browserHistory} />
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
