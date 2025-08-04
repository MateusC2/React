// src/components/CardTodo.jsx
import React from 'react';

function CardTodo({ todo }) {
  const baseCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    flex: '0 1 calc(33.33% - 20px)',
    minWidth: '280px',
    boxSizing: 'border-box',
  };

  const completedCardStyle = {
    backgroundColor: '#e6ffe6', // Verde claro para tarefas concluídas
    borderColor: '#a3e6a3',
  };

  const pendingCardStyle = {
    backgroundColor: '#fff',
  };

  const currentCardStyle = todo.completed
    ? { ...baseCardStyle, ...completedCardStyle }
    : { ...baseCardStyle, ...pendingCardStyle };

  const headingStyle = {
    color: '#333',
    marginTop: '0',
    fontSize: '1.2em',
    marginBottom: '10px',
    textDecoration: todo.completed ? 'line-through' : 'none',
  };

  const paragraphStyle = {
    color: '#666',
    fontSize: '0.9em',
    lineHeight: '1.5',
  };

  return (
    <div style={currentCardStyle}>
      <h4 style={headingStyle}>{todo.title}</h4>
      <p style={paragraphStyle}>Status: {todo.completed ? 'Concluído' : 'Pendente'}</p>
    </div>
  );
}

export default CardTodo;