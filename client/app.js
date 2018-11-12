import React, {Component} from 'react'
import {playRandomTrio} from './magenta-random'
import {PlayRandom, AnalyseLyrics} from './components'
//import { generateLyrics } from ///??????!!!///

const App = props => {
  return (
    <div>
      <h1>Lyrics Sentiments</h1>
      <h3>all the feels</h3>
      <AnalyseLyrics />
      <div id="playButton">
        <PlayRandom playRandomTrio={playRandomTrio} />
      </div>
    </div>
  )
}

export default App
