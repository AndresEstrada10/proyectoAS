import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ carritoCount }) => {
  return (
    <header className="header">
      <Link to="/" className="title">🎮Videojuegos🎮</Link>
      <Link to="/carrito" className="cart">
        🛒 {carritoCount}
      </Link>
    </header>
  );
};

export default Header;
