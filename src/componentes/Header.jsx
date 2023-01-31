import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Logo from "../assets/Logo.png"

export const Header = () => {
    return (
      <header className="header-container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <nav className="menu">
          <ul>
            <li><Link to="/Table">Ver Tabla</Link></li>
            <li><Link to="/Form">Ver Form</Link></li>
          </ul>
        </nav>
      </header>
    );
  };
