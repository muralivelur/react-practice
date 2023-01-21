import React, { Fragment } from 'react';

const Greeting = (props) => {
  return (
    <Fragment>
      <h2> Good Morning {props.name}</h2>
      <button onClick={props.updateName('Murali')}>Child Button</button>
    </Fragment>
  );
};

export { Greeting };
