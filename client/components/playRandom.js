import React from 'react'
import {playRandomTrio} from '../magenta-random'

const PlayRandom = props => {
  return (
    <div>
      <button type="button" id="play" onClick={playRandomTrio}>
        Play random
      </button>
    </div>
  )
}

export default PlayRandom
