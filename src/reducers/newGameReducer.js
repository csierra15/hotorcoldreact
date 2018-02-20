const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    guessCount: '0'
};

const newGame = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_GAME':
    return [
      ...state,
      {
        guesses: [],
        feedback: 'Make your guess!',
        answer: action.answer
      }
    ]
    default:
      return state
  }
}

export default newGame
