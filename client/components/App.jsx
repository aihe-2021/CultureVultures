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
<<<<<<< HEAD
        {/* <Route component={Nav} /> */}
        <Route exact path='/continents/:name' component={Continent} />
        <>
        </>
||||||| merged common ancestors
        {/* <Route component={Nav} /> */}
        <Route exact path='/continents/:name' component={Continent} />
=======
        <Route component={Nav} />
        <Route exact path='/' component={Home} />
        <Route path='/continents/:name' component={Continent} />
>>>>>>> 070c33c0b1f30ec747e413964b5b73b1fc113c2e
      </div>
    </>
  )
}

export default App