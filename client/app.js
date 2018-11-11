import React, {Component} from 'react'
import {playRandomTrio} from './magenta-random'
//import { generateLyrics } from ///??????!!!///

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      selectedMood: 'neutral'
    }
  }

  handleChange(event) {
    this.setState({selectedMood: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>BAD MUSICIAN</h1>
        <button type="button" id="play" onClick={playRandomTrio}>
          Play random
        </button>
        <form id="lyrics">
          <div id="mood">
            <label>
              <input
                type="radio"
                value="negative"
                checked={this.state.selectedMood === 'negative'}
                onChange={this.handleChange}
              />
              negative
            </label>
            <label>
              <input
                type="radio"
                value="neutral"
                checked={this.state.selectedMood === 'neutral'}
                onChange={this.handleChange}
              />
              neutral
            </label>
            <label>
              <input
                type="radio"
                value="happy"
                checked={this.state.selectedMood === 'happy'}
                onChange={this.handleChange}
              />
              happy
            </label>
          </div>
          <button type="submit" id="write" onSubmit={this.handleSubmit}>
            Generate lyrics
          </button>
        </form>
      </div>
    )
  }
}

export default App
