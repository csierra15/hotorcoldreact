const initialState = [
  {
    guesses: [],
    feedback: 'Make your guess!',
    guessCount: '0',
    answer: Math.floor(Math.random()*100) + 1
  }
]

const guess = (state=initialState, action) => {
  switch(action.type) {
    case 'MAKE_GUESS':
      let feedback, number
      let canAdd = true;
      const guess = {
        id: Math.random(),
        number
      }

      this.state.guesses.map(guess => {
        if (guess.number === number) {
          return canAdd = false;
          feedback = 'You already guessed that!'
        }
        return canAdd;
      });

      number = parseInt(number, 10);
      const difference = Math.abs(number - this.state.answer);
      if (canAdd) {
        this.state.guesses.push(guess);

        if (difference >= 50) {
        feedback = 'ice cold!';
        } else if (difference >= 30) {
          feedback = 'cold.';
        } else if (difference >= 10) {
          feedback = 'warm.';
        } else if (difference >= 1) {
          feedback = 'hot!';
        } else {
          feedback = 'FIRE! You got it!';
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
