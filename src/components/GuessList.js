import React from 'react';
import { connect } from 'react-redux';

const GuessList = ({ guesses }) => {
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

const mapStateToProps = state => ({
	guesses: state.guess.guesses
})

export default connect(mapStateToProps)(GuessList);
