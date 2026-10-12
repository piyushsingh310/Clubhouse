import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-glass">
      <div className="logo-container">
        <img src="/sparkle-logo.png" alt="logo" className="nav-logo-img" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/me">Me</Link>
      </div>
    </nav>
  );
};

export default Navbar;