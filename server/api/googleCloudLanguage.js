const {GOOGLE_APPLICATION_CREDENTIALS, PROJECT_ID} = require('../../secrets')

// Imports the Google Cloud client library
const language = require('@google-cloud/language')

// Instantiates a client
const client = new language.LanguageServiceClient({
  projectId: PROJECT_ID,
  keyFilename: GOOGLE_APPLICATION_CREDENTIALS
})

// Detects the sentiment of the text
const sentimentResult = lyrics =>
  client
    .analyzeSentiment({
      document: {
        content: lyrics,
        type: 'PLAIN_TEXT'
      }
    })
    .then(results => {
      const sentiment = results[0].documentSentiment

      console.log(`Text: ${lyrics}`)
      console.log(`Sentiment score: ${sentiment.score}`)
      console.log(`Sentiment magnitude: ${sentiment.magnitude}`)
      return {
        sentimentScore: sentiment.score,
        sentimentMagnitude: sentiment.magnitude
      }
    })
    .catch(err => {
      console.error('ERROR:', err)
    })

module.exports = sentimentResult
