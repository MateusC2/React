// src/pages/Users.jsx
import React, { useEffect, useState } from 'react';
import sheets from '../axios/api';
import CardUser from '../components/CardUser';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Users() {
  const [users, setUsers] = useState([]);

  const pageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    color: '#333',
  };

  const mainContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f0f2f5',
    color: '#333',
  };

  const headingStyle = {
    color: '#333',
    marginBottom: '20px',
    fontSize: '1.8em',
  };


  useEffect(() => {
    sheets.users()
    .then(response => setUsers(response.data))
    .catch(error=> console.error("Erro ao buscar posts:", error))
  }, []);

  return (
    <div style={pageContainerStyle}>
      <Header />
      <main style={mainContentStyle}>
        <h2 style={headingStyle}>Usuários</h2>
        <div>
          {users.map(user => (
            <CardUser key={user.id} user={user} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Users;