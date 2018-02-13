import React from 'react';
import {connect} from 'react-redux';

import { makeGuess } from '../actions';

const MakeGuess = ({ makeGuess, guessCount }) => {
	return (
		<form className="guessForm" onSubmit={(e) => {
			e.preventDefault();
			const guess = e.target.userInput.value;
			makeGuess(guess);
			e.target.userInput.value = '';
		}}>
		  <input type="number" name="userInput" min="1" max="100" placeholder="Enter Your Guess" required />
		  <button type="submit" className="guessBtn">Guess</button>
		</form>
	);
}

const mapDispatchToProps = (dispatch) => ({
	makeGuess: (guess) => dispatch(makeGuess(guess))
})

export default connect (null, mapDispatchToProps)(MakeGuess)
