import React from 'react';
import ReactDOM from 'react-dom';

import './nav.css';

export default function Nav(props) {
	return (
		<div className="navigation">
	    <ul>
	    	<li><a href="#">How to play</a></li>
	    	<li><a href="#">New game</a></li>
	    </ul>
	  </div>
	);
}

// works more like suprise 