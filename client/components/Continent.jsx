import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import continentData from '../../data/continents'
import Nav from './Nav'

function Continent (props) {
  const { name } = props.match.params
  const continent = continentData[name]
  const image = continent.image
  const music = continent.music
  return (
    <div>
      <Route component={Nav} />
      <audio src={`/music/${music}`} controls />
      <img src={`/images/${image}`}></img>
    </div>
  )
}

export default Continent