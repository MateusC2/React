// src/components/CardPost.jsx
import React from 'react';

function CardPost({ post }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    flex: '0 1 calc(33.33% - 20px)',
    minWidth: '280px',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    color: '#333',
    marginTop: '0',
    fontSize: '1.2em',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    color: '#666',
    fontSize: '0.9em',
    lineHeight: '1.5',
  };

  return (
    <div style={cardStyle}>
      <h3 style={headingStyle}>{post.title}</h3>
      <p style={paragraphStyle}>{post.body}</p>
    </div>
  );
}

export default CardPost;