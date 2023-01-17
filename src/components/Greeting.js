import React, { Component } from 'react';

// class component/*
/*class Greeting extends Component {
  render() {
    return <h2> Good Morning {this.props.name}</h2>;
  }
}*/

/*function Greeting(props) {
  return <h2> Good Morning {props.name}</h2>;
}*/

/*const Greeting = (props) => {
  return <h2> Good Morning {props.name}</h2>;
}*/

export default function Greeting(props) {
  return <h2> Good Morning {props.name}</h2>;
}

export { Greeting };
