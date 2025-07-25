import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessModal from './SuccessModal';

function Checkout() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handlePay = () => {
    setShowModal(true);
    localStorage.removeItem('cart');
  };

  return (
    <div className="container mt-5">
      <h2>Order Summary</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Item</th><th>Price</th><th>Qty</th><th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total Amount: ${total.toFixed(2)}</h4>
      <button className="btn btn-success" onClick={handlePay}>Pay Now</button>
      <SuccessModal show={showModal} onHide={() => { setShowModal(false); navigate('/home'); }} />
    </div>
  );
}
export default Checkout;
