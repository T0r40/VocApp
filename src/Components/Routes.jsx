import React from 'react';
import ModoEstudio from './ModoEstudio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Principal from './Principal';
import Examen from './Examen';
function Rutas() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Principal/>} />
            <Route path="/examen" element={<Examen/>} />
            <Route path="/modoEstudio" element={<ModoEstudio />} />
        </Routes>
    </Router>
  );
}

export default Rutas;
