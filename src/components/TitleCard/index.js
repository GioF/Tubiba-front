import React from 'react';

import { Container } from './styles';

export default function TitleCard(props) {
  return (
    <Container>
      <header>{props.children}</header>
    </Container>
  );
}
