import React from 'react';
import {connect} from 'react-redux';

export default function Feedback({ feedback }) {
	return (
		<div>
			<h2 className="hotOrCold">{ feedback }</h2>
		</div>
	);
}
