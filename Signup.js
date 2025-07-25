import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', address: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = (e) => {
    e.preventDefault();
    // TODO: Add backend signup
    navigate('/home');
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup} className="w-50 mx-auto">
        <input className="form-control mb-3" name="name" placeholder="Name" required value={form.name} onChange={handleChange} />
        <input className="form-control mb-3" name="email" type="email" placeholder="Email" required value={form.email} onChange={handleChange} />
        <input className="form-control mb-3" name="password" type="password" placeholder="Password" required value={form.password} onChange={handleChange} />
        <input className="form-control mb-3" name="address" placeholder="Address" required value={form.address} onChange={handleChange} />
        <button className="btn btn-success w-100" type="submit">Sign Up</button>
        <div className="mt-3 text-center">
          <span>Already have an account? </span>
          <a href="/">Login</a>
        </div>
      </form>
    </div>
  );
}
export default Signup;
