import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <>
    {/* <div className="header">
    <h2>Dane:</h2>
    <h2>Danny:</h2>
    <h2>Walid:</h2>
    </div> */}
    <div className="images">
      <img draggable='true' class="dane" src="/images/dane.png" ></img>
      <img class="danny" src="/images/danny.png"></img>
      <img class="walid" src="/images/walid.png"></img>
    </div>
    </>
  )
}

export default Home