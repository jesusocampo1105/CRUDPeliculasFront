import React from 'react';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <p className="copyright">Copyright - 2023. All Rights Reserved</p>
    </footer>
  );
};
