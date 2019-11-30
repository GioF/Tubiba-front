import React from 'react';


import { Container, Content } from './styles';
import Sidebar from '../../components/Sidebar';
import Routes from './routes';

export default function Dashboard() {
  return (
    <Container>
      <Sidebar/>
      <Content>
        <Routes/>
      </Content>
    </Container>
  );
}
