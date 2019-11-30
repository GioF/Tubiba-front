import React from 'react';

import { Container, Circle } from './styles';

export default function NotificationCard(props) {
  return (
    <Container>
      <ul>
        <li><Circle/><h1>{props.title}</h1></li>
        {props.title ? <li><Circle/><h2>{props.subtitle}</h2></li> : <></>}
      </ul>
    </Container>
  );
}
