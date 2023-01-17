import React, { Component, Fragment } from 'react';
//normal export - check the name of it
import { Greeting as AnotherGreeting } from './components/Greeting';
//default export
import Greeting from './components/Greeting';
import './style.css';

//class App extends React.Component {}
class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Welcome Murali Bro !!!</h1>
        <Greeting name="sathwik" />
        <Greeting name="my dear !!!" />
        <AnotherGreeting name="React" />
      </Fragment>
    );
  }
}

/*export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}*/

export default App;
