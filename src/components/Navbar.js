import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">tutankhAman</div>
        <div className="nav-links">
          <a className="nav-btn" href="#projects">Projects</a>
          <a className="nav-btn" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

