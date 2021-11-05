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
<<<<<<< HEAD
    <div className="container-user">
      <Nav user={name}/>
      <div className="user-text">
        <h2>Hi I'm {name}! Take me on a clothing Safari around the world!</h2>
        <p>{quote}</p>
      </div>
      <div className="user-image">
        <img src={`/images/${userImage}`}></img>
      </div>
    </div>
||||||| merged common ancestors
    <Nav user={name}/>
    <h2>Hi I'm {name}! Take me on a clothing Safari around the world!</h2>
    <p>{quote}</p>
    <img src={`/images/${userImage}`}></img>

=======
    <Nav user={name}/>
    <h2>Hi I'm {name}! Take me on a clothing Safari around the world!</h2>
    <img src={`/images/${userImage}`}></img>
    <img src={`/images/${quote}`}></img>
    

>>>>>>> main
    </>
  )
}


export default User