import React from 'react';
import ReactDOM from 'react-dom';

import './form.css';

export default class Form extends React.Component {

	onSubmit(event) {
		event.preventDefault();

		if(this.props.currentGuess) {
			const value = this.input.value;
			this.props.currentGuess(value);
		}

		console.log(this.input.value);

		this.input.value = '';
		this.input.focus();
	}

	render() {
		return( 
			<form onSubmit={e => this.onSubmit(e)}>
				<input type="number" className="number-field" min="1" max="100" ref={input => (this.input = input)} required /> 
				<button type="submit" className="submit">Guess</button>
			</form>
		)
	}
}