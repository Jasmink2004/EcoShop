import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { productId } = useParams();
  const [prod, setProd] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products`)
      .then(res => setProd(res.data.find(p => p._id === productId)));
  }, [productId]);

  if (!prod) return <div className="container mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <div className="row">
          <div className="col-md-6">
            <img src={prod.image} alt={prod.name} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>{prod.name}</h2>
            <p>{prod.description}</p>
            <p><b>Price:</b> ${prod.price}</p>
            <button className="btn btn-success me-2" onClick={() => {
              let cart = JSON.parse(localStorage.getItem('cart') || '[]');
              cart.push({ ...prod, quantity: 1 });
              localStorage.setItem('cart', JSON.stringify(cart));
              alert('Added to cart!');
            }}>Add to Cart</button>
            <button className="btn btn-primary" onClick={() => navigate('/cart')}>Go to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
