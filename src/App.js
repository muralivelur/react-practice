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
        
        <button onClick={this.changeName.bind(this)}> Another Change Me</button>
      </main>
    );
  }

  /*
  
const customer = {name:"Sai", address:{city:"global", state:"Universe"}};

function displayName(text) {
  console.log(`Argument : ${text} this reference property : ${this.name}`);
}

//bind
  const bindDisplayMethod = displayName.bind(customer);
  bindDisplayMethod("Hello");

//call
displayName.call(customer, "argument");

//apply
function displayName(text, text1, text2) {
  console.log(`Argument : ${...arguments} this reference property : ${this.name}`);
  console.log(`Argument : ${text} ${text1} ${text2}`);
}
displayName.apply(customer, ["Hi","Hello","Me"]);
*/
}

export default App;
