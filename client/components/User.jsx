import React from 'react'
import Nav from './Nav'
import { Route } from 'react-router-dom'
import userData from '../../data/users'

function User (props) {
  const { name } = props.match.params
  const users = userData[name]
  const userImage = users.image
  const quote = users.quote
  return (
    <>
    <Nav user={name}/>
    <h2>Hi I'm {name}! Take me on a clothing Safari around the world!</h2>
    <img src={`/images/${userImage}`}></img>
    <img src={`/images/${quote}`}></img>
    

    </>
  )
}


export default User