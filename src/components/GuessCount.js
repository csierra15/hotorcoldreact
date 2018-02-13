import React from 'react';
import {connect} from 'react-redux';

const GuessCount = ({ guessCount, guesses }) => {
	return(
		<h2 className="guessCount">Guess #{ guessCount }!</h2>
	);

}

const mapStateToProps = state => ({
    guessCount: state.guesses.length
});
export default connect(mapStateToProps)(GuessCount);
