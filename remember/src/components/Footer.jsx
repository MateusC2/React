// src/components/Footer.jsx
import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    position: 'relative', // Use relative para o rodapé seguir o conteúdo
    bottom: '0',
    width: '100%',
    marginTop: 'auto',
    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <footer style={footerStyle}>
      <p>Footer</p>
    </footer>
  );
}

export default Footer;