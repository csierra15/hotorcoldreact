import React from 'react';
import {connect} from 'react-redux';

export default function GuessCount({ guessCount, guesses }) {
	guessCount = guesses.length;
	return(
		<h2 className="guessCount">Guess #{ guessCount }!</h2>
	);

}
