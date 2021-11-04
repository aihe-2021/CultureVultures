import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <>
     <p>Dane:</p><Link to='./Dane'><img src="/images/dane.png"></img></Link>
     <p>Danny:</p><Link to='./Danny'><img src="/images/danny.png"></img></Link>
     <p>Walid:</p><Link to='./Walid'><img src="/images/walid.png"></img></Link>
    </>
  )
}

export default Home