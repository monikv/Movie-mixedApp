// src/pages/Login.jsx
import { useState } from 'react';
import publicApi from './api/apiPublic';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await publicApi.post('/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Login success!');
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
