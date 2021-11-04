import React from 'react'
import { Route } from 'react-router-dom'
import Continent from './Continent'


function App () {
  return (
    <>
      <div>
        <h1>The Clothing Safari!</h1>
      </div>
      <div>
        <Route path='/continents/' component={Continent} />
      </div>
    </>
  )
}

export default App