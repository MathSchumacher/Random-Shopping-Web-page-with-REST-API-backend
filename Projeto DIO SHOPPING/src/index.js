import React from 'react';
import ReactDOM from 'react-dom/client'; // Importação atualizada
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'; // Adicione isso se não estiver presente


const root = ReactDOM.createRoot(document.getElementById('root')); // Criação do root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
