import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-card">
          <img src={item.image} alt={item.name} width="100" />
          <div>
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Delete</button>
          </div>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <Link to="/products"><button>Continue Shopping</button></Link>
      <button onClick={() => alert('Checkout Coming Soon!')}>Checkout</button>
    </div>
  );
};

export default CartPage;