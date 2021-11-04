import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Continent from './Continent'
import Home from './Home'
import Nav from './Nav'
import User from './User'

function App () {
  return (
<>
      <div>
        <h1>The Clothing Safari!</h1>
      </div>
      <div>
        <Switch>
          <Route path='/continents/:name/:user' component={Continent} />
          <Route path='/continents/:name' component={Continent} />
          <Route path='/:name' component={User} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
</>
  )
}

export default App