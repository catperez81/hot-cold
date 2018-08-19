import React from 'react';
import ReactDOM from 'react-dom';

// if more advanced html, makes sense to leverage own component //

export default function Feedback(props) {
	return (
		<h3>{props.feedback}</h3>
	)
}