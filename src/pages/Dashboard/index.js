import React from 'react';

import { MdLibraryBooks, MdDashboard, MdPowerSettingsNew, MdVpnKey } from 'react-icons/md';

import './styles.css';

export default function Dashboard() {
  return (
    <div className="container">
      <div className="sidebar">
        <button> <MdDashboard size={40} color="#fff" /> </button>
        <button> <MdLibraryBooks size={40} color="#fff" /> </button>
        <button> <MdVpnKey size={40} color="#fff" /> </button>
        <button> <MdPowerSettingsNew size={40} color="#fff" /> </button>
      </div>
    </div>
  );
}
