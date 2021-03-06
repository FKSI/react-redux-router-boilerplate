import React from 'react'
import { Router, Route } from 'react-router'
import App from './components/App'
import About from './components/About'
import NotFound from './components/NotFound'
import CatsPage from './components/Cats/catPage'

const Routes = props => (
  <Router key={Math.random()} {...props}>
    <Route path="/" component={App} />
    <Route path="/about(?:code)" component={About} />
    <Route path="/cats" component={CatsPage} />
    <Route path="*" component={NotFound} />
  </Router>
)

export default Routes
