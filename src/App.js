import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes y Route

import MenuNavegacion from './paginas/MenuNavegacion';
import Inicio from './paginas/Inicio';
import Contacto from './paginas/Contacto';
import Conocenos from './paginas/Conocenos';

function App() {
  return (
    <Router>
      <div>
        <MenuNavegacion />
        <Routes> {/* Aquí envuelve tus rutas dentro de un componente Routes */}
          <Route path="/" element={<Inicio />} /> {/* Usa 'element' en lugar de 'component' para React Router v6 */}
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/conocenos" element={<Conocenos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
