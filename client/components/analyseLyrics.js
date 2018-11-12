import React, {Component} from 'react'
import axios from 'axios'

class AnalyseLyrics extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      artist: '',
      title: '',
      lyrics: '',
      sentimentScore: 0.0,
      sentimentMagnitude: 0.0,
      analysed: false
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit() {
    axios
      .post('/api/song', {
        artist: this.state.artist,
        title: this.state.title,
        lyrics: this.state.lyrics
      })
      .then(response => {
        this.setState({
          sentimentScore: response.data.sentimentScore,
          sentimentMagnitude: response.data.sentimentMagnitude,
          analysed: true
        })
      })
  }

  render() {
    return (
      <div className="flex-row">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <div>
              <div className="inputCombo">
                <label>Artist</label>
                <input type="text" name="artist" onChange={this.handleChange} />
              </div>
              <div className="inputCombo">
                <label>Title</label>
                <input type="text" name="title" onChange={this.handleChange} />
              </div>
              <div className="inputCombo">
                <label>Lyrics</label>
                <textarea
                  type="textarea"
                  name="lyrics"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="column">
          <div id="submitButton">
            <button type="button" onClick={this.handleSubmit}>
              Analyze Lyrics!
            </button>
          </div>
          <div className="score">
            Sentiment score:
            {!this.state.analysed ? '' : this.state.sentimentScore}
          </div>
          <div className="score">
            Sentiment magnitude:
            {!this.state.analysed ? '' : this.state.sentimentMagnitude}
          </div>
        </div>
      </div>
    )
  }
}

export default AnalyseLyrics
