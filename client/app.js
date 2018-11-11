import React from 'react'
import {playRandomTrio} from './magenta-random'

const App = () => {
  return (
    <div>
      <h1>BAD MUSICIAN</h1>
      <button type="button" id="play" onClick={playRandomTrio}>
        Play random
      </button>
    </div>
  )
}

export default App
