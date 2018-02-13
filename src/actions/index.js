const MAKE_GUESS = 'MAKE_GUESS'
export const makeGuess = number => ({
  type: MAKE_GUESS,
  number
})

const GET_FEEDBACK = 'GET_FEEDBACK'
export const giveFeedback = () => ({
  type: GET_FEEDBACK
})

const NEW_GAME = 'NEW_GAME'
export const newGame = () => ({
  type: NEW_GAME
})
