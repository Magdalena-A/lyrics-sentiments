import React from 'react'
import {playRandomTrio} from './magenta-random'
import {PlayRandom, AnalyseLyrics} from './components'
//import { generateLyrics } from ///??????!!!///

const App = props => {
  return (
    <div className="flex-column">
      <div>
        <div className="header">
          <h1>Lyrics Sentiments</h1>
          <h3>all the feels</h3>
        </div>
        <div>
          <AnalyseLyrics />
        </div>
      </div>
      <div id="playButton">
        <PlayRandom playRandomTrio={playRandomTrio} />
      </div>
    </div>
  )
}

export default App
