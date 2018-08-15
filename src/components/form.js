import React from 'react';
import ReactDOM from 'react-dom';

import './form.css';


export default class Form extends React.Component {

	onSubmit(event) {
		event.preventDefault();

		if(this.props.addGuess) {
			const value = this.input.value;
			// calling the addGuess function from parent App.js below //
			this.props.addGuess(value);
		}

		// resets to empty state, put focus back on field //
		this.input.value = '';
		this.input.focus();
	}

	// the ref in input sets a reference in form to the input field itself - would be undefined if I didn't add this - no way to get value //
	render() {
		return( 
			<form onSubmit={e => this.onSubmit(e)}>
				<input type="number" className="number-field" min="1" max="100" ref={input => (this.input = input)} required /> 
				<button type="submit" className="submit">Guess</button>
			</form>
		)
	}
}