import React from 'react';

import { MdLibraryBooks, MdDashboard, MdPowerSettingsNew, MdVpnKey } from 'react-icons/md';

import {Container, Sidebar} from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Sidebar>
        <button> <MdDashboard size={40} color="#fff" /> </button>
        <button> <MdLibraryBooks size={40} color="#fff" /> </button>
        <button> <MdVpnKey size={40} color="#fff" /> </button>
        <button> <MdPowerSettingsNew size={40} color="#fff" /> </button>
      </Sidebar>
    </Container>
  );
}
