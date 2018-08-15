import React from 'react';
import ReactDOM from 'react-dom';

import './nav.css';

export default function Nav(props) {
//call the restart game function, comes in as a prop from parent App.js//
	return (
		<div className="navigation">
	    <ul>
	    	<li><button className="new-game" onClick={props.restartGame}>New game</button></li>
	    </ul>
	  </div>
	);
}

// works more like suprise 