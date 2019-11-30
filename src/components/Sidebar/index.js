import React from 'react';

import { Container } from './styles';

import { MdLibraryBooks, MdDashboard, MdPowerSettingsNew, MdVpnKey } from 'react-icons/md';

export default function Sidebar() {
  return (
    <Container>
      <button> <MdDashboard         size={40} color="#fff" /> </button>
      <button> <MdLibraryBooks      size={40} color="#fff" /> </button>
      <button> <MdVpnKey            size={40} color="#fff" /> </button>
      <button> <MdPowerSettingsNew  size={40} color="#fff" /> </button>
    </Container>
  );
}
