import React from 'react';

export default function Nav() {
	return (
		<div className="navBar">
			<ul className="nav-list">
				<a href="#about"><li>What?</li></a>
				<a href="#newGame"><li>+New Game</li></a>
			</ul>
		</div>
	);
}