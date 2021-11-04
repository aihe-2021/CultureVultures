import React from 'react'
import { Link } from 'react-router-dom'
import continentData from '../../data/continents'

function Continent (props) {
  const { name } = props.match.params
  const continent = continentData[name]
  const image = continent.image
  const music = continent.music
  return (
    <div>
      <audio src={`/music/${music}`} controls />
    </div>
  )
}

export default Continent