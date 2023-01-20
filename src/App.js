import React, { Component } from 'react';
import { UserInfo } from './components/UserInfo';
import { person1, person2 } from './person';
import './style.css';

class App extends Component {
  render() {
    return (
      <main>
        <h1> Members </h1>
        <UserInfo {...person1} />
        <UserInfo {...person2} />
      </main>
    );
  }
}

export default App;
