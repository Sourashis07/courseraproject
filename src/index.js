import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CartProvider>  {/* Wrap App inside CartProvider */}
      <App />
    </CartProvider>
  </BrowserRouter>
);
