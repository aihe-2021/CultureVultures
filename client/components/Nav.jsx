import React from 'react'
import continentData from '../../data/continents'
import { Link } from 'react-router-dom'
import userData from '../../data/users'


function Nav (props) {
  const continents = Object.keys(continentData)
  return (
    <div>
      <h2>Pick your Outfit</h2>
      <ul>
        {continents.map((continent) => {
          return <li key={continent}>
            <Link to={'/continents/' + continent + '/' + props.user}>{continent}</Link>
          </li>
        })}
        <li><Link to='/'>Home</Link></li>
      </ul>
    </div>
  )
}

export default Nav