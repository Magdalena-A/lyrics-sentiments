import React from 'react'
import {player, model} from '../magenta-random'

class PlayRandom extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      loading: false,
      active: false
    }
  }

  handleClick(event) {
    if (!this.state.active) {
      this.setState({loading: true, active: true})
      player.resumeContext() // enable audio
      model.sample(1).then(samples => {
        this.setState({loading: false})
        player.start(samples[0], 80)
      })
    } else {
      this.setState({active: false})
      player.stop()
    }
  }

  render() {
    return (
      <div>
        <button
          type="button"
          id="play"
          className={this.state.active ? 'active' : ''}
          onClick={this.handleClick}
        >
          play random ML powered sounds
        </button>
        <div className="loading" hidden={!this.state.loading}>
          Loading...
        </div>
      </div>
    )
  }
}

export default PlayRandom
