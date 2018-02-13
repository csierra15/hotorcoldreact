const initialState = []

const guess = (state=initialState, action) => {
  switch(action.type) {
    case 'MAKE_GUESS':
      return {}

    default:
      return: state
  }
}

export default guess

this.state = {
  guesses: [],
  feedback: 'Make your guess!',
  guessCount: '0',
  answer: Math.floor(Math.random()*100) + 1
}

this.makeGuess = this.makeGuess.bind(this);
}

restartGame() {
this.setState({
  guesses: [],
  feedback: 'Make your guess!',
  answer: Math.floor(Math.random() * 100) + 1
});
}

makeGuess(number) {
number = parseInt(number, 10);

const guess = {
  id: Math.random(),
  number
}

let canAdd = true;

this.state.guesses.map(guess => {
  console.log(guess.number, number);
  if (guess.number === number) {
    console.log('something');
    return canAdd = false;
  }
  return canAdd;
});

if (canAdd) {
  this.state.guesses.push(guess);

  const difference = Math.abs(number - this.state.answer);

  let feedback;
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

  this.setState({ feedback, guesses: this.state.guesses });
}else{
  this.setState({feedback: 'You already guessed that!'});
}
}
