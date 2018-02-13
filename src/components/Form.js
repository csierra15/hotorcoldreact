import React from 'react';
import {connect} from 'react-redux';

export default function MakeGuess({ makeGuess, guessCount }) {
	return (
		<form className="guessForm" onSubmit={(e) => {
			e.preventDefault();
			const userInput = e.target.userInput.value;
			makeGuess(userInput);
			e.target.userInput.value = '';
		}}>
		  <input type="number" name="userInput" min="1" max="100" placeholder="Enter Your Guess" required />
		  <button type="submit" className="guessBtn">Guess</button>
		</form>
	);
}
