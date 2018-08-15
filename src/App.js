import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import Feedback from './components/feedback';
import Guesses from './components/guesses';
import Nav from './components/nav';

class App extends React.Component {
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
    });
  }

  addGuess(newGuess) {
    newGuess = parseInt(newGuess, 10);
    let feedback = "";
    //absolute value turns negative to positive integers //
    let difference = Math.abs(this.state.correctAnswer - newGuess);
    console.log("difference", difference);
    if(difference === 0) {
      feedback = "You guessed right!";
    } else if (difference < 10) {
      feedback = "You're getting hotter!";
    } else if (difference < 30) {
      feedback = "You're warm, keep trying!";
    } else {
      feedback = "Cold";
    }
    this.setState({
      guesses: [...this.state.guesses, newGuess],
      feedback: feedback
    });
  }

  // on restart game, empty argument syntax (), pass through as a prop //
  render() {
    console.log("currentNumber", this.state.correctAnswer);
    return (
      <div className="HotColdApp">
        <Nav restartGame={() => this.restartGame()} />
        <div className="app-body">
          <h1>Hot or Cold</h1>

          {/* add function as a prop to render the addGuess function */}
          <Form addGuess={guess => this.addGuess(guess)}/>

          <Feedback feedback={this.state.feedback} />
          <Guesses guesses={this.state.guesses} />
        </div>
      </div>
    );
  }
}


export default App;

