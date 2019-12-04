import React, { useState } from 'react';


import { Container, Content } from './styles';
import Sidebar from '../../components/Sidebar';
import Routes from './routes';

export default function Dashboard({ history }) {
  const [displayGrid, setDisplayGrid] = useState(false);

  if(!(localStorage.getItem('user'))){
    history.push('/');
  }

  return (
    <Container>
      <Sidebar history={history}/>
      <Content displayGrid={displayGrid}>
        <Routes displayGrid={setDisplayGrid}/>
      </Content>
    </Container>
  );
}
