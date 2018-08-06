import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import Guesses from './components/guesses';
import Nav from './components/nav';
import Feedback from './components/feedback';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [2, 3, 12],
      correctAnswer: Math.floor(Math.random() * 100) + 1,
      feedback: 'Make a guess'  
    }
  }

  render() {
    return (
      <div className="HotColdApp">
        <Nav />
        <h1>Hot or Cold</h1>
        <Feedback feedback={this.state.feedback} />
        <Form />
        <Guesses guesses={this.state.guesses} />
      </div>
    );
  }
}


export default App;
