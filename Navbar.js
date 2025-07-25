import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/home">EcoShop</Link>
        <div>
          <button className="btn btn-outline-light me-2" onClick={() => navigate(-1)}>Back</button>
          <Link className="btn btn-outline-light me-2" to="/cart">Cart</Link>
          <Link className="btn btn-outline-light" to="/">Logout</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
