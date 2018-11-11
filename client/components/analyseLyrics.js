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

  handleSubmit(event) {
    event.preventDefault()
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
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Artist
              <input type="text" name="artist" onChange={this.handleChange} />
            </label>
            <label>
              Title
              <input type="text" name="title" onChange={this.handleChange} />
            </label>
            <label>
              Lyrics
              <textarea
                type="textarea"
                name="lyrics"
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Analyse Lyrics!</button>
          </form>
        </div>
        <div>
          <div>
            Sentiment score:
            {!this.state.analysed ? '' : this.state.sentimentScore}
          </div>
          <div>
            Sentiment magnitude:
            {!this.state.analysed ? '' : this.state.sentimentMagnitude}
          </div>
        </div>
      </div>
    )
  }
}

export default AnalyseLyrics
