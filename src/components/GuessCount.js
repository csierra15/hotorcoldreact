import React from 'react';

export default function GuessCount({ guessCount, guesses }) {
	guessCount = guesses.length;
	return(
		<h2 className="guessCount">Guess #{ guessCount }!</h2>
	);
	
}
