// src/pages/Todos.jsx
import React, { useEffect, useState } from 'react';
import sheets from '../axios/api';
import CardTodo from '../components/CardTodo';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Todos() {
  const [todos, setTodos] = useState([]);

  const pageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    color: '#333',
  };

  const mainContentStyle = {
    flex: '1',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '20px auto',
  };

  const headingStyle = {
    color: '#333',
    marginBottom: '20px',
    fontSize: '1.8em',
  };

  const cardGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'start',
  };


  useEffect(() => {
    sheets.todos()
    .then(response => setTodos(response.data))
    .catch(error=> console.error("Erro ao buscar posts:", error))
  }, []);

  return (
    <div style={pageContainerStyle}>
      <Header />
      <main style={mainContentStyle}>
        <h2 style={headingStyle}>Tarefas</h2>
        <div style={cardGridStyle}>
          {todos.map(todo => (
            <CardTodo key={todo.id} todo={todo} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Todos;