import React from 'react';
import {connect} from 'react-redux';

const GuessCount = ({ guessCount }) => {
	return(
		<h2 className="guessCount">Guess #{ guessCount }!</h2>
	);
}

const mapStateToProps = state => {
    console.log(state)
};
export default connect(mapStateToProps)(GuessCount);
