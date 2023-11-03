import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo-container">
      <span className="logo-text">OlaYiiMiiKa</span>
    </div>
    <ul className="nav-links">
      <li><a href="/">Service</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Projects</a></li>
    </ul>
    <button className='button'>Contact</button>
  </nav>
  );
}

export default Navbar