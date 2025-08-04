// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Margin } from '@mui/icons-material';

function Home() {
  const pageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    color: '#333',
  };

  const mainContentStyle = {
    flex: '1',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };


  const buttonLinkStyle = {
    backgroundColor: '#14424fff',
    color: 'white',
    padding: '12px 25px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '1em',
    margin:10
  };

  return (
    <div style={pageContainerStyle}>
      <Header />
      <div style={mainContentStyle}>
          <Link to="/posts" style={buttonLinkStyle}>Ver Posts</Link>
          <Link to="/users" style={buttonLinkStyle}>Ver Users</Link>
          <Link to="/todos" style={buttonLinkStyle}>Ver Todos</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;