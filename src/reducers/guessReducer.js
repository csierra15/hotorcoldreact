import {MAKE_GUESS} from '../actions'

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    guessCount: '0',
    answer: Math.floor(Math.random()*100) + 1
}


const guess = (state=initialState, action) => {
  switch(action.type) {
    case 'MAKE_GUESS':

      let feedback, number

      number = action.guess

      const guess = {
        id: Math.random(),
        number
      }

      let canAdd = true

      state.guesses.map(guess => {
        if (guess.number === number) {

          return Object.assign({}, state, {
            feedback: 'You already guessed that!'
          })
          return canAdd = false
        }
        return canAdd;
      });

      const difference = Math.abs(number - state.answer);
      if (canAdd) {

        if (difference >= 50) {
        feedback = 'ice cold!';
        } else if (difference >= 30) {
          feedback = 'cold.';
        } else if (difference >= 10) {
          feedback = 'warm.';
        } else if (difference >= 1) {
          feedback = 'hot!';
        } else {
          feedback = 'fire!';
        }

        return Object.assign({}, state, {
          feedback,
          guesses: [...state.guesses, number]
        })
      }

    default:
      return state
  }
}

export default guess
