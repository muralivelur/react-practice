import React, { Component } from 'react';
import { Greeting } from './components/Greeting';
import './style.css';

class App extends Component {
  /* constructor() {
    super();
    this.state = { name: 'Falabella' };
    // bind method can be avoided beacuse of the arrow functions defined at changeState
  }*/

  //constructor also can be removed and keep the state defined out of the constructor

  state = { name: 'Falabella' };

  // closure
  changeState = (nameValue) => () => {
    this.setState({ name: nameValue });
  };

  updateState = (event) => {
    console.log(event);
    const textBoxValue = event.target.value;
    this.setState({ name: textBoxValue });
  };

  componentWillMount() {
    console.log("I'm about to mounted");
  }
  componentDidMount() {
    console.log("I'm just mount");
  }
  render() {
    return (
      <main>
        <h1> Members {this.state.name}</h1>
        <Greeting name={this.state.name} updateName={this.changeState} />
        <input
          name="stateChangeTextBox"
          value={this.state.name}
          onChange={this.updateState}
        />
        <button onClick={this.changeState('Sodimac')}> Change me</button>
      </main>
    );
  }
}
export default App;
