// src/components/Navbar/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">My Page</Link>
        </li>
        <li className="navbar-item">
          <Link to="/story" className="navbar-link">My Story</Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects" className="navbar-link">My Projects</Link>
        </li>
        <li className="navbar-item">
          <Link to="/dog" className="navbar-link">My Dog</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
