import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import continentData from '../../data/continents'
import userData from '../../data/users'
// import Nav from './Nav'
import User from './User'

function Continent (props) {
  const { name, user } = props.match.params
  const userObj = userData[user]
  const continent = continentData[name]
  const image = continent.image
  const music = continent.music
  const userImage = userObj.image
  return (
    <>
    <div>
      <audio src={`/music/${music}`} controls />
    </div>
    <div className="user-container">
      {/* <Route component={Nav} /> */}
      <img className="clothing" src={`/images/${image}`}></img>
      <img className="user" src={`/images/${userImage}`}></img>
    </div>
    <div>
      <Link to='/'>Home</Link>
    </div>
    </>
  )
}

export default Continent