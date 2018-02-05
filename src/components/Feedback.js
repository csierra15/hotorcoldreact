import React from 'react';

export default function Feedback({ feedback }) {
	return (
		<div>
			<h2 className="hotOrCold">{ feedback }</h2>
		</div>
	);
}