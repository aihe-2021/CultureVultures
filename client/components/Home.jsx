import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <>
    {/* <iframe src="/music/silence.mp3" allow="autoplay" id="audio" style="display: none"></iframe> */}
    <audio src="music/Homepage.mp3" controls></audio>
     <p>Dane:</p><Link to='./Dane'><img src="/images/dane.png"></img></Link>
     <p>Danny:</p><Link to='./Danny'><img src="/images/danny.png"></img></Link>
     <p>Walid:</p><Link to='./Walid'><img src="/images/walid.png"></img></Link>
    </>
  )
}

export default Home