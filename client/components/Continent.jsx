import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import continentData from '../../data/continents'
import userData from '../../data/users'
import Nav from './Nav'
import User from './User'

function Continent (props) {
  const { name, user } = props.match.params
  // console.log(user)
  const userObj = userData[user]
  console.log(userObj)
  const continent = continentData[name]
  const image = continent.image
  const music = continent.music
  const userImage = userObj.image
  return (
    <div>
    
      <audio src={`/music/${music}`} controls />
      {/* <Route component={Nav} /> */}
      <img src={`/images/${image}`}></img>
      <img src={`/images/${userImage}`}></img>
    </div>
  )
}

export default Continent