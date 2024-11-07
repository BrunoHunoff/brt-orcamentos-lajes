// routes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Orcamento from '../pages/Orcamento/orcamento';
import Clientes from '../pages/Clientes/clientes';
import Calculo from '../pages/Calculo/calculo';
import Proposta from '../pages/Proposta/proposta';
import Login from '../pages/Login/login';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/login' element={<Login/>} />
        
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
