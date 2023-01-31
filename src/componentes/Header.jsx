import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import home from "../assets/home.png"
import search from "../assets/search.png"
import more from "../assets/more.png"

export const Header = () => {
    return (
      <header className="header-container">
        <div className="header">

          <div className="header-1">
            <img src={home} alt="home" />
            <p>Inicio</p>
          </div>

          <div className="header-2">
            <img src={more} alt="more" />
            <p>Mi lista</p>
          </div>

          <div className="header-3">
          <img src={search} alt="search" />
            <p>Busqueda</p>
          </div>

        </div>
      </header>
    );
  };
