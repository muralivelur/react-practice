import React from 'react';
const UserInfo = (props) => {
  return (
    <Fragment>
      <h2> Good Morning {props.name}</h2>
      <button>Child Button</button>
    </Fragment>
  );
};

export { UserInfo };
