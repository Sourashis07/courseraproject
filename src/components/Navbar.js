import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaHome, FaShoppingCart, FaSeedling } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="logo">Paradise-Nursery</div>
      <div className="nav-links">
        <Link to="/" className="nav-item"><FaHome /> Home</Link>
        <Link to="/products" className="nav-item"><FaSeedling /> Products</Link>
        <Link to="/cart" className="nav-item"><FaShoppingCart /> Cart ({cart.length})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
