// routes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Orcamento from '../pages/Orcamento/orcamento';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Rota inicial para a página Home */}
        <Route path="/" element={<Home />} />
        
        {/* Outra rota para a página About */}
        <Route path="/orcamento" element={<Orcamento />} />
        
        {/* Redireciona qualquer rota não existente para a Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
