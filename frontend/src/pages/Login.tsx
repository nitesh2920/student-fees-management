import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../lib/axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      console.error('Login failed:', err);
      alert('Invalid login');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Welcome Back 👋</h2>
      <form onSubmit={submit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
