import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVideojuegoById, addToCarrito, removeFromCarrito, getCarrito } from '../services/api';

const DetalleVideojuego = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [videojuego, setVideojuego] = useState(null);
  const [inCarrito, setInCarrito] = useState(false);

  // Función para obtener la información del videojuego y el estado del carrito
  useEffect(() => {
    async function fetchData() {
      const videojuegoRes = await getVideojuegoById(id);
      const carritoRes = await getCarrito();
      
      // Actualiza el estado del videojuego y si está en el carrito
      setVideojuego(videojuegoRes.data);
      setInCarrito(carritoRes.data.carrito.some((item) => item.id === parseInt(id)));
    }
    fetchData();
  }, [id]);

  // Maneja la adición o eliminación del videojuego del carrito
  const handleToggleCarrito = async () => {
    if (inCarrito) {
      await removeFromCarrito(id);  // Elimina del carrito
    } else {
      await addToCarrito(videojuego);  // Agrega al carrito
    }

    // Actualiza el estado del carrito y el botón
    const carritoRes = await getCarrito();
    setInCarrito(carritoRes.data.carrito.some((item) => item.id === parseInt(id)));
  };

  if (!videojuego) return <p>Cargando...</p>;

  const { nombre, descripcion, precio, genero, plataforma, fecha_lanzamiento, imagen_url } = videojuego;

  return (
    <div className="detalle-videojuego">
      <img src={imagen_url} alt={nombre} />
      <h1>{nombre}</h1>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Plataforma:</strong> {plataforma}</p>
      <p><strong>Género:</strong> {genero}</p>
      <p><strong>Fecha de lanzamiento:</strong> {fecha_lanzamiento}</p>
      <p><strong>Precio:</strong> ${precio}</p>
      <button onClick={handleToggleCarrito}>
        {inCarrito ? 'Quitar del carrito' : 'Agregar al carrito'}
      </button>
      <button onClick={() => navigate('/')}>Volver al inicio</button>
    </div>
  );
};

export default DetalleVideojuego;
