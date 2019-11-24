import React from 'react';

import { MdLibraryBooks, MdDashboard, MdPowerSettingsNew, MdVpnKey } from 'react-icons/md';

import { Container, Sidebar, Content } from './styles';
import { Routes } from './routes';

export default function Dashboard() {
  return (
    <Container>
      <Sidebar>
        <button> <MdDashboard size={40} color="#fff" /> </button>
        <button> <MdLibraryBooks size={40} color="#fff" /> </button>
        <button> <MdVpnKey size={40} color="#fff" /> </button>
        <button> <MdPowerSettingsNew size={40} color="#fff" /> </button>
      </Sidebar>
      <Content>
        <Routes/>
      </Content>
    </Container>
  );
}
