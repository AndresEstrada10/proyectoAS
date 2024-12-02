import React, { useState, useEffect } from 'react';
import { getCarrito, removeFromCarrito, createRegistro } from '../services/api';  // Importar el servicio para crear registros

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function fetchCarrito() {
      try {
        const carritoRes = await getCarrito();
        const carritoData = carritoRes.data.carrito || [];
        setCarrito(carritoData);
        const totalCompra = carritoData.reduce((acc, item) => acc + item.precio, 0);
        setTotal(totalCompra);
      } catch (err) {
        setError("No se pudo cargar el carrito.");
        console.error("Error al cargar el carrito:", err);
      }
    }
    fetchCarrito();
  }, []);

  const handleRemoveFromCarrito = async (id) => {
    try {
      await removeFromCarrito(id);  // Eliminar del carrito en el backend
      const carritoRes = await getCarrito();  // Obtener carrito actualizado
      const carritoData = carritoRes.data.carrito || [];
      setCarrito(carritoData);  // Actualizar el estado del carrito
      const totalCompra = carritoData.reduce((acc, item) => acc + item.precio, 0);
      setTotal(totalCompra);  // Actualizar total
    } catch (err) {
      setError("No se pudo eliminar el producto del carrito.");
      console.error("Error al eliminar del carrito:", err);
    }
  };

  const iva = total * 0.16; // IVA del 16%
  const totalConIva = total + iva;

  const handleFinalizarCompra = async () => {
    try {
      // Crear el registro de la compra
      const carritoData = carrito.map(item => item.videojuegoId);  // Extraer los IDs de los juegos
      const data = {
        juegos: carritoData,
        total: totalConIva
      };

      // Guardar el registro de compra en el backend
      await createRegistro(data);

      // Vaciar el carrito en el backend
      await Promise.all(carrito.map(item => removeFromCarrito(item.videojuegoId)));

      // Vaciar el carrito en el estado local
      setCarrito([]);
      setTotal(0);

      setSuccess(true);  // Marcar como compra exitosa
      alert("¡Compra realizada con éxito!");
    } catch (err) {
      setError("Hubo un error al procesar tu compra.");
      console.error("Error al finalizar la compra:", err);
    }
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!carrito.length) {
    return <p>Tu carrito está vacío.</p>;
  }

  return (
    <div className="carrito">
      <h1>Carrito de Compras</h1>
      <ul>
        {carrito.map((item) => (
          <li key={item.videojuegoId}> {/* Asegúrate de usar un identificador único correcto */}
            {item.nombre} - ${item.precio}
            <button onClick={() => handleRemoveFromCarrito(item.videojuegoId)}>
              Quitar
            </button>
          </li>
        ))}
      </ul>
      <p><strong>Subtotal:</strong> ${total.toFixed(2)}</p>
      <p><strong>IVA (16%):</strong> ${iva.toFixed(2)}</p>
      <p><strong>Total:</strong> ${totalConIva.toFixed(2)}</p>
      <button onClick={handleFinalizarCompra} className="finalizar-compra-btn">
        Finalizar Compra
      </button>
      {success && <p style={{ color: 'green' }}>¡Compra realizada con éxito!</p>}
    </div>
  );
};

export default Carrito;
