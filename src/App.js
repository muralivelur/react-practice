import React, { Component, Fragment } from 'react';
import { UserInfo } from './components/UserInfo';
import { person1, person2 } from './person';
import './style.css';

//class App extends React.Component {}
class App extends Component {
  render() {
    return (
      <main>
        <h1> Members </h1>
        <UserInfo {...person1} />
        <hr />
        <UserInfo {...person2} />
      </main>
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
