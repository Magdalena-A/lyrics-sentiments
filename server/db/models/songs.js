const Sequelize = require('sequelize')
const db = require('../db')

const Song = db.define('song', {
  artist: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  lyrics: {
    type: Sequelize.TEXT
  },
  sentimentScore: {
    type: Sequelize.FLOAT
  },
  sentimentMagnitude: {
    type: Sequelize.FLOAT
  }
})

module.exports = Song
