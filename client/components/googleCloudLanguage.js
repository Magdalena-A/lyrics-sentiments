const GOOGLE_APPLICATION_CREDENTIALS = require('../../secrets')
// Imports the Google Cloud client library
const language = require('@google-cloud/language')

// Instantiates a client
const client = new language.LanguageServiceClient({
  projectId: 'gh-stackathon',
  keyFilename: GOOGLE_APPLICATION_CREDENTIALS
})

// The text to analyze
const text = `Some people say that rappers don’t have feelings
We have feelings (We have feelings)
Some people say that we are not rappers (We’re rappers)
That hurts our feelings (Hurts our feelings when you say we’re not rappers)
Some people say that rappers are invincible
We’re vincible (We’re vincible)
What you are about to hear are true stories
(Real experiences)
Autobiographical raps
Things that happened to us, all true
Bring the rhyme

I make a meal for my friends,
Try to make it delicious,
Try to keep it nutritious,
Create wonderful dishes
Not one of them thinks about the way I feel
Nobody compliments the meal

I got hurt feelings, I got hurt feelings
I feel like a prize asshole
No one even mentions my casserole
I got hurt feelings, I got hurt feelings
You coulda said something nice about my profiteroles

Here’s a little story to bring a tear to your eye,
I was shopping for a wetsuit to scuba dive,
But every suit I tried is too big around the thighs,
And the assistant suggested I try a ladies’ size

I got hurt feelings, I got hurt feelings
I’m not gonna wear a ladies’ wetsuit I’m a man
I got hurt feelings, I got hurt feelings
Get me a small man’s wetsuit, please

It’s my birthday, 2003
Waitin’ for a call from my family

They forgot about me

I got hurt feelings, I got hurt feelings
The day after my birthday is not my birthday, Mum
I call my friends and say, “Let’s go into town,”
But they’re all too busy to go into town
So I go by myself, I go into town
Then I see all my friends, they’re all in town

I got hurt feelings, I got hurt feelings
They’re all lined up to watch that movie “Maid in Manhattan”
Have you even been told that your ass is too big?
Have you ever been asked if your hair is a wig?
Have you ever been told you’re mediocre in bed?
Have you ever been told you’ve got a weird-shaped head?
Has your family ever forgotten you and driven away?
Once again, they forgot about J
Were you ever called “homo” ‘cuz at school you took drama?
Have you ever been told that you look like a llama?

Tears of a rapper
(Don’t want to make a rapper cry then watch what you say)
I’m crying tears of a rapper
(Pouring like the bullets of my AK)
Goldplated tears of a rapper
(These are the tears of a rapper now)
These are diamond tears of a rapper
(These are the bulletproof 24 carat gold tears – of a rapper)`
// 'i heard that youre settled down that you found a girl and youre married now i heard that your dreams came true guess she gave you things i didnt give to youold friend why are you so shy aint like you to hold back or hide from the lighti hate to turn up out of the blue uninvited but i couldnt stay away i couldnt fight it i had hoped youd see my face and that youd be reminded that for me it isnt over    meaning  byjamesg   editor    the songs cowriter dan wilson talked about writing the track with adele in an exclusive metrolyrics video interview    see all   never mind ill find someone like you i wish nothing but the best for you two dont forget me i beg i remember you said sometimes it lasts in love but sometimes it hurts instead sometimes it lasts in love but sometimes it hurts insteadyou know how the time flies only yesterday was the time of our lives we were born and raised in a summer haze bound by the surprise of our glory daysi hate to turn up out of the blue uninvited but i couldnt stay away i couldnt fight it i had hoped youd see my face and that youd be reminded that for me it isnt overnever mind ill find someone like you i wish nothing but the best for you two dont forget me i beg i remember you said sometimes it lasts in love but sometimes it hurts instead yeahnothing compares no worries or cares regrets and mistakes theyre memories made who would have known how bittersweet this would tastenever mind ill find someone like you i wish nothing but the best for you dont forget me i beg i remember you said sometimes it lasts in love but sometimes it hurts insteadnever mind ill find someone like you i wish nothing but the best for you two dont forget me i beg i remember you said sometimes it lasts in love but sometimes it hurts instead sometimes it lasts in love but sometimes it hurts instead'

const document = {
  content: text,
  type: 'PLAIN_TEXT'
}

// Detects the sentiment of the text
client
  .analyzeSentiment({document: document})
  .then(results => {
    const sentiment = results[0].documentSentiment

    console.log(`Text: ${text.slice(0, 100)}...`)
    console.log(`Sentiment score: ${sentiment.score}`)
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`)
  })
  .catch(err => {
    console.error('ERROR:', err)
  })
