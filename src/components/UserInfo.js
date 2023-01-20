import React, { Fragment } from 'react';
import { Greeting } from './Greeting';
import { Address } from './Address';
export const UserInfo = (props) => {
  return (
    <Fragment>
      <Greeting name={props.user.name} />
      <Address address={props.address} />
      <hr />
    </Fragment>
  );
};
