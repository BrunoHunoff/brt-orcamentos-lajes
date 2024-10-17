// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/routes'; 
import './index.css';
import { OrcamentoProvider } from './contexts/OrcamentoContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OrcamentoProvider>
      <AppRoutes />
    </OrcamentoProvider>
  </React.StrictMode>
);
