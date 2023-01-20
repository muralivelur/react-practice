import React from 'react';

export const Address = (props) => {
  return (
    <address>
      <div> City : {props.address.city} </div>
      <div> State : {props.address.state} </div>
    </address>
  );
};
