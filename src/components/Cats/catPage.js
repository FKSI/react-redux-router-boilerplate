import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { asyncConnect } from 'redux-connect'
import CatList from './catList'
import { loadCats } from '../../actions/cats'

const CatPage = ({ cats }) => (
  <div>
    <h1>Cats</h1>
    <div>
      <CatList cats={cats} />
    </div>
  </div>
)

CatPage.propTypes = {
  cats: PropTypes.array
}

const glue = connect(
  state => Object.assign({}, state, {
    cats: state.cats
  })
)
const glueAsync = asyncConnect([{
  promise: ({ store: { dispatch } }) => dispatch(loadCats()),
}])

export default glueAsync(glue(CatPage))
