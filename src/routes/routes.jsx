// routes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Orcamento from '../pages/Orcamento/orcamento';
import Clientes from '../pages/Clientes/clientes';
import Calculo from '../pages/Calculo/calculo';
import Proposta from '../pages/Proposta/proposta';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Rota inicial para a página Home */}
        <Route path="/" element={<Home />} />
        
        {/* Outra rota para a página About */}
        <Route path="/orcamento/:id?" element={<Orcamento />} />

        <Route path="/orcamentos" element={<Home />} />

        <Route path="/clientes" element={<Clientes />} />

        <Route path="/calculo" element={<Calculo />} />

        <Route path='/proposta' element={<Proposta />}/>

        
        {/* Redireciona qualquer rota não existente para a Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
