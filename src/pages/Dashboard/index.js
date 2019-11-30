import React from 'react';

import { MdLibraryBooks, MdDashboard, MdPowerSettingsNew, MdVpnKey } from 'react-icons/md';

import { Container, Sidebar, Content } from './styles';
import Routes from './routes';

//TEMP
//import Exercises from '../../components/Exercises';
//import ExerciseForm from '../../components/ExerciseForm';
import ExerciseList from '../../components/ExerciseList';

export default function Dashboard() {
  return (
    <Container>
      <Sidebar>
        <button> <MdDashboard         size={40} color="#fff" /> </button>
        <button> <MdLibraryBooks      size={40} color="#fff" /> </button>
        <button> <MdVpnKey            size={40} color="#fff" /> </button>
        <button> <MdPowerSettingsNew  size={40} color="#fff" /> </button>
      </Sidebar>
      <Content>
        <ExerciseList></ExerciseList>
        <Routes/>
      </Content>
    </Container>
  );
}