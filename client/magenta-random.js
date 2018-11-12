import * as mm from '@magenta/music'

// Instantiate model by loading desired config.
const model = new mm.MusicVAE(
  'https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/trio_4bar'
)
const player = new mm.Player()

export {player, model}
