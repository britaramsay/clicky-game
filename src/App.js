import React, { Component } from 'react';
import './App.css';
import Container from './components/Container/Container.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tim and Eric Clicky Game</h1>
          <p>Click each image once to win. Do not click the same image twice!</p>
        </header>
        <Container /> 
      </div>
    );
  }
}

export default App;
