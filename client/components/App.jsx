import React from 'react'
import { Route } from 'react-router-dom'
import Continent from './Continent'
import Home from './Home'
import Nav from './Nav'



function App () {
  return (
<>
      <div>
        <h1>The Clothing Safari!</h1>
      </div>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/continents/:name' component={Continent} />
      </div>
</>
  )
}

export default App