import React, { Component } from 'react';
import { Greeting } from './components/Greeting';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = { name: 'Falabella' };
  }

  changeState = () => {
    this.setState({ name: 'Sodimac' });
  };

  render() {
    return (
      <main>
        <h1> Members {this.state.name}</h1>
        <Greeting name={this.state.name} />
        <button onClick={this.changeState}> Change me</button>
      </main>
    );
  }
}

export default App;
