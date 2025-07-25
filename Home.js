import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 mb-4">Welcome to EcoShop!</h1>
      <p className="lead mb-5">Shop sustainable products for a better world.</p>
      <button className="btn btn-lg btn-success" onClick={() => navigate('/categories')}>Browse Categories</button>
    </div>
  );
}
export default Home;
