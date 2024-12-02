import React, { useState, useEffect } from 'react'; 
import { getVideojuegos, getCarrito, addToCarrito, removeFromCarrito } from '../services/api';
import VideojuegoCard from '../components/VideojuegoCard';
import Filtros from '../components/Filtros';

const Inicio = ({ carritoCount, setCarritoCount }) => {
  const [videojuegos, setVideojuegos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [filtros, setFiltros] = useState({ plataforma: '', genero: '', orden: '' });

  // Cargar juegos y carrito al inicializar el componente
  useEffect(() => {
    async function fetchData() {
      const juegosRes = await getVideojuegos();
      const carritoRes = await getCarrito();
      setVideojuegos(juegosRes.data);
      setCarrito(carritoRes.data.carrito || []);
      setCarritoCount(carritoRes.data.carrito?.length || 0); // Actualizamos el contador del carrito
    }
    fetchData();
  }, [setCarritoCount]);

  // Manejar agregar/quitar del carrito
  const handleToggleCarrito = async (videojuego) => {
    const inCarrito = carrito.some((item) => item.id === videojuego.id);

    if (inCarrito) {
      // Si ya está en el carrito, lo quitamos
      await removeFromCarrito(videojuego.id);
      setCarrito((prevCarrito) => {
        const updatedCarrito = prevCarrito.filter((item) => item.id !== videojuego.id);
        setCarritoCount(updatedCarrito.length); // Actualizamos el contador del carrito
        return updatedCarrito;
      });
    } else {
      // Si no está en el carrito, lo agregamos
      await addToCarrito(videojuego);
      setCarrito((prevCarrito) => {
        const updatedCarrito = [...prevCarrito, videojuego];
        setCarritoCount(updatedCarrito.length); // Actualizamos el contador del carrito
        return updatedCarrito;
      });
    }
  };

  // Aplicar filtros y ordenamiento
  const aplicarFiltros = () => {
    let juegosFiltrados = [...videojuegos];
    
    // Filtrar por plataforma y género
    if (filtros.plataforma) {
      juegosFiltrados = juegosFiltrados.filter((juego) =>
        juego.plataforma.includes(filtros.plataforma)
      );
    }
    if (filtros.genero) {
      juegosFiltrados = juegosFiltrados.filter((juego) =>
        juego.genero.includes(filtros.genero)
      );
    }

    // Ordenar por precio o fecha
    if (filtros.orden === 'precio-asc') {
      juegosFiltrados.sort((a, b) => a.precio - b.precio);
    } else if (filtros.orden === 'precio-desc') {
      juegosFiltrados.sort((a, b) => b.precio - a.precio);
    } else if (filtros.orden === 'fecha-asc') {
      juegosFiltrados.sort((a, b) => new Date(a.fecha_lanzamiento) - new Date(b.fecha_lanzamiento));
    } else if (filtros.orden === 'fecha-desc') {
      juegosFiltrados.sort((a, b) => new Date(b.fecha_lanzamiento) - new Date(a.fecha_lanzamiento));
    }

    return juegosFiltrados;
  };

  return (
    <div>
      <Filtros filtros={filtros} setFiltros={setFiltros} />
      <div className="videojuegos-grid">
        {aplicarFiltros().map((videojuego) => (
          <VideojuegoCard
            key={videojuego.id}
            videojuego={videojuego}
            onToggleCarrito={handleToggleCarrito}
            inCarrito={carrito.some((item) => item.id === videojuego.id)} // Verificar si el videojuego está en el carrito
          />
        ))}
      </div>
    </div>
  );
};

export default Inicio;
