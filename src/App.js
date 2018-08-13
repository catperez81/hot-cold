import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import Guesses from './components/guesses';
import Nav from './components/nav';
import Feedback from './components/feedback';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make a guess between 1 and 100',  
      correctAnswer: Math.floor(Math.random() * 100) + 1,
    }
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: 'Make a guess between 1 and 100',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    )};
  }

  currentGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }
  }

  render() {
    return (
      <div className="HotColdApp">
        <Nav />
        <div className="app-body">
          <h1>Hot or Cold</h1>
          <Form />
          <Feedback feedback={this.state.feedback} />
          <Guesses guesses={this.state.guesses} />
        </div>
      </div>
    );
  }
}


export default App;

