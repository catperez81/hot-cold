import React from 'react';
import ReactDOM from 'react-dom';

import './guesses.css';

export default function Guesses(props) {

  const guesses = props.guesses.map((guess, index) => (
      <li className="guesses-wrapper" key={index}>
        {guess}
      </li>
  ));

	return (
		<div className="guess-count">
			<ul>
				{guesses}
			</ul>
		</div>
	)
}