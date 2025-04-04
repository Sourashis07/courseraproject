import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === plant.id);
      if (exists) {
        return prev.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...plant, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

  const updateQuantity = (id, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + amount, 1) } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);