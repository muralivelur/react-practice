import React, { Component } from 'react';
import { UserInfo } from './components/UserInfo';
import { person1, person2 } from './person';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = { name: 'Falabella' };
    // bind the context this object to the method
    this.updateName = this.changeName.bind(this);
  }
  changeName() {
    this.setState({ name: 'Sodimac' });
  }
  render() {
    return (
      <main>
        <h1> Members {this.state.name}</h1>
        <UserInfo {...person1} />
        <UserInfo {...person2} />
        <button onClick={this.updateName}> Change Me</button>
      </main>
    );
  }
}

export default App;
