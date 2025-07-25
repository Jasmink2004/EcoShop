import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Products() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  axios
    .get(`http://localhost:5000/api/products?category=${categoryName}`)
    .then(res => setProducts(res.data))
    .catch(() => setProducts([]));
}, [categoryName]);


  return (
    <div className="container mt-5">\
      <h2>{categoryName} Products</h2>
      <div className="row">
        {products.map(prod => (
          <div key={prod._id} className="col-md-4 mb-4">
            <div className="card h-100 shadow" style={{ background: '#fffde7' }}>
              <img src={prod.image} className="card-img-top" alt={prod.name} />
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">{prod.description}</p>
                <p className="card-text"><b>Price:</b> ${prod.price}</p>
                <button className="btn btn-primary me-2" onClick={() => navigate(`/product/${prod._id}`)}>View</button>
                <button className="btn btn-success" onClick={() => {
                  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
                  cart.push({ ...prod, quantity: 1 });
                  localStorage.setItem('cart', JSON.stringify(cart));
                  alert('Added to cart!');
                }}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Products;
