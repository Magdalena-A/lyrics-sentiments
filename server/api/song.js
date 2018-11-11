const router = require('express').Router()
const Song = require('../db/models/songs')
const sentimentResult = require('./googleCloudLanguage')

module.exports = router

router.post('/', async (req, res, next) => {
  const songFromDB = await Song.findAll({where: {title: req.body.title}})
  if (songFromDB.length > 0) {
    res.json(songFromDB)
  }

  const sentiment = await sentimentResult(req.body.lyrics)
  console.log(sentiment)
  const newSong = await Song.create({
    ...req.body,
    ...sentiment
  })
  res.json(newSong)
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
