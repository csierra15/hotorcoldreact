import React from 'react';
import {connect} from 'react-redux';
import { newGame } from '../actions'

const Nav = (props) => {
	return (
		<div className="navBar">
			<ul className="nav-list">
				<a href="#about"><li>What?</li></a>
				<a href="#newGame"
					onClick={() =>
              props.dispatch(
                  newGame(Math.floor(Math.random() * 100) + 1)
              )}>
							<li>+New Game</li></a>
			</ul>
		</div>
	);
}

export default connect()(Nav);
