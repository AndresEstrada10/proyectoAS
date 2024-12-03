import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './pages/Inicio';
import DetalleVideojuego from './pages/DetalleVideojuego';
import Carrito from './pages/Carrito';

function App() {
  const [carritoCount, setCarritoCount] = React.useState(0);

  return (
    <Router>
      <Header carritoCount={carritoCount} />
      <Routes>
        <Route path="/" element={<Inicio setCarritoCount={setCarritoCount} />} />
        <Route path="/videojuego/:id" element={<DetalleVideojuego />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </Router>
  );
}

export default App;
