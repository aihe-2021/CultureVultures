import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <>
    <div className="home-bg">
      <div className="container">
        <div className="images">
        <Link to='./Dane'><img className="dane" draggable='true' src="/images/dane.png"></img></Link>
        <Link to='./Danny'><img className="danny" draggable='true' src="/images/danny.png"></img></Link>
        <Link to='./Walid'><img className='walid' draggable='true' src="/images/walid.png"></img></Link>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Home