import React, { Component } from 'react';
import './App.css';
import MakeGuess from './components/Form';
import Nav from './components/Nav';
import Title from './components/Heading';
import Feedback from './components/Feedback';
import GuessCount from './components/GuessCount';
import GuessList from './components/GuessList';

export default class App extends Component {

render() {
    return (
      <div className="app">
        <Nav />
        <Title />
        <Feedback />
        <MakeGuess />
        <GuessCount />
        <GuessList />
      </div>
    );
  }
}
