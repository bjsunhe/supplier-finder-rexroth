import React from 'react';
import './Navigation.css';
import logo from './bosch-logo.png'; 
const Navigation = () => {
    return (
      <header className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Bosch Logo" className="logo" />
        </div>
        <nav className="navbar-center">
          <ul>
            <li><a href="#">GenAI Function Finder</a></li>
            
          </ul>
        </nav>
        <div className="navbar-right">
          <a href="#"><i className="fas fa-search"></i></a>
          <a href="#"><i className="fas fa-globe"></i></a>
          <a href="#"><i className="fas fa-bars"></i></a>
        </div>
      </header>
    );
  };

  export default Navigation