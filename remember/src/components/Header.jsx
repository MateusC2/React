// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const headerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    marginBottom: '10px',
  };

  return (
    <header style={headerStyle}>
      <h1>Header</h1>
    </header>
  );
}

export default Header;