import React from 'react'
import {playRandom} from './magenta-random'

const App = () => {
  return (
    <div>
      <h1>BAD MUSICIAN</h1>
      <button type="button" id="play" onClick={playRandom}>
        Play random
      </button>
    </div>
  )
}

export default App
