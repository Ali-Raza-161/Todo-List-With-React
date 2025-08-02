import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  const footerStyle = {
    backgroundColor: '#343a40',
    color: '#fff',
    padding: '20px 0',
    position: 'relative',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    marginTop: '40px'
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <p className="mb-1">Made with ❤️ by Ali Raza</p>
        <small>© {new Date().getFullYear()} My Todo App. All rights reserved.</small>
        <p>Emial: mr.aliraza161.9l@gmail.com</p>
      </div>
    </footer>
  );
}
