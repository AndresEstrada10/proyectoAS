import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Dirección del backend
});

// Endpoints de videojuegos
export const getVideojuegos = () => api.get('/videojuegos');
export const getVideojuegoById = (id) => api.get(`/videojuegos/${id}`);

// Endpoints del carrito
export const getCarrito = () => api.get('/carrito');
export const addToCarrito = (videojuego) => api.post('/carrito/agregar', videojuego);
export const removeFromCarrito = (id) => api.delete(`/carrito/${id}`);

// Endpoints de registros (compras)
export const createRegistro = (data) => api.post('/registro', data); // Para crear un nuevo registro de compra

export default api;
