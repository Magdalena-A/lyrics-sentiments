import React, {Component} from 'react'
import axios from 'axios'

const initialState = {
  // artist: '',
  // title: '',
  lyrics: '',
  sentimentScore: 0.0,
  sentimentMagnitude: 0.0,
  analysed: false,
  loading: false
}
class AnalyseLyrics extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.reset = this.reset.bind(this)
    this.state = initialState
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit() {
    this.setState({loading: true})
    axios
      .post('/api/song', {
        // artist: this.state.artist,
        // title: this.state.title,
        lyrics: this.state.lyrics
      })
      .then(response => {
        this.setState({
          sentimentScore: response.data.sentimentScore,
          sentimentMagnitude: response.data.sentimentMagnitude,
          analysed: true,
          loading: false
        })
      })
  }

  reset() {
    this.setState(initialState)
  }

  render() {
    return (
      <div className="flex-row">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <div>
              <div className="inputCombo">
                {/* <label>Artist</label>
                <input type="text" name="artist" onChange={this.handleChange} />
              </div>
              <div className="inputCombo">
                <label>Title</label>
                <input type="text" name="title" onChange={this.handleChange} />
              </div> */}
                {/* <div > */}
                <label>Lyrics</label>
                <textarea
                  type="textarea"
                  name="lyrics"
                  value={this.state.lyrics}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="flex-column">
          <div>
            <div id="submitButton">
              <button type="button" onClick={this.handleSubmit}>
                Analyze Lyrics!
              </button>
              <div
                className={this.state.loading ? 'loading' : 'loading hidden'}
              >
                Loading...
              </div>
            </div>
            <div className="score">
              <span>Sentiment score:</span>
              <span className="result">
                {!this.state.analysed ? '' : this.state.sentimentScore}
              </span>
            </div>
            <div className="score">
              <span>Sentiment magnitude:</span>
              <span className="result">
                {!this.state.analysed ? '' : this.state.sentimentMagnitude}
              </span>
            </div>
            <div id="resetButton">
              <button type="button" onClick={this.reset}>
                Reset!
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AnalyseLyrics
