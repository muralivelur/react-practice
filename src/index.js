/*import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);*/

import React from 'react';
import ReactDOM from 'react-dom';
//import {createRoot} from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const root = createRoot(document.getElementById('root'));

/*function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}*/

function Clock(props) {
  return (
    <div>
      <h1> Hello, World </h1>
      <h2> it is {props.date.toLocaleTimeString()} </h2>
    </div>
  );
}

function tick() {
  root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000);
