import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1551807306-4bcd16b92a41?w=600&auto=format&fit=crop&q=80'
  },
  {
    name: 'Reusable',
    image: 'https://images.unsplash.com/photo-1557687790-902ede7ab58c?w=600&auto=format&fit=crop&q=80'
  },
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&auto=format&fit=crop&q=80'
  },
  {
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Wellness & Relaxation',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80'
  }
];

function Categories() {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <h2>Categories</h2>
      <div className="row">
        {categories.map(cat => (
          <div key={cat.name} className="col-md-4 mb-4">
            <div
              className="card shadow"
              style={{ cursor: 'pointer', background: '#e8f5e9' }}
              onClick={() => navigate(`/category/${cat.name}`)}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h4 className="card-title">{cat.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
