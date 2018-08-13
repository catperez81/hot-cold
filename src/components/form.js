import React from 'react';
import ReactDOM from 'react-dom';

import './form.css';

export default function Form() {

	onSubmit(event) {
		event.preventDefault();
	}

	currentGuess(guess) {
    guess = parseInt(guess, 10);
    
    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }

		return( 
			<form>
				<input type="text" /> 
				<input type="submit" className="submit" />
			</form>
		)

	}
}

