const MAKE_GUESS = 'MAKE_GUESS'
export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess
})

const NEW_GAME = 'NEW_GAME'
export const newGame = () => ({
  type: NEW_GAME
})
