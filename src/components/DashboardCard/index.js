import React from 'react';

import { Container, Content } from './styles';

export default function DashboardCard(props) {
  return (
    <Container gridArea={props.gridArea}>
      <header>
        {props.title}
      </header>
      
      <Content>
       {props.children}
      </Content>
    </Container>
  );
}
