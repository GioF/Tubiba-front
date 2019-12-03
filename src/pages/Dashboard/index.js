import React, { useState } from 'react';


import { Container, Content } from './styles';
import Sidebar from '../../components/Sidebar';
import Routes from './routes';

export default function Dashboard() {
  const [displayGrid, setDisplayGrid] = useState('');

  return (
    <Container>
      <Sidebar/>
      <Content displayGrid={displayGrid}>
        <Routes displayFunc={setDisplayGrid}/>
      </Content>
    </Container>
  );
}
