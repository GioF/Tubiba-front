import React from 'react';

import { Container } from './styles';

import { MdLibraryBooks, MdDashboard, MdPowerSettingsNew, MdVpnKey } from 'react-icons/md';

export default function Sidebar({history}) {

  return (
    <Container>
      <button onClick={() => history.push('/dashboard/all')}>  <MdDashboard         size={40} color="#fff" /> </button>
      <button onClick={() => history.push('/dashboard/')}>   <MdLibraryBooks      size={40} color="#fff" /> </button>
      <button onClick={() => history.push('/dashboard/teacher')}>     <MdVpnKey            size={40} color="#fff" /> </button>
      <button onClick={() => history.push('/')}>                      <MdPowerSettingsNew  size={40} color="#fff" /> </button>
    </Container>
  );
}
