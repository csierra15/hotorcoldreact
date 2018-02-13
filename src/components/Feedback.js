import React from 'react';
import {connect} from 'react-redux';

const Feedback = ({ feedback }) => {
	return (
		<div>
			<h2 className="hotOrCold">{ feedback }</h2>
		</div>
	);
}

const mapStateToProps = state => ({
  feedback: state.feedback
});

export default connect(mapStateToProps)(Feedback);
