import React from 'react';

export default function GuessList({ guesses }) {
	return (
		<div className="guessList">
			{guesses.map((guess, index) => (
				<div key={index}>
					<span>{ guess.number }</span>
				</div>
			))}
		</div>
	);
}