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
    <div className="container-user">
      <Nav user={name}/>
      <div className="user-text">
        <h2>Hi I'm {name}! Take me on a clothing Safari around the world!</h2>
      </div>
      <div className="user-image">
        <img src={`/images/${userImage}`}></img>
        <img src={`/images/${quote}`}></img>
      </div>
    </div>
    
    
    

    </>
  )
}


export default User