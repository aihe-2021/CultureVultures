import React from 'react'
import { Route } from 'react-router-dom'
import Continent from './Continent'
// import Nav from './Nav'



function App () {
  return (
<>
      <div>
        <h1>The Clothing Safari!</h1>
      </div>
      <div>
        {/* <Route component={Nav} /> */}
        <Route exact path='/continents/:name' component={Continent} />
      </div>
    </>
  )
}

export default App