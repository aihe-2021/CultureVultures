import React from 'react'
import continentData from '../../data/continents'
import { Link } from 'react-router-dom'

function Nav () {
  const continents = Object.keys(continentData)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {continents.map((continent) => {
          return <li key={continent}>
            <Link to={'/continents/' + continent}>{continent}</Link>
          </li>
        })}
        <li><Link to='/'>Home</Link></li>
      </ul>
    </div>
  )
}

export default Nav