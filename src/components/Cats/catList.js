import React, { PropTypes } from 'react'

const CatList = ({ cats }) => (
  <ul>
    {cats.map(cat =>
      <li key={cat.id}>
        {cat.title}
      </li>
    )}
  </ul>
)

CatList.propTypes = {
  cats: PropTypes.array.isRequired
}

export default CatList
