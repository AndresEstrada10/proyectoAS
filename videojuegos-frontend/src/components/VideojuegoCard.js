import React from 'react';
import { Link } from 'react-router-dom';

const VideojuegoCard = ({ videojuego, onToggleCarrito, inCarrito }) => {
  const { id, nombre, plataforma, genero, precio, imagen_url } = videojuego;

  const handleToggleCarrito = () => {
    onToggleCarrito(videojuego); // Llamamos al manejador de agregar/quitar del carrito
  };

  return (
    <div className="videojuego-card">
      <Link to={`/videojuego/${id}`} style={{ display: 'block', textDecoration: 'none' }}>
        <img src={imagen_url} alt={nombre} />
        <h3>{nombre}</h3>
        <p>Plataforma: {plataforma}</p>
        <p>Género: {genero}</p>
        <p>Precio: ${precio}</p>
      </Link>
      <div className="actions">
        <button
          onClick={handleToggleCarrito}
          className={`btn-carrito ${inCarrito ? 'rojo' : 'verde'}`}
        >
          {inCarrito ? 'Quitar del carrito' : 'Agregar al carrito'}
        </button>
      </div>
    </div>
  );
};

export default VideojuegoCard;
