import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <Link to='/'>
        <img src={logo} id='logo' alt="Logo" />
      </Link>
      <button className="menu-button" onClick={toggleMenu}></button>
      <div className={`navbar ${menuOpen ? 'open' : ''}`}>
        <Link to='/seguro' className="link" onClick={closeMenu}>
          Seguro
        </Link>
        <Link to='/duvidas' className="link" onClick={closeMenu}>
          Dúvidas
        </Link>
        <Link to='/integrantes' className="link" onClick={closeMenu}>
          Integrantes
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
